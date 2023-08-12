const express = require('express')
const app = express()

//ROTA
    //Método HTTP - CRUD (CREATE, READ, UPDATE, DELETE)
        // GET - Pega uma informação
        // POST - Cria uma informação
        // PUT - Altera todas as informações
        // PATH - Altera partes da informações
        // DELETE - Apaga uma informação

    //Nome - Um identificador da minha 
    
    //Função(Callback) - Responsavel por executar algum comando

    // res - responder

    // json - ver arquivos json usando res.json()


app.get("/soma", (req, res) => {
  const soma = 1 + 1;

  res.send({soma: soma});
});

app.listen(2411);