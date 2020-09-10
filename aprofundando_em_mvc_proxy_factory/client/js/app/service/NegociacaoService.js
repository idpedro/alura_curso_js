class NegociacoesService{
    obterNegociacoesDaSemana(callback){
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = ()=>{
            if(xhr.readyState == 4){
                if( xhr.status == 200){
                    callback(
                        null,
                        JSON.parse(xhr.responseText).
                        map((objeto)=> new Negociacao(new Date(objeto.data),objeto.quantidade,objeto.valor))    
                    )
                }else{
                    callback("Não foi possivel carregar as negociações");
                }
            }
        }
        xhr.open("GET","http://localhost:3000/negociacoes/semana");
        xhr.send();
    }
}