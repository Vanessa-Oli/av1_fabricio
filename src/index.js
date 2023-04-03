const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://adrielpantunes:Hxc3zhIcVIROv9le@drielzin.snfemwj.mongodb.net/VachMake?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Conectado'))
    .catch((error) => console.log('Erro ao conectar com o MongoDB', error));


const routes = require('./routes');

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.');
});
