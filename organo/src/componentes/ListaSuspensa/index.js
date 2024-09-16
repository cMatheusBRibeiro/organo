import "./ListaSuspensa.css";

const ListaSuspensa = ({ label, valor, itens, obrigatorio }) => {
    const itens = itens.map((item) => <option key={item}>{item}</option>);

    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select
                value={valor}
                onChange={(evento) => aoAlterado(evento.target.value)}
                required={obrigatorio}
            >
                {itens}
            </select>
        </div>
    );
}

export default ListaSuspensa;