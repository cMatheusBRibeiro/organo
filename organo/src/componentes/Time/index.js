import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({nome, corPrimaria, corSecundaria, colaboradores}) => {
    const cssSecaoDoTime = { backgroundColor: corSecundaria };
    const cssNomeDoTime = { borderColor: corPrimaria };

    return (
        <section className="time" style={cssSecaoDoTime}>
            <h3 style={cssNomeDoTime}>{nome}</h3>
            <div className="colaboradores">
                {colaboradores.map((colaborador) =>
                    <Colaborador
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem}
                    />
                )}
            </div>
        </section>
    );
}

export default Time;