import { connection } from '..';

export default async function selectRecipeById(id: string): Promise<any> {

  try {

    const result = await connection('cookenu_recipes')
      .select('*')
      .where({ id })

    return {
      id: result[0].id,
      title: result[0].title,
      description: result[0].description,
      date: result[0].start_date
    }

  } catch (error) {
    throw new Error(error.slqMessage || error.message)
  }
}