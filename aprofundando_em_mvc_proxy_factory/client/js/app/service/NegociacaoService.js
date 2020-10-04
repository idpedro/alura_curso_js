class NegociacoesService{
    constructor(){
        this._http = new httpService();
    }
    obterNegociacoesDaSemana(){
        return new Promise((resolve,reject)=>{
            this._http.get("http://localhost:3000/negociacoes/semana")
            .then(
                json => resolve(
                    json
                    .map(
                        (objeto)=> new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor)
                )))
            .catch(
                err=> reject("Não foi possivel carregar as negociações da semana.")
            )
        })
    }
    obterNegociacoesDaSemanaAnterior(){
        return new Promise((resolve,reject)=>{
            this._http.get("http://localhost:3000/negociacoes/anterior")
            .then(
                json => resolve(
                    json
                    .map(
                        (objeto)=> new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor)
                )))
            .catch(
                err=> reject("Não foi possivel carregar as negociações da semana anterior.")
            )
        })
    }
    obterNegociacoesDaSemanaRetrasada(){
        return new Promise((resolve,reject)=>{
            this._http.get("http://localhost:3000/negociacoes/retrasada")
            .then(
                json => resolve(
                    json
                    .map(
                        (objeto)=> new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor)
                )))
            .catch(
                err=> reject("Não foi possivel carregar as negociações da semana retrasada.")
            )
        })
    }
}