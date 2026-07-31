let escuro = false;

function tema() {

    escuro = !escuro;


    document.getElementById("body")
        .classList.toggle("dark");


    let imagem = document.getElementById("iconeTema");


    if (escuro) {

        imagem.src = "imagens/escuro.png";

    } else {

        imagem.src = "imagens/icone-tema.jpg";

    }

}

imagem.classList.add("pular");

setTimeout(() => {
    imagem.classList.remove("pular");
}, 500);
