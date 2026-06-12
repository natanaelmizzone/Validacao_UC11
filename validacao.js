function fnValidacao() {

    const campoTituloFilme = document.getElementById("tituloFilme");
    const campoTituloOriginal = document.getElementById("tituloOriginal");
    const campoAnoDeProducao = document.getElementById("anoProducao")


    const valorFilme = campoTituloFilme.value.trim();
    const valorOriginal = campoTituloOriginal.value.trim();
    const valorAno = campoAnoDeProducao.value.trim();



    //RegexCaracter

    const caracteresEspeciais = /[@!#$%^&*()_+]/;

    if (caracteresEspeciais.test(valorFilme)) {
        console.log("O título contém caracteres especiais não permitidos.");
        return false;
    }
    
    if (caracteresEspeciais.test(valorAno)) {
        console.log("O título contém caracteres especiais não permitidos.");
        return false;
    }

    //ValorFilme

    if (valorFilme === "") {
        console.log('preencha o campo Titulo Filme');
        return false;
    }

    if (valorFilme.length <= 1) {
        console.log("Por favor, inserir o nome do filme!");
        return false;
    }

    if (valorFilme.length > 200) {
        console.log("Máximo de 200 letras.");
        return false;
    }


    //ValorOriginal

    if (valorOriginal === "") {
        console.log("preencha o campo Titulo Original");
        return false;
    }

    if (valorOriginal.length > 200) {
        console.log("Máximo de 200 letras para o título original.");
        return false;
    }

    //ValorAno

    if (valorAno >= 1888 && valorAno <= (2026 + 5)) {
        console.log("Ano válido!");
        return false;
    }

}
