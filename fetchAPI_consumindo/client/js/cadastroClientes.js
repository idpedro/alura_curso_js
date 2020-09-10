const fromCadastroCliente = document.querySelector('[data-form]');

fromCadastroCliente.addEventListener('submit',event=>{
    event.preventDefault();
    const nomeInput = event.target.querySelector("[data-nome]");
    const cpfInput = event.target.querySelector("[data-cpf]");
    const nome = nomeInput.value;
    const cpf = cpfInput.value;

    if(!validateCF(cpf)){
        cpfInput.style.boxShadow = "0px 0px 4px red";
        alert("CPF Invalido");
        return;
    }else if( nome == ""){
        alert("Nome Não pode ser Vazio");
        nomeInput.style.boxShadow = "0px 0px 4px red";
        return;
    }

    postClient(nome,cpf).then(
        response => console.log(response)
    )
})