"use server"

import prisma from '@/lib/prisma'
import { createSession} from '../../lib/session';
import { Profile } from '../../lib/session';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache';
import { generateRandomId } from './actions';

async function checkUsername(username)
{
    const exists = prisma.User.findUnique({
        where: {username: username},
    }
    )
    return exists;
}
async function checkEmail(email)
{
    const exists = prisma.User.findUnique({
        where: {email: email},
    }
    )
    return exists;
}

export async function signup(formData)
{
    const email = formData.get('email');
    
    let username = formData.get('username');
    const password = formData.get('password');
    if(String(email).includes("@")){
        //check if the username exists
        String(username).includes(" ") && (username = String(username).replace(" ",""))
        
        
        if(await checkUsername(username) || await checkEmail(email)){
            //the username or email already exists
            //console.log(await checkEmail(email))
            //redirect("/signup")
            //alert("Email or username already exists!")
            console.log("Email or username already exists")
        }
        else
        {
            console.log("account creation success!!")
            const encrypted_pass = await bcrypt.hash(password,10)
            //add to database
            await prisma.user.create({
                data: {
                username: username,
                email: email,
                password: encrypted_pass},
            })
            createSession(username);
            console.log(await Profile())
            revalidatePath("/");
            redirect("/")
        }

    }else{
        return ("Username must not have spaces!!")
    }
}

export async function login(formData)
{
    const username = formData.get("email");
    const password = formData.get("password");

    if(await  checkEmail(username)){
        
        console.log(await checkEmail(username))
        const data = await checkEmail(username);
        const dbPassword = data.password;
        
        
        const passwordMatches = await bcrypt.compare(password,dbPassword)
        if(passwordMatches){
            createSession(data.username)
            console.log("login success!")
            console.log(await Profile())
            revalidatePath('/')
            redirect("/")
        }
        else
        {
            //console.log(`Wrong credentials for login using ${email}`)
        }
    }
}


export async function publishQuizToDb(quiz,formData)
{
    //fetch the userId to relate the quiz to
    //quiz => object of 2 => quizData && questions
    console.log(quiz)
    const quizData = quiz.quizData
    const questions = quiz.questions

    const userId = prisma.User.findUnique({
        where: {username: await Profile()}
    })

    //add to database, create quiz => create question and answer
    await prisma.Quiz.create({
        data:
        {
            topic: quizData.topic,
            description: quizData.description,
            authorId: userId,
            timeLimit: Number(quizData.timeLimit),
            numQuestions: Number(quizData.numQuestions),
            questions: {
                create: questions.map((question) =>
                ({
                    text: question.text,
                    correctAnswer: question.correct_answer,
                    answers: {
                        create: {
                            a: question.answers.a,
                            b: question.answers.b,
                            c: question.answers.c,
                            d: question.answers.d,
                        }
                    }
                }))
            }

        }
    })
    redirect(`/${await Profile()}`)

}

export async function quizToDb(quiz)
{
    if(await Profile() != undefined){
    const userId = await prisma.User.findUnique({
        where: {username: await Profile()}
    })

    const quizId = await generateRandomId(32,userId.id)
    await prisma.Quiz.create({
        data:
        {
            id: quizId,
            topic: quiz.topic,
            description: quiz.description,
            //authorId: userId,
            timeLimit: Number(quiz.timeLimit),
            numQuestions: Number(quiz.numQuestions),
            author:
            {
                connect:{id: userId.id}
            }
        }
    })
    //connect the quiz to the user
    
    return quizId;
}
else
{
    return null;
    
}
}

export async function questionToDb(question)
{
    const questionId = await generateRandomId(32,question.quizId)
    await prisma.Question.create({
        data:
        {
            id: questionId,
            text: question.text,
            correctAnswer: question.correct_answer,
            //quizId: question.quizId,
            quiz:
            {
                connect:{id: question.quizId}
            }
        }
    })
    return questionId;
}

export async function answerToDb(answer)
{
    const id = await generateRandomId(32,answer.questionId)
    await prisma.Answer.create({
        data:
        {
            id: id,
            a: answer.a,
            b: answer.b,
            c: answer.c,
            d: answer.d,
            //questionId: answer.questionId,
            question:
            {
                connect:{id: answer.questionId}
            }
        }
    })
    redirect("/")
}