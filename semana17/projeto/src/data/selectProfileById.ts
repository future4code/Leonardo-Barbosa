import { connection } from '..';

export default async function selectProfileById(id: string): Promise<any> {

  try {

    const result = await connection('cookenu_users')
      .select('*')
      .where({ id })

    return {
      id: result[0].id,
      name: result[0].name,
      email: result[0].email
    }

  } catch (error) {
    throw new Error(error.slqMessage || error.message)
  }
}