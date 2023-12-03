// Aca se hace la conexion a la base de Datos
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dragon50',
    database: 'colegiodatabase'
});

// Se exporta la conexion en una variable, para que
// pueda ser utilizada donde sea requerida (endpoints)

//Definimos las variables de entorno para la conexion a la Bd
// DB_HOST=localhost
// DB_USER=root
// DB_PASSWORD=dragon50
// DB_DATABASE=login_node
module.exports = connection;