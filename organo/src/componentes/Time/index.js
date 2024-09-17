import hexToRgba from "hex-to-rgba";
import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ time, colaboradores, aoDeletarColaborador, mudarCor }) => {
    const cssSecaoDoTime = { backgroundColor: hexToRgba(time.cor, "0.6") };
    const cssNomeDoTime = { borderColor: time.cor };

    return (
        colaboradores.length > 0 &&
        <section className="time" style={cssSecaoDoTime}>
            <input
                onChange={(evento) => mudarCor(evento.target.value, time.id)}
                value={time.cor}
                type="color"
                className="input-cor"
            />
            <h3 style={cssNomeDoTime}>{time.nome}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador) => 
                    <Colaborador
                        key={colaborador.nome}
                        colaborador={colaborador}
                        corDoTime={time.cor}
                        aoDeletar={aoDeletarColaborador}
                    />
                )}
            </div>
        </section>
    );
}

export default Time;