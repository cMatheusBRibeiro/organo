import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
    const cssSecaoDoTime = { backgroundColor: props.corSecundaria };
    const cssNomeDoTime = { borderColor: props.corPrimaria };

    return (
        <section className="time" style={cssSecaoDoTime}>
            <h3 style={cssNomeDoTime}>{props.nome}</h3>
            <Colaborador/>
            <Colaborador/>
            <Colaborador/>
        </section>
    );
}

export default Time;