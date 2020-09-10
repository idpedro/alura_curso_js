const deleteClient =(id)=>{
    if(confirm("Deseja deletar o cliente ?")){
        removeClient(id) ? alert("Cliente Removido") : alert("Erro ao remover cliente");
    }
    window.location.reload();
}
function clientToHTML(client){
    return `
        <tr>
            <td>${client.cpf}</td>
            <td>${client.nome}</td>
            <td>
            <button type="button" class="btn btn-danger" onclick="deleteClient(${client.id})">Excluir</button>
            <a href="editaCliente.html?id=${client.id}" class="btn btn-info">Editar<a>
            </td>
            
        </tr>
    `;
}

function renderClients(clientList,htmlElement){
    clientList.forEach( 
        client =>{ 
            htmlElement.innerHTML += clientToHTML(client);
    });
}

const elementTarget = document.getElementById("table_target");

try{
    getClient().then( clientsJson => renderClients(clientsJson,elementTarget) );
}catch(error){
    console.error(`Erro: ${error}`);
}