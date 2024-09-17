import "./Colaborador.css";

const Colaborador = ({colaborador, corDeFundo, aoDeletar}) => {
    const cssCabecalho = { backgroundColor: corDeFundo };

    return (
        <div className="colaborador">
            <div className="deletar" onClick={() => aoDeletar(colaborador)}>deletar</div>
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