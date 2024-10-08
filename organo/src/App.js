import "./App.css";
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from "./componentes/Formulario";
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Mock from "./Mock";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineLibraryAdd } from "react-icons/md";

function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278"
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA"
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157"
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69"
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF"
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05"
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29"
    },
  ]);

  const [colaboradores, setColaboradores] = useState(Mock(times));

  const [formularioAberto, setFormularioAberto] = useState(true);

  const aoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  const aoDeletarColaborador = (idColaborador) => {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== idColaborador));
  }

  const resolverFavoritarColaborador = (idColaborador) => {
    setColaboradores(colaboradores.map((colaborador) => {
      if (colaborador.id === idColaborador) {
        colaborador.favorito = !colaborador.favorito;
      }
      return colaborador;
    }));
  }

  const aoTimeCadastrado = (time) => {
    setTimes([...times, time]);
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
            aoFavoritarColaborador={(id) => resolverFavoritarColaborador(id)}
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
