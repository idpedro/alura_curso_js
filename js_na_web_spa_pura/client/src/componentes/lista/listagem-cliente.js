import {deletaCliente,listarClientes} from '../../api/cliente.js';
import "../../assets/css/clientes.css";

const removeCliente = (id) => {
  if(confirm("Deseja deletar o cliente ?")){
    debugger;
    deletaCliente(id)
    window.location.reload();
  }
};

const criaBotaoDeletar= (id)=>{
    const botao = document.createElement('button');
    botao.classList.add('btn','btn-danger');
    botao.innerHTML = 'Excluir'
    botao.addEventListener('click',()=>{
        removeCliente(id)
    })
    return botao
}

const criaCabecalhoTabela = (tabela)=>{
  const thead = `
    <thead class="thead-dark">
      <tr>
        <th scope="col">CPF</th>
        <th scope="col">Nome</th>
        <th scope="col"></th>
        <th>
          <a 
            class="btn btn-primary"
            onclick="navegacao('/cadastro'); return false;">
              Novo Cliente
            </a>
        </th>
      </tr>
    </thead>
  `;
  tabela.innerHTML= thead;
};

const criaCorpoTabela = (tabela)=>{
  const corpoTabela = document.createElement('tbody');
  const exibeCliente = (cpf, nome, id) => {
    const linha = document.createElement('tr');
    const conteudoLinha = `
      <td>${cpf}</td>
      <td>${nome}</td>     
      <a href="./edita/edita-clientes.html?id=${id}">
      <a type="button" class="btn btn-info" onclick="navegacao('/edita?id=${id}')">Editar</button>
      </a>   
    `
    linha.innerHTML = conteudoLinha;
    linha.appendChild(criaBotaoDeletar(id));
    return linha;
  };

  listarClientes().then( exibe => {
    exibe.forEach(indice => {
      corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome, indice.id))
    });
  });

  tabela.appendChild(corpoTabela);
};

const inicializaTabela = ()=>{
  const tabela = document.createElement('table');
  tabela.classList.add("table");
  criaCabecalhoTabela(tabela)
  criaCorpoTabela(tabela);
  return tabela;
};

export default inicializaTabela;


  
  
 

