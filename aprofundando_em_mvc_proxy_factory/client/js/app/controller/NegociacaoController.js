class NegociacaoController {


    constructor(){

        let $ = document.querySelector.bind(document);
        this._inputData= $("#data");
        this._inputQuantidade=$('#quantidade');
        this._inputValor=$('#valor');
        this._ordemAtual = '';


        // cria uma lista negociações associada com a view dela 
        this._listaNegociacoes = new BindView(
            new ListaNegociacoes(),
            new NegociacoesView($('#negociacoesView')),
            'adiciona','esvazia','ordena','inverteOrdem'
        )

        this._mensagem = new BindView(
            new Mensagem(),
            new MensagemView($("#mensagemView")),
            'texto'
        )
         
    }
    importaNegociacoes(){
        let service = new NegociacoesService();
        Promise.all(
            [
                service.obterNegociacoesDaSemana(),
                service.obterNegociacoesDaSemanaAnterior(),
                service.obterNegociacoesDaSemanaRetrasada()
            ]

        ).then(resolve=>{
            resolve.reduce((listaDeNegociacoes,lista) => listaDeNegociacoes.concat(lista),[])
            .forEach(negociacao => this._listaNegociacoes.adiciona(negociacao));
            this._mensagem.texto = 'Negociações importadas com sucesso';
        }).catch(
            erro => this._mensagem.texto = erro
        );   
    }
    adiciona(event){

        event.preventDefault();
        let negociacao = this._criaNegociacao();
        
        this._listaNegociacoes.adiciona(negociacao);

        this._mensagem.texto = 'Negociação adicionada com sucesso'
        
        this._limpaFormulario();
    }
    apaga(){
        
        this._listaNegociacoes.esvazia();
        this._mensagem.texto = 'Todas as negociação foram removidas com sucesso';
    }
    ordena(coluna) {
        if(this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;
        
    }
    _criaNegociacao(){

        return new Negociacao(
            DataHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
    _limpaFormulario(){
        
        this._inputData.value = '';
        this._inputQuantidade.value='';
        this._inputValor.value='';

        this._inputData.focus();
    }
}