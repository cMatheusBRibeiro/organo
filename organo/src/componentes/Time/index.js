import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({time, colaboradores}) => {
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
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                        corDeFundo={time.corPrimaria}
                    />
                )}
            </div>
        </section>
    );
}

export default Time;