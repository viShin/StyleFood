'use strict'
const app = require('../api/bin/express');
const variables = require('../api/bin/configuration/variables');

app.listen(variables.Api.port, () => {
    console.info(`API inicializada com sucesso na porta ${variables.Api.port}.`);
});
