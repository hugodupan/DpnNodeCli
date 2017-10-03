module.exports = app => {


    //CASO O BANCO DE DADOS ESTEJA COMPLETE, DESCOMENTE O TRECHO ABAIXO E COMENTE O TRECHO POSTERIOR!

    // app.api.sistema.banco.sequelize.sync().done(() => {
    //     app.listen(app.get("port"), () => {
    //         console.log(`AQUI COLOQUE O NOME DO SEU SISTEMA - porta ${app.get("port")}`);
    //     });
    // });

    app.listen(app.get("port"), () => {
        console.log(`AQUI COLOQUE O NOME DO SEU SISTEMA - porta ${app.get("port")}`);
    });

};