const variables = {
    Api: {
        //Utiliza a porta definida OU a 3000 caso não definido.
        port: process.env.port || 3000
    }
}

module.exports = variables;