module.exports = app => {
    app.api.sistema.banco.sequelize.sync().done(() => {
        app.listen(app.get("port"), () => {
            console.log(`Fusion CRM API - porta ${app.get("port")}`);
        });
    });
};