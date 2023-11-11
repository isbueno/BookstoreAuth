const express  = require('express');
const router = express.Router()

// Criptografia de senha

// Importando as configurações do banco de dados
const { sequelize, User } = require('../models')


// Criando um novo user
router.get('/sign-up', (req, res) => {
    res.render('users');     
});

// Método POST para cadastrar users
router.post('/sign-up', (req, res) => {
    const { name, birth, email, password, phone} = req.body;

    books = "percy jackson"
    // Função para adicionar novos dados ao banco
    User.create({
        name,
        birth,
        email,
        password,
        phone,
        books,
    }).then(user => {
        res.redirect(`users/${user.id}`)
    }).catch(error => {
        console.error('Falha ao criar novo livro: ', error);
    });
});

// Rota de login
router.get('/sign-in', (req, res) => {
  res.render('sign-in');
});

router.post('/sign-in', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (user) {
    if (user.password === password) {
      res.render('perfil', {user});
    } else {
        res.render('sign-in');
    }
    } else {
    res.render('sign-in');
  }
});


// Exibindo apenas um user

function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login'); // Redirecione para a página de login ou ação apropriada
  }

router.get('/users/:id', isAuthenticated, (req,res) => {
    const { id } = req.params;

    // Função para encontrar um dados de acordo com o parâmetro passado
    User.findOne({ where: { id: id } }
    ).then( user => {
        res.render('perfil', {user});
    }).catch((error) => {
        res.send("Nenhum livro encontrado.");
    });
});


// Deletar User
router.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    User.destroy({ where: { id: id } })
        .then(() => {
            console.log('\n\nUSER APAGADO\n\n');
            res.redirect('home');
        })
        .catch(error => {
            console.error('Erro ao excluir user: ', error);
            res.sendStatus(500);
        });
});


// Atualizar informações do livro

const methodOverride = require('method-override');
router.use(methodOverride('_method'));

// rota GET para capturar o livro que será editado e mandar para a página de edição
router.get('/users/:id/editar', (req, res) => {
    const { id } = req.params;

    User.findOne({ where: { id: id } })
        .then(user => {
            res.render('editar_perfil', { user });
        })
        .catch(error => {
            res.send("Nenhum user encontrado.");
        });
});


// Rota para processar a atualização de um livro
router.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const { name, birth, email, password, phone, books } = req.body;
  
    User.update(
      { name, birth, email, password, phone, books },
      { where: { id: id } }
    ).then((resultado) => {
        if (resultado[0] === 1) {
          res.redirect(`/users/${id}`);
        } else {
          res.status(404).send('User não encontrado.');
        }
      })
      .catch((error) => {
        res.status(500).send('Falha ao atualizar user: ', error);
      });
  });
  


module.exports = router
