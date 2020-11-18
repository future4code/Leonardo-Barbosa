import { connection } from '..';

export default async function insertRecipe(
  id:string,
  title:string,
  description: string,
  start_date: Date,
  userId: string
) {
  await connection.insert({
    id,
    title,
    description,
    start_date,
    user_id: userId
  }).into('cookenu_recipes')
}