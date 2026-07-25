<script>
    function atualizarDataHora() {
        const agora = new Date();

        // Formata a data (DD/MM/AAAA) e a hora (HH:MM:SS) no padrão brasileiro
        const dataFormatada = agora.toLocaleDateString('pt-BR');
        const horaFormatada = agora.toLocaleTimeString('pt-BR');

        // Atualiza o texto no HTML
        document.getElementById('data-hora').innerHTML = 
            `Acessado em: ${dataFormatada} às ${horaFormatada}`;
    }

    // Executa a função imediatamente ao carregar a página
    atualizarDataHora();

    // Atualiza a cada 1 segundo (1000 milissegundos)
    setInterval(atualizarDataHora, 1000);
</script>