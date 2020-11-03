import { connection } from "..";
import { User } from "../types/User";

export const filterUsers = async (name: string): Promise<User[]> => {
  try {

    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE name LIKE "%${name}%"
    `)

    return result[0]
    
  } catch (error) {
    throw new Error(error.sqlMessage)
  }
}