import { connection } from "..";

export default async function insertTask(
    id: string,
    title: string,
    description: string,
    deadline: string,
    authorId: string
) {
    await connection('To_do_List_Task')
        .insert({
            id,
            title,
            description,
            deadline,
            author_id: authorId
        })
}