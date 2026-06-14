function fnValidacao() {

    const TituloFilme = document.getElementById('tituloFilme');
    const filmeTitulo = TituloFilme.value.trim().replace(/\s+/g, ' ');

    const TituloOriginal = document.getElementById('tituloOriginal');
    const filmeTituloOriginal = TituloOriginal.value.trim().replace(/\s+/g, ' ');

    const AnoProducao = document.getElementById('anoProducao');
    const anoProducao = AnoProducao.value.trim();

    const DataLancamento = document.getElementById('dataLancamento');
    const dataLancamento = DataLancamento.value;
    const dataLancamentoAno = dataLancamento ? new Date(dataLancamento + 'T00:00:00').getFullYear() : null;

    const DuracaoMinutos = document.getElementById('duracaoMinutos');
    const duracaoMinutos = DuracaoMinutos.value.trim();

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
    const orcamento = parseFloat(Orcamento.value.trim());

    const ReceitaBilheteria = document.getElementById('receitaBilheteria');
    const receitaBilheteria = parseFloat(ReceitaBilheteria.value.trim());

    const NotaMedia = document.getElementById('notaMedia');
    const notaMedia = parseFloat(NotaMedia.value.trim());

    const Status = document.getElementById('status');
    const status = Status.value;
    const statusPermitidos = ['Em Produção', 'Pós-Produção', 'Lançado', 'Cancelado', 'Arquivado'];

    const Streaming = document.getElementById('streaming');
    const disponibilidadeStreaming = Streaming.value;
    const disponibilidadesPermitidas = ['Sim', 'Não'];

    // Regex 
    const regexNumeros = /^\d+$/;
    const regexNomeDiretor = /^[A-Za-zÀ-ÿ]+(?:\s[A-Za-zÀ-ÿ]+)+$/;
    const anoAtual = new Date().getFullYear();

    // ---- VALIDAÇÕES ----

    // Título do Filme
    if (filmeTitulo.length < 1) {
        alert("O título informado é muito curto."); 
        return;
    }
    if (filmeTitulo.length > 200) { 
        alert("O título informado é muito longo."); 
        return;
    }

    // Título Original
    if (filmeTituloOriginal.length < 1) { 
        alert("O título original informado é muito curto."); 
        return;
    }
    if (filmeTituloOriginal.length > 200) {
        alert("O título original informado é muito longo.");
        return;
    }

    // Ano de Produção
    if (!regexNumeros.test(anoProducao)) {
        alert("O ano de produção deve conter apenas números.");
        return;
    }
    const anoProducao = parseInt(anoProducao);
    if (anoProducao <= 1888) { 
        alert("Informe um ano de produção válido (maior que 1888).");
        return;
    }
    if (anoProducao > anoAtual + 5) { 
        alert("O ano de produção informado não pode ser depois de 5 anos no futuro.");
        return;
    }

    // Data de Lançamento
    if (!dataLancamento) { 
        alert("Informe uma data de lançamento válida.");
        return;
    }
    if (dataLancamentoAno < anoProducao) { 
        alert("A data de lançamento possui um conflito com o ano de produção.");
        return;
    }
    if (dataLancamentoAno > anoAtual + 5) { 
        alert("A data de lançamento não pode ser depois de 5 anos no futuro.");
        return;
    }

    // Duração (Minutos)
    if (!regexNumeros.test(duracaoMinutos)) { 
        alert("Informe uma duração válida (somente números inteiros).");
        return;
    }
    const duracaoMinutos = parseInt(duracaoMinutos);
    if (duracaoMinutos < 1) { 
        alert("A duração informada é muito curta.");
        return;
    }
    if (duracaoMinutos > 600) { 
        alert("A duração informada é muito longa.");
        return;
    }

    // Gênero Principal
    if (!generoPrincipal) { 
        alert("Selecione um gênero principal.");
        return;
    }
    if (!generosPermitidos.some(g => g.toLowerCase() === generoPrincipal.toLowerCase())) {
         alert("O gênero principal informado é inválido.");
         return;
    }

    // Subgênero
    if (!subgenero) { 
        alert("Selecione um subgênero.");
        return;
    }
    if (!subgenerosPermitidos.some(s => s.toLowerCase() === subgenero.toLowerCase())) {
         alert("O subgênero informado é inválido.");
         return;
    }

    // Classificação Indicativa
    if (!classificacao) { 
         alert("Selecione a classificação indicativa.");
         return;
    }
    if (!classificacoesPermitidas.some(c => c.toLowerCase() === classificacao.toLowerCase())) {
         alert("A classificação indicativa informada é inválida.");
         return;
    }

    // País de Origem
    if (!paisOrigem) { 
        alert("Selecione o país de origem.");
        return;
    }
    if (!paisesPermitidos.some(p => p.toLowerCase() === paisOrigem.toLowerCase())) { 
        alert("O país de origem informado é inválido.");
        return;
    }

    // Idioma Original
    if (!idiomaOriginal) { 
        alert("Selecione o idioma original.");
        return;
    }
    if (!idiomasPermitidos.some(i => i.toLowerCase() === idiomaOriginal.toLowerCase())) { 
        alert("O idioma original informado é inválido.");
        return;
    }

    // Diretor
    if (nomeDiretor.length < 2) { 
        alert("O nome completo do diretor deve ser informado.");
        return;
    }
    if (nomeDiretor.length > 150) { 
        alert("O nome do diretor informado é muito longo.");
        return;
    }
    if (!regexNomeDiretor.test(nomeDiretor)) { 
        alert("Informe um nome válido para o diretor (Nome e Sobrenome).");
        return;
    }

    // Produtora
    if (produtora.length < 2) { 
        alert("O nome informado da produtora é muito curto.");
        return;
    }
    if (produtora.length > 200) { 
        alert("O nome informado da produtora é muito longo.");
        return;
    }

    // Distribuidora
    if (distribuidora.length < 2) { 
        alert("O nome informado da distribuidora é muito curto.");
        return;
    }
    if (distribuidora.length > 200) { 
        alert("O nome informado da distribuidora é muito longo.");
        return;
    }

    // Orçamento
    if (isNaN(orcamento) || orcamento < 0) { 
        alert("O orçamento informado deve ser um valor numérico válido maior ou igual a zero.");
        return;
    }

    // Receita de Bilheteria
    if (isNaN(receitaBilheteria) || receitaBilheteria < 0) { 
        alert("A receita de bilheteria deve ser um valor numérico válido maior ou igual a zero.");
        return;
    }

    // Nota Média
    if (isNaN(notaMedia) || notaMedia < 0 || notaMedia > 10) { 
        alert("A nota média deve ser um número entre 0 e 10.");
        return;
    }

    // Status
    if (!status) { 
        alert("Selecione o status atual do filme."); 
        return;
    }
    if (!statusPermitidos.some(s => s.toLowerCase() === status.toLowerCase())) { 
        alert("O status informado é inválido."); 
        return;
    }

    // Disponibilidade de Streaming
    if (!disponibilidadeStreaming) { 
        alert("Selecione se está disponível para streaming."); 
        return;
    }
    if (!disponibilidadesPermitidas.some(d => d.toLowerCase() === disponibilidadeStreaming.toLowerCase())) { 
        alert("A opção de disponibilidade de streaming é inválida."); 
        return;
    }

    
    alert("Formulário validado com sucesso!");
    return true;
}
