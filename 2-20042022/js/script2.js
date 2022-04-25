function repeticao1(){
    for(var i = 0 ; i <= 10; i++){
        console.log(i);
    }
}
function galeria(){
    const miniatura = document.getElementById("miniatura");
  

    for(var i = 1 ; i <= 5; i++){
        miniatura.innerHTML += "<img src=img/img"+i+".jpg id=img"+i+">";
    }
    abrirNoPainel();
}
function abrirNoPainel(){
    const painel = document.getElementById("painel");
    document.getElementById("img1").onclick=function(){
        painel.innerHTML = "<img src=img/img1.jpg>";
    };
    document.getElementById("img2").onclick=function(){
        painel.innerHTML = "<img src=img/img2.jpg>";
    };
    document.getElementById("img3").onclick=function(){
        painel.innerHTML = "<img src=img/img3.jpg>";
    };
    document.getElementById("img4").onclick=function(){
        painel.innerHTML = "<img src=img/img4.jpg>";
    };
    document.getElementById("img5").onclick=function(){
        painel.innerHTML = "<img src=img/img5.jpg>";
    };
}