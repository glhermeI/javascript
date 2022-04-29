/**
 *  Realizar a consulta dos dados do filme na api do the moviedb
 * vamos utilizar o comando fetch byscar|pesquisar e ele tem 2 elementos
 * para trabalhar.
 * - then (então) quando o resultado é um erro.
 * - cacth (capturar) quando o resultado é um erro.
 */
function carregarFilmes(){
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR&page=1")
    .then((resposta)=>resposta.json())
    .then((dados)=>{
        var filmes = "<div id= filmes>";
        dados.results.map((item, ix)=>{
            var div = `<div>
            <img src=https://image.tmdb.org/t/p/w500${item.poster_path}>
            <p class=voto>${item.vote_average}</p>
            <h2>${item.title}</h2>
            <p class=data>${item.release_date}</p>
            </div>`; 
            filmes += div;
            
    })
    document.body.innerHTML = filmes;
})
    .catch((erro)=>console.error(`erro ao carregar api -> ${erro}`));

}
const body = document.body;
body.onload = carregarFilmes;