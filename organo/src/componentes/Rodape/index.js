import "./Rodape.css";

const Rodape = () => {
    return (
        <footer>
            <section className="redes-sociais">
                <ul>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <img src="/imagens/fb.png" alt="Logo do Facebook"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <img src="/imagens/tw.png" alt="Logo do Twitter"/>
                        </a>
                    </li>
                    <li>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <img src="/imagens/ig.png" alt="Logo do Instagram"/>
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <img src="/imagens/logo.png" alt="Logo do Organo"/>
            </section>
            <section>
                <p>Desenvolvido por Alura.</p>
            </section>
        </footer>
    )
}

export default Rodape;