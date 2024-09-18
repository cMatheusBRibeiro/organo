import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const BotaoFavoritar = ({ favorito, aoFavoritar }) => {
    const propsFavoritar = {
        size: 25,
        onClick: () => aoFavoritar(),
        className: "favoritar"
    }

    return  favorito
                ? <AiFillHeart {...propsFavoritar} color="#FF0000" />
                : <AiOutlineHeart {...propsFavoritar} />
}

export default BotaoFavoritar;