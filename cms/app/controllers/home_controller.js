var Usuario = require('../models/usuario');

var HomeController = {
    index: function(req, res, next) {        
        res.render('index', { title: usuario.nome });
    },

    usuario: function(req, res, next) {
        var usuario = new Usuario();

        usuario.nome = "Wellington Fernando";
        usuario.login = "prico";
        usuario.senha = "prico123";
        usuario.email = "88352630";
        usuario.salvar();

        res.send('Usuário incluído com sucesso');
    }
};

module.exports = HomeController;