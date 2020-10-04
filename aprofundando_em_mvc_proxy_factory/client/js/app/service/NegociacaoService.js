class NegociacoesService{
    obterNegociacoesDaSemana(callback){
        fetch("http://localhost:3000/negociacoes/semana")
        .then(resposta=> resposta.json())
        .then(json=> 
            callback(
                null,
                json.
                map((objeto)=> new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))    
            )
        )
        .catch(err=>  callback("Não foi possivel carregar as negociações da semana"));
    }
    obterNegociacoesDaSemanaAnterior(callback){
        fetch("http://localhost:3000/negociacoes/anterior")
        .then(resposta=> resposta.json())
        .then(json=>
            callback(
                null,
                json
                .map((objeto)=> new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
        )            )
        .catch(err =>  callback("Não foi possivel carregar as negociações da semana anterior"));
    }
    obterNegociacoesDaSemanaRetrasada(callback){
        fetch("http://localhost:3000/negociacoes/retrasada")
        .then(resposta=> resposta.json())
        .then(json=> 
            callback(
                null,
                json.
                map((objeto)=> new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))    
            )
        )
        .catch(err=>  callback("Não foi possivel carregar as negociações da semana retrasada"));
    }
}