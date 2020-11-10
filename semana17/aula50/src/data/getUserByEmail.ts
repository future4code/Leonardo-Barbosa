import { connection } from "../index"
import { User } from "../types/User"

const userTableName = "User";

export default async function getUserByEmail (email: string): Promise<User> {

  try {
    const result = await connection(userTableName)
    .select("*")
    .where( {email} )

    return {
      id: result[0].id,
      email: result[0].email,
      password: result[0].password
    }
  } catch (error) {
    throw new Error(error.slqMessage || error.message)
  }
  
}