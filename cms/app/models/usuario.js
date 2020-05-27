var db = require('../../config/db');

function Usuario() {
    this.id = 0;
    this.nome = "";
    this.login = "";
    this.senha = "";
    this.email = "";
}

Usuario.prototype.salvar = function() {
    if (this.id === 0 || this.id === "" || this.id === undefined) {

        var erros = [];

        if (this.nome == "") {
            erros.push("[Modelo:Usuario] Nome de usuário obrigatório");
        }

        if (this.login == "") {
            erros.push("[Modelo:Usuario] Login obrigatório");
        }

        if (this.senha == "") {
            erros.push("[Modelo:Usuario] Senha obrigatória");
        }

        if (erros.length > 0) {
            console.log(erros.join("\n"));
            return;
        }

        var query = "INSERT INTO usuarios(nome, login, senha, email) VALUES ('" + this.nome + "', '" + this.login + "', '" + this.senha + "', '" + this.email + "')";
        db.cnn.exec(query, function(rows, err) {
            if (err != undefined) {
                console.log("Erro ao incluir dados de usuario");
            }
            else {
                console.log("Usuário incluído com sucesso");
            }
        });
    }
    else {

    }
};

module.exports = Usuario;