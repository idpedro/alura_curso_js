import inicializaCadastro from './componentes/cadastro/componente-cadastro';
import inicializaTabela from './componentes/lista/listagem-cliente';
import inicialiazaFormEdicao from './componentes/edita/form-edicao';
const rotas ={
    '/cadastro':inicializaCadastro,
    '/':inicializaTabela,
    '/edita':inicialiazaFormEdicao,
}

const rootDiv = document.querySelector('[data-container]');

const navegacao = pathname =>{
    window.history.pushState({},pathname,window.location.origin+pathname);
    rootDiv.innerHTML='';

    const iniciarRota = rotas[window.location.pathname];
    
    rootDiv.appendChild(iniciarRota());
}
window.navegacao = navegacao;
window.onpopstate = () => {
    rootDiv.innerHTML = '';
    rootDiv.appendChild(rotas[window.location.pathname]());
}
export { navegacao };