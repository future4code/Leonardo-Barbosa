import { connection } from "..";

export default async function deleteUser (id: string) {
  await connection("To_do_List_User")
    .delete()
    .where({ id });
}