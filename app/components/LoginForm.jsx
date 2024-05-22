"use client"
import Link from "next/link"
import { login } from "../actions/auth"
import { useFormStatus } from "react-dom"
import Loading from "./Loading"
import { useState } from "react"


const LoginForm = () => {
    const {pending} = useFormStatus()
    const [error,setError] = useState(false)

    if(pending){

        //setError(true)

        return(
            <Loading/>
        ) 
    }else{
  return (
    <main className="flex-col  rounded-xl p-10 justify-center bg-base-200">
      <h1 className="text-2xl mb-10 text-center">Login to LooQuiz</h1>
        <section className="flex-col">
            
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Email</span>
            </div>
            <input id="email" name="email" required type="text" placeholder="looquiz11@gmail.com" className="input input-bordered w-full" />
            <div className="label">
                {/*<span className="label-text-alt text-error">Error here</span>*/}
            </div>
        </label>
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Password</span>
            </div>

            <input id="password" required name="password" type="password" placeholder="********" className="input input-bordered w-96 max-w-xs" />
            <div className="label ">
                {/*<span className="label-text-alt text-error">Error here</span>*/}
            </div>
        </label>
        <button className="btn-primary btn btn-square text-white w-full">Login</button>
        </section>
        <Link className="link link-primary underline"href="/signup">Create an account here.</Link>
      </main>
  )
}
}

export default LoginForm
