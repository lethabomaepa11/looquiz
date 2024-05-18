"use server"
import { cookies } from "next/headers"
import { getIronSession } from "iron-session"
import { redirect } from "next/navigation";
import { getIronSessionData } from "@/lib/session";

export async function logout(){
    const session = await getIronSessionData();
    session.username = "me"
    //console.log(session.username)
    session.destroy();
   // console.log(session.username)
    redirect("/login")
}
