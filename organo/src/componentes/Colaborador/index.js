import BotaoFechar from "../BotaoFechar";
import "./Colaborador.css";

const Colaborador = ({ colaborador, corDoTime, aoDeletar }) => {
    const cssCabecalho = { backgroundColor: corDoTime };

    return (
        <div className="colaborador">
            <BotaoFechar cor={corDoTime} classe="deletar" aoClicar={() => aoDeletar(colaborador.id)}/>
            <div className="cabecalho" style={cssCabecalho}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborador;