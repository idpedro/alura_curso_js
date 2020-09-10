class ProxyFactory{
    //  Cria proxy de acordo com os metodos passados 
    // objeto: object()
    // props : array []
    // acao: function 
    static create(objeto,props,acao){
            // retorna a Proxy encima do objeto passado
            return new Proxy(objeto,{
            // mapeia o metodo get da objeto 
            // no javascrit chamar uma função e da um get nela
            get(target,prop,reciver){
                // se a função estiver na lista e realmente for uma função 
                if(props.includes(prop) && ProxyFactory.isFunction(target[prop]) ){
                    // retona a nova função
                    return function(){
                        // reflete a ação no objeto alvo
                        let retorno = Reflect.apply(target[prop],target,arguments);
                        acao(target);
                        return retorno;
                    }
                }
                // reflete a ação
                return Reflect.get(target,prop,reciver);
            },
            // mapeia o metodo set do objeto
            set(target,prop,value,receiver){

                let retorno = Reflect.set(target,prop,value,receiver);
                // se o metodo estiver na lista 
                if (props.includes(prop)){
                    // executa a função armadilha passada 
                    acao(target);
                }
                return retorno ;
            }
        });
    }

    // verifica se é uma função 
    static isFunction(func){
        return (typeof(func) === typeof(Function))
    }
}

