"use server"
import { cookies } from "next/headers"
import { getIronSession } from "iron-session"
import { redirect } from "next/navigation";
import { getIronSessionData, Profile } from "@/lib/session";
import prisma from "@/lib/prisma";

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
export async function createQuizResponse(quizId)
{
    if(await Profile() != undefined){

     const userId = await prisma.User.findUnique({
            where: {username: await Profile()}
        })
    
    let responseId = await generateRandomId(20)
    responseId = responseId.replaceAll(" ","")
    console.log(responseId)
    //create and relate to both quiz and user
    await prisma.QuizResponse.create({
        data:
        {
            id: responseId,
            //questionId: answer.questionId,
            quiz:
            {
                connect:{id: quizId}
            },
            user:
            {
                connect: {id: userId.id}
            }

        }
    })

    return responseId;
}
else
{
    redirect("/login")
}
}

export async function submitQuizResponse(responseId,answer)
{
    //call the generateRandomId furst then use that id for this response , one response at a time
    let index = answer.lastIndexOf("q");
    
    let question = Number(answer.charAt(index+1))

    answer = answer.slice(0,index-1)

    await prisma.QuizResponseAnswers.create({
        data:
        {
            answer: answer,
            question: question,
            //questionId: answer.questionId,
            quizResponse:
            {
                connect:{id: responseId}
            }
        }
    })
}