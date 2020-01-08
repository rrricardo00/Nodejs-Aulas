const express = require('express');
const consign = require('consign');
const app = express();
const port = 3000;

consign().include('rotas').into(app);

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/blog/:artigo?', (req, res) => {
    let artigo = req.params.artigo;
    if (artigo)
        res.send(artigo)
    else
        res.send('não passou o parametro artigo')

});

app.get('/ola/:nome?/:empresa?', (req, res) => {
    let nome = req.params.nome
    res.send('Olá, ' + nome);
});

app.listen(port, () => console.log(`Example app listening on port port!`));

