var express = require('express');
var consign = require('consign');

const app = express();

consign()
    .include("./api/sistema/configuracao.js", { dev: true })
    .then("./api/sistema/banco.js")
    .then("./api/sistema/autorizacao.js")
    .then("./api/sistema/parametros.js")
    .then("./api/sistema/padrao.js")
    .then("./api/sistema/controles.js")
    .then("./api/sistema/rotas.js")
    .then("./api/sistema/cron.js")
    .then("./api/sistema/inicio.js")
    .into(app);