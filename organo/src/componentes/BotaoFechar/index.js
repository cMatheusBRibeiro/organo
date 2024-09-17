import { useState } from "react";
import { RiCloseCircleFill, RiCloseCircleLine } from "react-icons/ri";

const BotaoFechar = ({ size, aoClicar, classe, cor }) => {
    if (!size) {
        size = 35;
    }

    const cssBotaoFechar = { color: cor };

    const [iconeApresentadoEPreenchido, setIconeApresentadoEPreenchido] = useState(false);
    const trocarIcone = () => {
        setIconeApresentadoEPreenchido(!iconeApresentadoEPreenchido);
    }

    if (iconeApresentadoEPreenchido) {
        return <RiCloseCircleFill
            style={cssBotaoFechar}
            onMouseLeave={() => trocarIcone()}
            size={size}
            className={classe}
            onClick={(evento) => aoClicar(evento)}
        />
    }
    return <RiCloseCircleLine
        style={cssBotaoFechar}
        onMouseEnter={() => trocarIcone()}
        size={size}
        className={classe}
        onClick={(evento) => aoClicar(evento)}
    />
}

export default BotaoFechar;