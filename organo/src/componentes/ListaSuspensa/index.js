import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
    const itens = props.itens.map((item) => <option>{item}</option>);

    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select>
                {itens}
            </select>
        </div>
    );
}

export default ListaSuspensa;