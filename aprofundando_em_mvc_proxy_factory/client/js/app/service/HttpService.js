class httpService{
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
            .then(resposta => resposta.json())
            .then(json => resolve(json))
            .catch(err=> reject(err))
        })
    }
}