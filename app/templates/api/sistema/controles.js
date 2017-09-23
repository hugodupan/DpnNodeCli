const fs = require("fs");
const path = require("path");

var controles = null;

module.exports = app => {
    if (!controles) {
        controles = {};

        //Controles
        const dir = path.join(__dirname, "../controles");
        fs.readdirSync(dir).forEach(controleNome => {
            const controleDir = path.join(dir, controleNome);
            const controleRequisitado = require(controleDir)(app);
            var nomeParametro = controleNome.replace(".js", "");
            nomeParametro = nomeParametro.replace(nomeParametro[0], nomeParametro[0].toUpperCase());
            controles[nomeParametro] = controleRequisitado;
        });
    }
    return controles;
};