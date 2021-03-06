var path = require('path');

const emailEnvio = 'alerta@vife.com.br';
const opcoesEmail = {

/**
 * AQUI VOCÊ COLOCA SUAS CONFIGURAÇÕES DE EMAIL
 */

    host: 'smtp.seuDominio.net',
    port: 587,
    secure: false,
    auth: {
        user: 'seuUsuario',
        pass: 'suaSenha'
    }
};

/**
 * AQUI VOCÊ COLOCA SUAS CONFIGURAÇÕES DE BANCO DE PRODUÇÃO
 */

const dbAzure = {
    database: "nomeDaDataBase",
    username: "usuarioDaDataBase",
    password: "suaSenhaDaDataBase",
    params: {
        dialect: "mysql",
        timezone: '-03:00',
        /**
         * seu host. Ex: br-cdbr-azure-south-b.cloudapp.net"
         */
        host: "br-seu-endereco",
        define: {
            underscored: true
        }
    },
};

/**
 * AQUI VOCÊ COLOCA SUAS CONFIGURAÇÕES DE BANCO LOCAL
 */

const dbLocal = {
    database: "nomeDaDataBase",
    username: "usuarioDaDataBase",
    password: "suaSenhaDaDataBase",
    params: {
        dialect: "mysql",
        timezone: '-03:00',
        /**
         * seu host. Ex: br-cdbr-azure-south-b.cloudapp.net"
         */
        host: "localhost",
        define: {
            underscored: true
        }
    },
};

module.exports = {
        base: dbLocal,
        chave: "Aqui-sua-chave-@@",
        sessao: { session: false },
        urlBase: "/api",
        emailEnvio: emailEnvio,
        opcoesEmail: opcoesEmail
    };
