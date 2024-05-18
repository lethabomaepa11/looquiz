"use server"

import prisma from '@/lib/prisma'
import { createSession} from '../../lib/session';
import { Profile } from '../../lib/session';
import { redirect } from 'next/navigation';
import bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache';


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
    
    const username = formData.get('username');
    const password = formData.get('password');
    if(String(email).includes("@")){
        //check if the username exists
        
        if(await checkUsername(username) || await checkEmail(email)){
            //the username or email already exists
            console.log(await checkEmail(email))
            redirect("/signup")
        }
        else
        {
            console.log("success")
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
        console.log("Invalid email")
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
        //console.log(dbPassword)
        
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

        }
    }
}