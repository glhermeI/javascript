//importação do modulo do servidor express
const { application } = require('express');
const express = require('express');

//criação do aplicativo do servidor express

const app = express();

//permitir que o servidor trabalhe com o formtao json

app.use(express.json());

//vamos criar a primeira rota do servidor
//esta vai ser a rota raiz
app.get("/", (req, res) => {
    res.send("Olá, seja bem-vindo. Você está na rota raiz");
})
//definir uma porta de comunicação com  o servidor de aplicação
app.listen(5000,()=> console.log("Online em http://localhost:5000"));