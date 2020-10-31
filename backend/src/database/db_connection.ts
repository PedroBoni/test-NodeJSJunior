import mysql from 'mysql';

const db_connection = mysql.createConnection({
  host: process.env.HOST_DB,
  user: process.env.USER_DB,
  password: process.env.PASSWORD_DB,  
  database: process.env.DATABASE,
})

export default db_connection;
