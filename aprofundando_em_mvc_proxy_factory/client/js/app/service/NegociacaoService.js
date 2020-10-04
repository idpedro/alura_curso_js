class NegociacoesService{
    obterNegociacoesDaSemana(){
       return new Promise((resolve,reject)=>{
        fetch("http://localhost:3000/negociacoes/semana")
        .then(resposta=> resposta.json())
        .then(json=> 
            resolve(
                json
                .map((objeto)=> 
                new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
        ))
        .catch(err=> reject("Não foi possivel carregar as negociações da semana"))
       });
    }
    obterNegociacoesDaSemanaAnterior(){
        return new Promise((resolve,reject)=>{
            fetch("http://localhost:3000/negociacoes/anterior")
            .then(resposta=> resposta.json())
            .then(json=> 
                resolve(
                    json
                    .map((objeto)=> 
                    new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
            ))
            .catch(err=> reject("Não foi possivel carregar as negociações da semana"))
           });
    }
    obterNegociacoesDaSemanaRetrasada(){
        return new Promise((resolve,reject)=>{
            fetch("http://localhost:3000/negociacoes/retrasada")
            .then(resposta=> resposta.json())
            .then(json=> 
                resolve(
                    json
                    .map((objeto)=> 
                    new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))
            ))
            .catch(err=> reject("Não foi possivel carregar as negociações da semana"))
           });
    }
}