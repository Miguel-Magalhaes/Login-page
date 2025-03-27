document.addEventListener("DOMContentLoaded", function () {
    const btnTrocarFundo = document.querySelector(".btn-alterar-fundo");
    const imagens = [
        "assets/imagem-fundo.jpg",
        "assets/imagem-fundo2.jpg",
        "assets/imagem-fundo3.jpg",
        "assets/imagem-fundo4.jpg",
        "assets/imagem-fundo5.jpg",
        "assets/imagem-fundo6.jpg"
    ];
    let indiceAtual = 0;

    btnTrocarFundo.addEventListener("click", function () {
        indiceAtual = (indiceAtual + 1) % imagens.length;
        document.body.style.backgroundImage = `url('${imagens[indiceAtual]}')`;
    });
});
