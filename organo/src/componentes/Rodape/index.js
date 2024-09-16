import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="rodape">
            <div className="redes-sociais">
                <img src="/imagens/fb.png" alt="Logo do Facebook"/>
                <img src="/imagens/tw.png" alt="Logo do Twitter"/>
                <img src="/imagens/ig.png" alt="Logo do Instagram"/>
            </div>
            <img src="/imagens/logo.png" alt="Logo do Organo"/>
            <h3>Desenvolvido por Alura.</h3>
        </footer>
    )
}

export default Rodape;