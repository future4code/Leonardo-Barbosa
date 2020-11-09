import { connection } from "..";
import { User } from "../types/User";

export const filterUserByType = async (type: string): Promise<User[]> => {
  try {

    const result = await connection.raw(`
      SELECT * FROM aula48_exercicio
      WHERE type LIKE "${type}"
    `)

    return result[0]
    
  } catch (error) {
    throw new Error(error.sqlMessage)
  }
}