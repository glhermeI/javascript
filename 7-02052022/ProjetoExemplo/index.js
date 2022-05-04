// Impostação do modulo do servidor do Express
const express = require("express");

// importação do modulo do mongoose
const mongoose = require("mongoose");

// Criação do aplicativo do servidor do Express
const app = express();

// permitir que o servidor trabalhe com o formato JSON
app.use(express.json());

// Url de conexão com o banco de dados mongoDB
// mongodb+srv://hiago:<password>@projetoback.ltkvx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const urldb =
  "mongodb+srv://guilherme:gui160103@bancodedados.7jcld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(urldb, { useNewUrlParser: true, useUnifiedTopology: true });

// Criar a estrutura da tabela para cadastro dos clientes
const tabela = mongoose.Schema({
  nome: String,
  email: String,
  idade: Number,
});

// Criar o modelo de dados, ou seja, criar a tabela com a estrutura
const Client = mongoose.model("tbCliente", tabela);

// Vamos criar a primeira rota do servidor
app.get("/", (req, res) => {
  // Vamos trazer todos os clientes cadastrados e exibir em tela
  Client.find((erro, dados) => {
    if (erro)
      return res
        .status(500)
        .send({ output: `Erro ao carregar cliente -> ${erro}` });
    res.status(200).send({ output: dados });
  });
});

// Vamos criar a rota com o verbo POST. É usado quando se deseja cadastrar algum dado ou fazer um sistema de login
app.post("/cadastro", (req, res) => {
  //Vamos criar um novo cliente a partir dos dados enviados
  const cli = new Client(req.body);

  // Comando SAVE para gravar os dados no banco de dados
  cli
    .save()
    .then((dados) => {
      res.status(201).send({ output: `Cliente Cadastrado`, info: dados });
    })
    .catch((erro) =>
      res.status(500).send({ output: `Erro ao tentar cadastar -> ${erro}` })
    );
});

// Rota para atualiza os dados do cliente. Vamos usar o verbo PUT. Para atualizar precisaremos de 2 informações a primeira é o id do dados
// E a segunda são os dados que deseja atualizar.
app.put("/atualizar/:id", (req, res) => {
  Client.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (erro, dados) => {
      if (erro)
        return res.status(404).send({ output: `Erro ao atualizar: ${erro}` });
      res.status(200).send({ output: `Atualizado`, info: dados });
    }
  );
});

// Para deletar um dado iremos usar o verbo DELETE passando o id cadastrado
app.delete("/apagar/:id", (req, res) => {
  Client.findByIdAndDelete(req.params.id,(erro,dados) => {
    if(erro)
    return res.status(500).send({ output:`Erro ao Apagar: ->${erro}` });
    res.status(204).send({ output:"Apagou"});
  })
});

// Definir uma porta de comunicação com o servidor de aplicação
app.listen(5000, () => console.log("on line em http://localhost:5000"));
