import "./CampoTexto.css";

const CampoTexto = ({ label, valor, placeholder, obrigatorio, aoAlterado }) => {
    const placeholderModificada = `${placeholder}...`;
    
    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={(evento) => aoAlterado(evento.target.value)}
                required={obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    );
}

export default CampoTexto;