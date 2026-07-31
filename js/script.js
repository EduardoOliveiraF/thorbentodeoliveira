let escuro = false;

function tema() {

    escuro = !escuro;


    document.getElementById("body")
        .classList.toggle("dark");


    let imagem = document.getElementById("iconeTema");


    if (escuro) {

        imagem.src = "imagens/icone-tema.jpg";

    } else {

        imagem.src = "imagens/escuro.png";

    }

}

imagem.classList.add("pular");

setTimeout(() => {
    imagem.classList.remove("pular");
}, 500);
