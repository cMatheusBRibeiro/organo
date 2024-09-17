import "./App.css";
import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from "./componentes/Formulario";
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Mock from "./Mock";

function App() {
  const [times, setTimes] = useState([
    {
      nome: "Programação",
      cor: "#57C278"
    },
    {
      nome: "Front-End",
      cor: "#82CFFA"
    },
    {
      nome: "Data Science",
      cor: "#A6D157"
    },
    {
      nome: "Devops",
      cor: "#E06B69"
    },
    {
      nome: "UX e Design",
      cor: "#DB6EBF"
    },
    {
      nome: "Mobile",
      cor: "#FFBA05"
    },
    {
      nome: "Inovação e Gestão",
      cor: "#FF8A29"
    },
  ]);

  const [colaboradores, setColaboradores] = useState(Mock(times));

  const aoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador]);
  }

  const aoDeletarColaborador = (colaborador) => {
    console.log(colaborador);
  }

  const mudarCorDoTime = (cor, nome) => {
    setTimes(times.map((time) => {
      if (time.nome === nome) {
        time.cor = cor;
      }
      return time;
    }));
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={(colaborador) => aoColaboradorCadastrado(colaborador)}
      />
      <section className="times">
        <h1>Minha Organização</h1>
        {times.map((time) =>
          <Time
            key={time.nome}
            time={time}
            colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
            aoDeletarColaborador={(colaborador) => aoDeletarColaborador(colaborador)}
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
