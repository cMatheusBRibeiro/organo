import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import BotaoFechar from "../BotaoFechar";
import "./Colaborador.css";

const Colaborador = ({ colaborador, corDoTime, aoDeletar, aoFavoritar }) => {
    const cssCabecalho = { backgroundColor: corDoTime };

    const favoritar = () => {
        aoFavoritar(colaborador.id);
    }
    const propsFavoritar = {
        size: 25,
        onClick: () => favoritar(),
        className: "favoritar"
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
                {
                    colaborador.favorito
                        ? <AiFillHeart {...propsFavoritar} color="#FF0000" />
                        : <AiOutlineHeart {...propsFavoritar} />
                }
            </div>
        </div>
    );
}

export default Colaborador;