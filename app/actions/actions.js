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