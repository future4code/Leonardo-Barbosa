import {connection} from "../index"

export async function createTaskTable():Promise<void> {
  try {
    
    await connection.raw(`
      CREATE TABLE to_do_list_tasks (
      id VARCHAR(64) PRIMARY KEY,
      title VARCHAR(64) NOT NULL,
      description VARCHAR(1024) DEFAULT "No description provided",
      deadline DATE,
      status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
      author_id VARCHAR(64),
      FOREIGN KEY (author_id) REFERENCES to_do_list_users(id)
      );
    `)
    console.log('sucesso')  
  } catch (error) {
    console.log('falhou')
  }
  
}

createTaskTable()