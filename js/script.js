let escuro = false;

function tema() {

    escuro = !escuro;


    document.getElementById("body")
        .classList.toggle("dark");


    let imagem = document.getElementById("iconeTema");


    if (escuro) {

        imagem.src = "imagens/slime-noite.png";

    } else {

        imagem.src = "imagens/slime-dia (1).png";

    }

}

imagem.classList.add("pular");

setTimeout(() => {
    imagem.classList.remove("pular");
}, 500);
