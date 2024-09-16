import "./ListaSuspensa.css";

const ListaSuspensa = ({ label, valor, itens, obrigatorio, aoAlterado }) => {
    const opcoesItens = itens.map((item) => <option key={item}>{item}</option>);

    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select
                value={valor}
                onChange={(evento) => aoAlterado(evento.target.value)}
                required={obrigatorio}
            >
                {opcoesItens}
            </select>
        </div>
    );
}

export default ListaSuspensa;