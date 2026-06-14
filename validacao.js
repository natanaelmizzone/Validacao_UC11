function fnValidacao() {

    const campoResultado = document.getElementById('campoResultado');
    if (campoResultado) {
        campoResultado.className = "";
        campoResultado.innerText = "";
    }

    const TituloFilme = document.getElementById('tituloFilme');
    const filmeTitulo = TituloFilme.value.trim().replace(/\s+/g, ' ');

    const TituloOriginal = document.getElementById('tituloOriginal');
    const filmeTituloOriginal = TituloOriginal.value.trim().replace(/\s+/g, ' ');

    const AnoProducao = document.getElementById('anoProducao');
    const anoProducao = AnoProducao.value.trim();
    const anoProducao = parseInt(anoProducao);

    const DataLancamento = document.getElementById('dataLancamento');
    const dataLancamento = DataLancamento.value;
    const dataLancamentoAno = new Date(dataLancamento + 'T00:00:00').getFullYear();

    const DuracaoMinutos = document.getElementById('duracaoMinutos');
    const duracaoMinutos = DuracaoMinutos.value.trim();
    const duracaoMinutos = parseInt(duracaoMinutos);

    const GeneroPrincipal = document.getElementById('generoPrincipal');
    const generoPrincipal = GeneroPrincipal.value;
    const generosPermitidos = ['Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Romance', 'Suspense', 'Terror', 'Documentário', 'Animação'];

    const Subgenero = document.getElementById('subgenero');
    const subgenero = Subgenero.value;
    const subgenerosPermitidos = ['Crime', 'Fantasia', 'Mistério', 'Biografia', 'Musical', 'Guerra', 'Esporte', 'Família', 'Psicológico', 'Super-herói'];

    const Classificacao = document.getElementById('classificacao');
    const classificacao = Classificacao.value;
    const classificacoesPermitidas = ['Livre', '10', '12', '14', '16', '18'];

    const PaisOrigem = document.getElementById('paisOrigem');
    const paisOrigem = PaisOrigem.value;
    const paisesPermitidos = ['Brasil', 'Estados Unidos', 'Reino Unido', 'França', 'Alemanha', 'Espanha', 'Itália', 'Canadá', 'Argentina', 'Japão', 'Coreia do Sul', 'Índia'];

    const IdiomaOriginal = document.getElementById('idiomaOriginal');
    const idiomaOriginal = IdiomaOriginal.value;
    const idiomasPermitidos = ['Português', 'Inglês', 'Espanhol', 'Francês', 'Alemão', 'Italiano', 'Japonês', 'Coreano', 'Mandarim', 'Hindi'];

    const Diretor = document.getElementById('diretor');
    const nomeDiretor = Diretor.value.trim().replace(/\s+/g, ' ');

    const Produtora = document.getElementById('produtora');
    const produtora = Produtora.value.trim().replace(/\s+/g, ' ');

    const Distribuidora = document.getElementById('distribuidora');
    const distribuidora = Distribuidora.value.trim().replace(/\s+/g, ' ');

    const Orcamento = document.getElementById('orcamento');
    const orcamento = Orcamento.value.trim();
    const orcamento = parseFloat(orcamento);

    const ReceitaBilheteria = document.getElementById('receitaBilheteria');
    const receitaBilheteriaRaw = ReceitaBilheteria.value.trim();
    const receitaBilheteria = parseFloat(receitaBilheteria);

    const NotaMedia = document.getElementById('notaMedia');
    const notaMedia = NotaMedia.value.trim();
    const notaMedia = parseFloat(notaMedia);

    const Status = document.getElementById('status');
    const status = Status.value;
    const statusPermitidos = ['Em Produção', 'Pós-Produção', 'Lançado', 'Cancelado', 'Arquivado'];

    const Streaming = document.getElementById('streaming');
    const disponibilidadeStreaming = Streaming.value;
    const disponibilidadesPermitidas = ['Sim', 'Não'];
    const regexNumeros = /^\d+$/;
    const regexNomeDiretor = /^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)+$/;

    let anoAtual = new Date().getFullYear();

    // Título do Filme
    if (filmeTitulo.length < 1) {
        console.log (TituloFilme, "O título informado é muito curto."); 
        return
    }


    if (filmeTitulo.length > 200) { 

        console.log(TituloFilme, "O título informado é muito longo."); 
        return

    }

    // Título Original
    if (filmeTituloOriginal.length < 1) { 
        dispararErro(TituloOriginal, "O título original informado é muito curto."); 
        return
    }
    if (filmeTituloOriginal.length > 200) {
        dispararErro(TituloOriginal, "O título original informado é muito longo.");
        return
    }

    // Ano de Produção
    if (!regexNumeros.test(anoProducao) || anoProducao <= 1888) { 
        dispararErro(AnoProducao, "Informe um ano de produção válido (maior que 1888).");
        return 
    }
    if (anoProducao > anoAtual + 5) { 
        dispararErro(AnoProducao, "O ano de produção informado não pode ser depois de 5 anos no futuro.");
        return
    }

    // Data de Lançamento
    if (!dataLancamento) { 
        dispararErro(DataLancamento, "Informe uma data de lançamento válida.");
        return
    }
    if (dataLancamentoAno < anoProducao) { 
        dispararErro(DataLancamento, "A data de lançamento possui um conflito com o ano de produção.");
        return
    }
    if (dataLancamentoAno > anoAtual + 5) { 
        dispararErro(DataLancamento, "A data de lançamento não pode ser depois de 5 anos no futuro.");
        return
    }

    // Duração (Minutos)
    if (!regexNumeros.test(duracaoMinutos)) { 
        dispararErro(DuracaoMinutos, "Informe uma duração válida (somente números inteiros).");
        return
    }
    if (duracaoMinutos < 1) { 
        dispararErro(DuracaoMinutos, "A duração informada é muito curta.");
        return
    }
    if (duracaoMinutos > 600) { 
        dispararErro(DuracaoMinutos, "A duração informada é muito longa.");
        return
    }

    // Gênero Principal
    if (!generoPrincipal) { 
        dispararErro(GeneroPrincipal, "Selecione um gênero principal.");
        return
    }
    if (!generosPermitidos.some(g => g.toLowerCase() === generoPrincipal.toLowerCase())) {
         dispararErro(GeneroPrincipal, "O gênero principal informado é inválido.");
         return
        }

    // Subgênero
    if (!subgenero) { 
        dispararErro(Subgenero, "Selecione um subgênero.");
        return
    }
    if (!subgenerosPermitidos.some(s => s.toLowerCase() === subgenero.toLowerCase())) {
         dispararErro(Subgenero, "O subgênero informado é inválido.");
         return
    }

    // Classificação Indicativa
    if (!classificacao) { 
         dispararErro(Classificacao, "Selecione a classificação indicativa.");
         return
    }
    if (!classificacoesPermitidas.some(c => c.toLowerCase() === classificacao.toLowerCase())) {
         dispararErro(Classificacao, "A classificação indicativa informada é inválida.");
         return
    }

    // País de Origem
    if (!paisOrigem) { 
        dispararErro(PaisOrigem, "Selecione o país de origem.");
        return
    }
    if (!paisesPermitidos.some(p => p.toLowerCase() === paisOrigem.toLowerCase())) { 
        dispararErro(PaisOrigem, "O país de origem informado é inválido.");
        return
    }

    // Idioma Original
    if (!idiomaOriginal) { 
        dispararErro(IdiomaOriginal, "Selecione o idioma original.");
        return
    }
    if (!idiomasPermitidos.some(i => i.toLowerCase() === idiomaOriginal.toLowerCase())) { 
        dispararErro(IdiomaOriginal, "O idioma original informado é inválido.");
        return
    }

    // Diretor
    if (nomeDiretor.length < 2) { 
        dispararErro(Diretor, "O nome completo do diretor deve ser informado.");
        return
    }
    if (nomeDiretor.length > 150) { 
        dispararErro(Diretor, "O nome do diretor informado é muito longo.");
        return
    }
    if (!regexNomeDiretor.test(nomeDiretor)) { 
        dispararErro(Diretor, "Informe um nome válido para o diretor (Nome e Sobrenome).");
        return
    }

    // Produtora
    if (produtora.length < 2) { 
        dispararErro(Produtora, "O nome informado da produtora é muito curto.");
        return
    }
    if (produtora.length > 200) { 
        dispararErro(Produtora, "O nome informado da produtora é muito longo.");
        return
    }

    // Distribuidora
    if (distribuidora.length < 2) { 
        dispararErro(Distribuidora, "O nome informado da distribuidora é muito curto.");
        return
    }
    if (distribuidora.length > 200) { 
        dispararErro(Distribuidora, "O nome informado da distribuidora é muito longo.");
        return
    }

    // Orçamento
    if (orcamento === "" || isNaN(orcamento) || orcamento < 0) { 
        dispararErro(Orcamento, "O orçamento informado deve ser um valor numérico válido maior ou igual a zero.");
        return
    }

    // Receita de Bilheteria
    if (receitaBilheteria === "" || isNaN(receitaBilheteria) || receitaBilheteria < 0) { 
        dispararErro(ReceitaBilheteria, "A receita de bilheteria deve ser um valor numérico válido maior ou igual a zero.");
        return
    }

    // Nota Média
    if (notaMedia === "" || isNaN(notaMedia) || notaMedia < 0 || notaMedia > 10) { 
        dispararErro(NotaMedia, "A nota média deve ser um número entre 0 e 10.");
        return
    }

    // Status
    if (!status) { 
        dispararErro(Status, "Selecione o status atual do filme."); 
        return
    }
    if (!statusPermitidos.some(s => s.toLowerCase() === status.toLowerCase())) { 
        dispararErro(Status, "O status informado é inválido."); 
        return
    }

    // Disponibilidade de Streaming
    if (!disponibilidadeStreaming) { 
        dispararErro(Streaming, "Selecione se está disponível para streaming."); 
        return
    }

}
