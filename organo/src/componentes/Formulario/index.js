import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Formulario = ({ times, aoColaboradorCadastrado, aoTimeCadastrado }) => {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const [nomeTime, setNomeTime] = useState("");
    const [corTime, setCorTime] = useState("");

    const aoSalvar = (evento) => {
        evento.preventDefault();
        aoColaboradorCadastrado({
            id: uuidv4(),
            nome,
            cargo,
            imagem,
            time
        });
        reiniciarFormulario();
    }

    const reiniciarFormulario = () => {
        setNome("");
        setCargo("");
        setImagem("");
        setTime("");
    }

    const aoSalvarTime = (evento) => {
        evento.preventDefault();
        aoTimeCadastrado({
            id: uuidv4(),
            nome: nomeTime,
            cor: corTime
        });
        reiniciarFormularioTime();
    }

    const reiniciarFormularioTime = () => {
        setNomeTime("");
        setCorTime("");
    }

    return (
        <section className="formulario">
            <form onSubmit={(evento) => aoSalvar(evento)}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={(valor) => setCargo(valor)}
                />
                <CampoTexto
                    label="Imagem"
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={(valor) => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={(valor) => setTime(valor)}
                />
                <Botao>Criar Card</Botao>
            </form>
            <form onSubmit={(evento) => aoSalvarTime(evento)}>
                <h2>Preencha os dados para criar o time</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite o nome do time"
                    valor={nomeTime}
                    aoAlterado={(valor) => setNomeTime(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cor"
                    placeholder="Digite a cor do time"
                    valor={corTime}
                    aoAlterado={(valor) => setCorTime(valor)}
                />
                <Botao>Criar time</Botao>
            </form>
        </section>
    );
};

export default Formulario;
