import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import mysql from 'mysql'


dotenv.config({path:'./.env'})

export default function ConnectDB (){
    
const connection = mysql.createConnection({
    host     : process.env.RDS_HOSTNAME,
    user     : process.env.RDS_USERNAME,
    database : process.env.RDS_DATABASE,
    password : process.env.RDS_PASSWORD,
    port     : 3306
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
  });
  
  connection.end();
}
