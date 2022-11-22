import express from 'express';
import parser from 'body-parser';
import routes from './src/routes/Routes';
import cors from 'cors';
//import {generateUsuario} from '@src/generateData'
//import ConnectDB from "database/configMysql"
//import CreateDB from '@src/config/configSqlite3'
const app = express()

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

/** @Note by Alysson
 * É importante dizer ao express as rotas que serão usadas após dizer que será 
 * trabalhado com req e res em formato json
 */
app.use(routes)

//generateUsuario()

app.listen(process.env.PORT || 3000, () => {
    console.log('teste de conexão na porta 3000');
})






// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
// import express from 'express'

// import mysql from 'mysql'


// var connection = mysql.createConnection({
//   host     : process.env.RDS_HOSTNAME,
//   user     : process.env.RDS_USERNAME,
//   password : process.env.RDS_PASSWORD,
//   port     : process.env.RDS_PORT
// });

// connection.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }

//   console.log('Connected to database.');
// });

// connection.end();