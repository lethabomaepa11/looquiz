import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next";
import { Profile } from "@/lib/session";

import { redirect } from "next/navigation";
import Signup from "@/app/components/Signup"
import { signup } from "../actions/auth";




export const metadata = {
    title: "LooQuiz: SignUp",
    description: "Quiz App",
  };

  
async function Signupa() {
  if(await Profile() != undefined){
      redirect("/")
  }else{
    

  return (

    <main className="flex justify-center lg:justify-between">
        <Image
        src={"/logoLooQuiz-removebg-preview.png"}
        width={200}
        height={200}
        className="hidden lg:flex w-2/4 h-screen"
        alt="logo"/>

    <div className="flex min-h-screen flex-col items-center lg:items-end justify-center mr-0 lg:mr-20">
      <form action={signup}>
        <Signup/>
      </form>
      
    </div>
    </main>
  )
}
}

export default Signupa
