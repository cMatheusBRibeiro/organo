import "./App.css";
import { useEffect, useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from "./componentes/Formulario";
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Mock from "./Mock";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineLibraryAdd } from "react-icons/md";

function App() {
  const [times, setTimes] = useState([]);

  const [colaboradores, setColaboradores] = useState([]);

  const [formularioAberto, setFormularioAberto] = useState(true);

  const aoColaboradorCadastrado = (colaborador) => {
    const formNovoColaborador = {
      id: uuidv4(),
      nome: colaborador.nome,
      cargo: colaborador.cargo,
      imagem: colaborador.imagem,
      time: colaborador.time,
      favorito: false
    };

    const config = {
      method: "POST",
      body: JSON.stringify(formNovoColaborador)
    };

    fetch("http://localhost:8080/colaboradores", config)
      .then(() => buscarColaboradores());
  }

  const aoDeletarColaborador = (idColaborador) => {
    const config = {
      method: "DELETE"
    };
    fetch(`http://localhost:8080/colaboradores/${idColaborador}`, config)
      .then(() => buscarColaboradores());
  }

  const resolverFavoritarColaborador = (colaborador) => {
    colaborador.favorito = !colaborador.favorito;

    const config = {
      method: "PUT",
      body: JSON.stringify(colaborador)
    };

    fetch(`http://localhost:8080/colaboradores/${colaborador.id}`, config)
      .then(() => buscarColaboradores());
  }

  const aoTimeCadastrado = (time) => {
    const formNovoTime = {
      id: uuidv4(),
      nome: time.nome,
      cor: time.cor
    };

    const config = {
      method: "POST",
      body: JSON.stringify(formNovoTime)
    };

    fetch("http://localhost:8080/times", config)
      .then(() => buscarTimes());
  }

  const mudarCorDoTime = (cor, id) => {
    setTimes(times.map((time) => {
      if (time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  const alterarApresentacaoDosFormularios = () => {
    setFormularioAberto(!formularioAberto);
  }

  const buscarTimes = () => {
    fetch("http://localhost:8080/times")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setTimes(dados);
      });
  }

  const buscarColaboradores = () => {
    fetch("http://localhost:8080/colaboradores")
      .then((resposta) => resposta.json())
      .then((dados) => {
        setColaboradores(dados);
      });
  }

  useEffect(() => {
    buscarTimes();
    buscarColaboradores();
  }, []);

  return (
    <div className="App">
      <Banner/>
      {
        formularioAberto &&
        <Formulario
          times={times.map((time) => time.nome)}
          aoColaboradorCadastrado={(colaborador) => aoColaboradorCadastrado(colaborador)}
          aoTimeCadastrado={(time) => aoTimeCadastrado(time)}
        />
      }
      <section className="times">
        <div class="cabecalho">
          <h1>Minha Organização</h1>
          <button
            className="alternador-apresentacao-formulario"
            onClick={() => alterarApresentacaoDosFormularios()}
          >
            <MdOutlineLibraryAdd
              size={35}
            />
          </button>
        </div>
        {times.map((time) =>
          <Time
            key={time.nome}
            time={time}
            colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
            aoDeletarColaborador={(colaborador) => aoDeletarColaborador(colaborador)}
            aoFavoritarColaborador={(colaborador) => resolverFavoritarColaborador(colaborador)}
            mudarCor={(cor, nome) => mudarCorDoTime(cor, nome)}
          />
        )}
      </section>
      <Rodape/>
      <SpeedInsights/>
    </div>
  );
}

export default App;
