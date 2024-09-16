import "./ListaSuspensa.css";

const ListaSuspensa = ({ label, valor, itens, obrigatorio, aoAlterado }) => {
    const opcoesItens = itens.map((item) => <option key={item} value={item}>{item}</option>);

    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select
                value={valor}
                onChange={(evento) => aoAlterado(evento.target.value)}
                required={obrigatorio}
            >
                <option value={""}></option>
                {opcoesItens}
            </select>
        </div>
    );
}

export default ListaSuspensa;