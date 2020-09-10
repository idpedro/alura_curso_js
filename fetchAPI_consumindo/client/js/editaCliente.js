const getURL= new URL(window.location);

const id = getURL.searchParams.get('id');
const fromCadastroCliente = document.querySelector('[data-form]');
const cpfInput = document.querySelector("[data-cpf]");
const nomeInput = document.querySelector("[data-nome]");

getClientById(id).then( clientJson =>{ 
    
    cpfInput.value = clientJson[0].cpf;
    nomeInput.value = clientJson[0].nome;

});


fromCadastroCliente.addEventListener('submit',event=>{
    event.preventDefault();
    const cpf = cpfInput.value;
    const nome = nomeInput.value;

    if(!validateCF(cpf)){
        cpfInput.style.boxShadow = "0px 0px 4px red";
        alert("CPF Invalido");
        return;
    }else if( nome == ""){
        alert("Nome Não pode ser Vazio");
        nomeInput.style.boxShadow = "0px 0px 4px red";
        return;
    }

    updateClient(id,nome,cpf).then(
        response => console.log(response)
    ) ? alert("Cliente Atualizado com sucesso" ): alert("Erro ao atualizar cliente "); 
})
