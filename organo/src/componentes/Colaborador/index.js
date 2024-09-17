import { AiFillCloseCircle } from "react-icons/ai";
import "./Colaborador.css";
import hexToRgba from "hex-to-rgba";

const Colaborador = ({ colaborador, corDoTime, aoDeletar }) => {
    const cssCabecalho = { backgroundColor: corDoTime };

    return (
        <div className="colaborador">
            <AiFillCloseCircle size={35} className="deletar" onClick={() => aoDeletar(colaborador)}/>
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