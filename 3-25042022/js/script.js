function while1(){
    var i=0;
    while(i<10){
        console.log(`Contei ${i}`);
        i++;
    }
}
function while2(){
    var operacao = prompt ("Digitr: \n1 - Soma\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir\nS - Sair");
    while (operacao!="S"){
        var n1 = prompt ("Digite um número");
        var n2 = prompt ("Digite outro número");
        if(operacao=="1"){
            alert (parseInt(n1)+parseInt(n2));
        }
        else if(operacao=="2"){
            alert (parseInt(n1)-parseInt(n2));
        }
        else if(operacao=="3"){
            alert (parseInt(n1)*parseInt(n2));
        }
        else if(operacao=="4"){
            alert (parseInt(n1)/parseInt(n2));
        }
        else{
            alert ("o valor digitado NÃO  é uma operação!!")
        }
        var operacao = prompt ("Digitr: \n1 - Soma\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir\nS - Sair");

    }
}
function paleta(){
    /*RGB(Vermelho,verde, azul)
    RHB(0-255,0-255,0-255)
    vamos user o comando random (randomico aletatorio)da 
    classe math(Matematica)para gerar numeros aleatorios
    entre 0-255. Assim iremos formar cores em RGB
    */
   var tabela = "<table>";
   for (var linha = 1 ; linha <= 10 ; linha ++){
       tabela+= "<tr>";

       for (var coluna = 1 ; coluna <= 20 ; coluna++){
        var r = Math.round(Math.random() *254);
        var g = Math.round(Math.random() *254);
        var b = Math.round(Math.random() *254);

        tabela += `<td onmouseover=fundo(this.style.backgroundColor.) style=background-color:rgb(${r},${g},${b})></td>`;


       }
       tabela+="</tr>";
   } 
   tabela+= "</table>";

   document.getElementById("caixa").innerHTML = tabela;
   document.getElementsById("caixa").style.display = "block";
  
}
function fundo(elemento ){
    document.body.style.backgroundColor = elemento;
}
function fecharpaleta() {
    document.getElementsById("caixa").style.display = "none";
    document.body.style.backgroundColor = "white";
}