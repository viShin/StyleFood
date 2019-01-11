const variables = {
    Api: {
        //Utiliza a porta definida OU a 3000 caso não definido.
        port: process.env.port || 3000
    },
    Database: {
        conn: process.env.connection || 'mongodb://admin:admin123@ds149984.mlab.com:49984/stylefood'
    },
    Security: {
        secretKey: 'e608c0a13370fb72e3c9adb27277fbcb'
    }

}

module.exports = variables;