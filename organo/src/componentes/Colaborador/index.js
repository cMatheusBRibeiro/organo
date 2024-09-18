import BotaoFechar from "../BotaoFechar";
import "./Colaborador.css";
import BotaoFavoritar from "../BotaoFavoritar";

const Colaborador = ({ colaborador, corDoTime, aoDeletar, aoFavoritar }) => {
    const cssCabecalho = { backgroundColor: corDoTime };

    const favoritar = () => {
        aoFavoritar(colaborador.id);
    }
    

    return (
        <div className="colaborador">
            <BotaoFechar cor={corDoTime} classe="deletar" aoClicar={() => aoDeletar(colaborador.id)}/>
            <div className="cabecalho" style={cssCabecalho}>
                <img src={colaborador.imagem} alt={colaborador.nome}/>
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <BotaoFavoritar favorito={colaborador.favorito} aoFavoritar={favoritar} />
            </div>
        </div>
    );
}

export default Colaborador;