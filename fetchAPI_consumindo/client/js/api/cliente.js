
 const getClient = () => {
    return fetch("http://localhost:4000/clientes").
    then( response => response.json() ).
    then( json => json ).
    catch( error =>  console.error(
        "%cErro ao pegar dados da API",
        "color:#fff;font-weight:bolder;background:red;border:1px solid red;padding:1em;",
         {erro:error}
    ));
}

const postClient = (nome,cpf) => {
    const clientJson = JSON.stringify({
        nome,
        cpf
    })
    return fetch("http://localhost:4000/clientes/cliente",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body: clientJson
    }).then( response => response.body );
}


const removeClient =  id=>{
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,{ method:"DELETE" } );
}

const getClientById = id =>{
    return fetch(`http://localhost:4000/clientes/cliente/${id}`).
    then(response => response.json()).
    then( json => json );
}

const updateClient = (id,nome,cpf) => {
    const clientJson = JSON.stringify({
        nome,
        cpf
    })
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,
    {
        method:"PUT",
        headers:{"Content-type":"application/json"},
        body: clientJson
        
    }).
    then(response => response.body)
}