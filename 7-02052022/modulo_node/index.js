class Produto{
    constructor(nome, descricao, preco){
        this.nome=nome;
        this.descricao=descricao;
        this.preco=preco;
    }
}
function Cadastro(Produto){
    console.log(`Cadastramos o produto ${Produto.nome}`);
    console.log(`O preço deste produto é R$ ${Produto.preco}`);
}
module.exports = { Produto, Cadastro};