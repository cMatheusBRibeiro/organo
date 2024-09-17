import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ time, colaboradores, aoDeletarColaborador, mudarCorSecundaria }) => {
    const cssSecaoDoTime = { backgroundColor: time.corSecundaria };
    const cssNomeDoTime = { borderColor: time.corPrimaria };

    return (
        colaboradores.length > 0 &&
        <section className="time" style={cssSecaoDoTime}>
            <input
                onChange={(evento) => mudarCorSecundaria(evento.target.value, time.nome)}
                value={time.corSecundaria}
                type="color"
                className="input-cor"
            />
            <h3 style={cssNomeDoTime}>{time.nome}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador) => 
                    <Colaborador
                        key={colaborador.nome}
                        colaborador={colaborador}
                        corDeFundo={time.corPrimaria}
                        corSecundariaDoTime={time.corSecundaria}
                        aoDeletar={aoDeletarColaborador}
                    />
                )}
            </div>
        </section>
    );
}

export default Time;