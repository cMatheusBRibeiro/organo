import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
    const itens = props.itens.map((item) => <option key={item}>{item}</option>);

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select
                value={props.valor}
                onChange={(evento) => props.aoAlterado(evento.target.value)}
                required={props.obrigatorio}
            >
                {itens}
            </select>
        </div>
    );
}

export default ListaSuspensa;