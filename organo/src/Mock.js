const Mock = (times) => {
    const dadosMockados = [];
    const colaboradores = [
        {
            nome: "Matheus Braga Ribeiro",
            cargo: "Desenvolvedor Sênior",
            imagem: "https://github.com/cMatheusBRibeiro.png"
        },
        {
            nome: "Hamilton Zanini",
            cargo: "Desenvolvedor Sênior",
            imagem: "https://github.com/hrszanini.png"
        },
        {
            nome: "Thiago",
            cargo: "Desenvolvedor Sênior",
            imagem: "https://github.com/devthiagobr.png"
        },
    ]

    times.forEach((time) => {
        colaboradores.forEach((colaborador) => {
            dadosMockados.push({
                ...colaborador,
                time: time.nome
            });
        });
    });

    return dadosMockados;
}

export default Mock;