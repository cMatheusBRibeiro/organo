import "./Campo.css";

const Campo = ({ label, type = "text", valor, placeholder, obrigatorio, aoAlterado }) => {
    const placeholderModificada = `${placeholder}...`;
    
    return (
        <div className={`campo campo-${type}`}>
            <label>
                {label}
            </label>
            <input
                type={type}
                value={valor}
                onChange={(evento) => aoAlterado(evento.target.value)}
                required={obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    );
}

export default Campo;