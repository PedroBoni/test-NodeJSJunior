import db_connection from "./db_connection";

export default function Query(sql: string){
  return new Promise((resolve, reject) => {
    db_connection.query(sql, (err, result) =>{
      if(err) reject(err);
      else resolve(result)
    })
  })
}