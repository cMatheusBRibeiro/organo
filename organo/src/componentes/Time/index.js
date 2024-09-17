import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({time, colaboradores, aoDeletarColaborador}) => {
    const cssSecaoDoTime = { backgroundColor: time.corSecundaria };
    const cssNomeDoTime = { borderColor: time.corPrimaria };

    return (
        colaboradores.length > 0 &&
        <section className="time" style={cssSecaoDoTime}>
            <h3 style={cssNomeDoTime}>{time.nome}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador) => 
                    <Colaborador
                        key={colaborador.nome}
                        colaborador={colaborador}
                        corDeFundo={time.corPrimaria}
                        aoDeletar={aoDeletarColaborador}
                    />
                )}
            </div>
        </section>
    );
}

export default Time;