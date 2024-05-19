import Link from "next/link"
import Image from "next/image"
import { Profile } from "@/lib/session";
import { redirect } from "next/navigation";
import LoginForm from "@/app/components/LoginForm"
import { login } from "../actions/auth";



async function Login() {
  if(await Profile() != undefined){
    console.log(await Profile())
    redirect("/")
}else{
  return (
    <main className="flex justify-center lg:justify-between">
        <Image
        src={"/logoLooQuiz-removebg-preview.png"}
        width={200}
        height={100}
        className="hidden lg:flex w-2/4 h-screen"
        alt="logo"/>
    <div className="flex min-h-screen flex-col items-center lg:items-end justify-center mr-0 lg:mr-20">
    
    <form action={login}>
      <LoginForm/>
      </form>
    </div>
    </main>
  )}
}

export default Login
