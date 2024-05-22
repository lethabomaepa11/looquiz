"use server"
import { cookies } from "next/headers"
import { getIronSession } from "iron-session"
import { redirect } from "next/navigation";
import { getIronSessionData } from "@/lib/session";

export async function logout(){
    const session = await getIronSessionData();
    session.username = "me"
    session.destroy();
    redirect("/login")
}

export async function prevent(e)
{
    e.preventDefault();
}

export async function generateRandomId(length,id) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    id = id? id : "null"
    const idLength = id.length;
    for (let i = 0; i < (length/2); i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        result += id.charAt(Math.floor(Math.random() * idLength))
    }
    result = "q"+result;
    return result;
}

export async function deleteQuiz(quizId)
{
    await prisma.Quiz.delete(
        {
            where: {id: quizId}
        }
    )
    
}