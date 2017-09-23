var passport = require('passport');
var jwt = require('passport-jwt');

module.exports = app => {
    const modeloControle = app.api.sistema.banco.modelos.ControleUsuario;
    const modeloUsuario = app.api.sistema.banco.modelos.Usuario;
    const cfg = app.api.sistema.configuracao;
    const params = {
        secretOrKey: cfg.chave,
        jwtFromRequest: jwt.ExtractJwt.fromAuthHeader()
    };
    const strategy = new jwt.Strategy(params,
        (payload, done) => {
            modeloControle.findOne({
                    where: { Codigo: payload.Codigo, Ativo: true },
                    include: [{
                        all: true
                    }, {
                        model: modeloUsuario,
                        as: "UsuarioCriador",
                        include: [{ all: true }]
                    }]
                })
                .then(controle => {
                    if (controle) {

                        return done(null, controle);

                    } else {
                        return done(null, false);
                    }
                })
                .catch(error => done(error, null));
        });
    passport.use(strategy);
    return {
        initialize: () => {
            return passport.initialize();
        },
        authenticate: () => {
            return passport.authenticate("jwt", cfg.sessao);
        }
    };
};