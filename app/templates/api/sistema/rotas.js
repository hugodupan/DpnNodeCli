const fs = require("fs");
const path = require("path");

var rotas = null;

module.exports = app => {
    rotas = {};

    //Rotas
    const dir = path.join(__dirname, "../rotas");
    fs.readdirSync(dir).forEach(rotaNome => {
        const rotaDir = path.join(dir, rotaNome);
        require(rotaDir)(app);
    });
};