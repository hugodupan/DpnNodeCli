var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');

module.exports = app => {
    app.set("port", (process.env.PORT || 8080));
    app.set("json spaces", 4);
    app.use(cors({
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }));
    app.use(bodyParser.json());
    app.use(app.api.sistema.autorizacao.initialize());
    app.use((req, res, next) => {
        delete req.body.codigo;
        next();
    });
    app.use(express.static("public"));
};