class BindView{
 constructor(model,view,...props){
    // cria uma proxy sobre o objeto
    // passa os metodos que serão observados
    // passa a função armadilha
    let proxy = ProxyFactory.create(model, props,
        model=>view.update(model)
    );

    // executa um update da view para exibir em tela
    view.update(model);

    return proxy;
 }
}
