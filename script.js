 // Função para buscar os produtos com base no texto digitado
 document.getElementById('busca').addEventListener('input', function() {
    var query = this.value.toLowerCase(); // Captura o valor da pesquisa
    var produtos = document.querySelectorAll('.box1'); // Seleciona todos os produtos
    
    produtos.forEach(function(produto) {
        var nomeProduto = produto.querySelector('p').innerText.toLowerCase(); // Obtém o nome do produto
        
        // Verifica se o nome do produto contém a palavra buscada
        if (nomeProduto.includes(query)) {
            produto.style.display = 'block'; // Exibe o produto se corresponder à busca
        } else {
            produto.style.display = 'none'; // Oculta o produto se não corresponder
        }
    });
});