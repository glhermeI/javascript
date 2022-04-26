function array1 (){
    var nomes = ["Paulo", "Helena","vanessa"];
    //length pega o tamanho do array
    for(var i = 0; i < nomes.length; i++){
    console.log(nomes[i]);
    }

//vamos adicionar um nome
nomes.push("Guilherme");
console.log(nomes);
//remover o ultimo elemento do array
nomes.pop();
console.log(nomes);
//remover o primeiro elemento do array
nomes.shift(nomes);

//adicionar o primeiro elemento do array
nomes.unshift("Wagner");
nomes.push("Gabriela");
console.log(nomes);
//vamos criar uma matriz com nomes e idades
var dados = [
        ["nome", "idade"],
        ["Pedro", "15"],
        ["Marcos", "21"],
        ["Deborah", "22"],
];
console.log(dados);
}