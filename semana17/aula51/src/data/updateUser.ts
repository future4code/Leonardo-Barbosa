import { connection } from "..";

export default async function updateUser(
   id: string,
   name?: string,
   nickname?: string,
   email?: string
) {

   await connection("To_do_List_User")
      .update({
         name, nickname, email
      })
      .where({ 
         id 
      })

}