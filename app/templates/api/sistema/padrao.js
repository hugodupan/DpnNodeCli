var padrao = null;

module.exports = app => {
    const modeloRegistroCrud = app.api.sistema.banco.modelos.RegistroCrud;
    // const modeloFuncionalidade = app.api.sistema.banco.modelos.Funcionalidade;

    if (!padrao) {
        padrao = {
            //     registroCrud: (req, chaveRecebida, obj, fil, codigoCriador, enderecoIp, dadosNavegador) => {
            //         modeloFuncionalidade.findOne({ where: { Chave: chaveRecebida }, include: [{ all: true }] })
            //             .then(resultado => {
            //                 const novoRegistro = {
            //                     CodigoFuncionalidade: resultado.Codigo,
            //                     Objeto: obj,
            //                     Filtro: fil,
            //                     CodigoUsuarioCriador: req.user != undefined ? req.user.CodigoUsuarioCriador : codigoCriador,
            //                     Ip: req.user != undefined ? req.user.Ip : enderecoIp,
            //                     Navegador: req.user != undefined ? req.user.Navegador : dadosNavegador
            //                 };
            //                 modeloRegistroCrud.create(novoRegistro);
            //             })
            //             .catch(error => {
            //                 console.log("Erro ao localizar a funcionalidade: " + chaveRecebida + " - " + error.message);
            //             });
            //     }
            // };
        }
        return padrao;
    };
}