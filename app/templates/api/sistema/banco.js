var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

const config = require("./configuracao.js");

var db = null;

module.exports = app => {
    if (!db) {
        const config = app.api.sistema.configuracao;
        const sequelize = new Sequelize(
            config.base.database,
            config.base.username,
            config.base.password,
            config.base.params
        );
        db = {
            sequelize,
            Sequelize,
            modelos: {}
        };
        const dir = path.join(__dirname, "../modelos");
        fs.readdirSync(dir).forEach(file => {
            const modelDir = path.join(dir, file);
            const model = sequelize.import(modelDir);
            db.modelos[model.name] = model;
        });
        Object.keys(db.modelos).forEach(chave => {
            if (db.modelos[chave].hasOwnProperty("associacao")) {
                db.modelos[chave].associacao(db.modelos);
            }
        });
    }
    return db;
};