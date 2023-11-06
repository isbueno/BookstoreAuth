// Esse arquivo tem a finalidade de popular sua base de dados. Rode somente uma vez.
const { sequelize, Livro, User } = require('./models')

const addLivro = (titulo, autor, genero, editora, preco, sku, quant_paginas) => {

    Livro.create({
        titulo,
        autor,
        genero,
        editora,
        preco,
        sku,
        quant_paginas
    }).then(livro => {
        console.log('Livro criado com sucesso.')
    }).catch(error => {
        console.error('Falha ao criar novos livros. ', error);
    });
}

addLivro("O Ladrão de Raios", "Rick Riordam", "Fantasia", "Intríseca", 53.90, "PJO200901", 350);
addLivro("O Mar de Monstros", "Rick Riordam", "Fantasia", "Intríseca", 50.90, "PJO200902", 300);
addLivro("A Maldição do Titã", "Rick Riordam", "Fantasia", "Intríseca", 50.00, "PJO200903", 420);
addLivro("A Batalha do Labirinto", "Rick Riordam", "Fantasia", "Intríseca", 59.90, "PJO200904", 315);
addLivro("O Último Olimpiano", "Rick Riordam", "Fantasia", "Intríseca", 63.90, "PJO200905", 300);
addLivro("Midnighters: A hora secreta", "Scott Westerfeld", "Ficção Científica", "iD", 33.00, "MD20061", 340);
addLivro("Delírio", "G. H. Ephron", "Thriller", "Best Seller", 42.90, "TM200801", 302);

const addUser = (name, birth, email, password, phone, books) => {

    User.create({
        name,
        birth,
        email,
        password,
        phone,
        books,
    }).then(user => {
        console.log('User criado com sucesso.')
    }).catch(error => {
        console.error('Falha ao criar User. ', error);
    });
}

// addLivro("O Ladrão de Raios", "Rick Riordam", "Fantasia", "Intríseca", 53.90, "PJO200901", 350);
// addLivro("O Mar de Monstros", "Rick Riordam", "Fantasia", "Intríseca", 50.90, "PJO200902", 300);
// addLivro("A Maldição do Titã", "Rick Riordam", "Fantasia", "Intríseca", 50.00, "PJO200903", 420);
// addLivro("A Batalha do Labirinto", "Rick Riordam", "Fantasia", "Intríseca", 59.90, "PJO200904", 315);
// addLivro("O Último Olimpiano", "Rick Riordam", "Fantasia", "Intríseca", 63.90, "PJO200905", 300);
// addLivro("Midnighters: A hora secreta", "Scott Westerfeld", "Ficção Científica", "iD", 33.00, "MD20061", 340);
// addLivro("Delírio", "G. H. Ephron", "Thriller", "Best Seller", 42.90, "TM200801", 302);

addUser("admin", "23-02-2003", "admin@gmail.com", "pass", "(12) 99633-6667", "Percy Jackson 1")
