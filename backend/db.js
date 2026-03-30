const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'cursos-app',
    port: process.env.DB_PORT || 3307
});

connection.connect(err =>{
    if(err){
        console.error('Error en la conexion a la BD  ', err);
        return;
    }

    console.log('Conectado');
});

module.exports = connection;