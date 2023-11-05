const express  = require('express');
const app = express();
const door = 5000; // definindo a porta


app.use(express.json());

// Configurando o EJS
const path = require('path');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

// Importando as configurações do banco de dados
const { sequelize, Livro } = require('./book.model')

// Importando routes de livros
const livrosRoutes = require('./routes/books')
app.use(livrosRoutes);


// Definindo home
app.get('/', (req, res)=>{
    res.render('home');
});

app.listen(door, ()=>{
    console.log(`Listen on ${door} door`);
})



