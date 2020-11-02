import {connection} from "../index"

export async function createUserTable():Promise<void> {
  try {
    
        await connection.raw(`
          CREATE TABLE to_do_list_users (
          id INT PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          nickname VARCHAR(255) UNIQUE NOT NULL,
          email VARCHAR(255) UNIQUE NOT NULL
      );
    `)
    console.log('sucesso')
  } catch (error) {
    console.log('falhou')
  }
  
}

createUserTable()