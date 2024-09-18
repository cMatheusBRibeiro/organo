import { useState } from "react";
import { RiCloseCircleFill, RiCloseCircleLine } from "react-icons/ri";

const BotaoFechar = ({ size, aoClicar, classe, cor }) => {
    if (!size) size = 35;

    const [iconeApresentadoEPreenchido, setIconeApresentadoEPreenchido] = useState(false);
    const trocarIcone = () => {
        setIconeApresentadoEPreenchido(!iconeApresentadoEPreenchido);
    }

    const propsDeletar = {
        style: { color: cor },
        size: size,
        className: classe,
        onClick: (evento) => aoClicar(evento)
    }

    return (
        iconeApresentadoEPreenchido
            ?   <RiCloseCircleFill {...propsDeletar} onMouseLeave={() => trocarIcone()} />
            :   <RiCloseCircleLine {...propsDeletar} onMouseEnter={() => trocarIcone()} />
    )
}

export default BotaoFechar;