function verificar() {
    // 1. Obter dados do presente
    var data = new Date();
    var anoAtual = data.getFullYear();




    // 2. Selecionar elementos do HTML
    var inputAno = document.getElementById('nasc');
    var res = document.getElementById('res'); // Div para o resultado
    var radiosSexo = document.getElementsByName('sexo');
    



    // 3. Validar o ano de nascimento
    if (inputAno.value.length == 0 || Number(inputAno.value) > anoAtual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
        return; // Interrompe a função se houver erro
    }




    // 4. Calcular idade e determinar gênero
    var anoNasc = Number(inputAno.value);
    var idade = anoAtual - anoNasc;
    var genero = '';
    var img = document.createElement('img'); // Cria um elemento de imagem
    img.setAttribute('id', 'foto-resultado'); // Adiciona um ID para estilização




    // 5. Determinar gênero e carregar a imagem correspondente
    if (radiosSexo[0].checked) { // Masculino
        genero = 'Homem';
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'garoto-homem.jpg'); // Certifique-se que o arquivo 'menino.jpg' está na pasta
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'jovem-homem.jpg'); // Certifique-se que o arquivo 'jovem-homem.jpg' está na pasta
        } else if (idade < 60) {
            // Adulto
            img.setAttribute('src', 'adulto-homem.jpg');
        } else {
            // Idoso
            img.setAttribute('src', 'idoso-homem.jpg');
        }




    } else if (radiosSexo[1].checked) { // Feminino
        genero = 'Mulher';
        if (idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'garota-mulher.jpg');
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'jovem-mulher.jpg');
        } else if (idade < 60) {
            // Adulta
            img.setAttribute('src', 'adulto-mulher.jpg');
        } else {
            // Idosa
            img.setAttribute('src', 'idosa-mulher.jpg');
        }

    } else {
        window.alert('[ERRO] Por favor, selecione um sexo!');
        return;
    }




    // 6. Exibir o resultado na tela
    res.style.textAlign = 'center'; // Centraliza o texto
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
    res.appendChild(img); // Adiciona a imagem logo após o texto
}