"use client"
import Link from "next/link"
import { signup } from "../actions/auth"
import { useFormStatus } from "react-dom"
import Loading from "./Loading"

const SignUp = () => {
    const {pending} = useFormStatus()
    if(pending){
        return <Loading/>
    }else{
  return (
    <main className="flex-col  rounded-xl p-10 justify-center bg-base-200">
      <h1 className="text-2xl mb-10 text-center">Signup to LooQuiz</h1>
        <section className="flex-col">
            
            <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Enter your email</span>
            </div>
            <input required type="text" id="email" name="email" placeholder="looquiz11@email.com" className="input input-bordered w-full" />
            <div className="label">
                <span className="label-text-alt text-error">Error here</span>
            </div>
        </label>
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Create Username</span>
            </div>
            <input required id="username" name="username" type="text" placeholder="looquiz_11" className="input input-bordered w-full" />
            <div className="label">
                <span className="label-text-alt text-error">Error here</span>
            </div>
        </label>
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Create Password</span>
            </div>

            <input required name="password" id="password" type="password" placeholder="*********" className="input input-bordered w-96 max-w-xs" />
            <div className="label ">
                <span className="label-text-alt text-error">Error here</span>
            </div>
        </label>
        <button className="btn-primary btn btn-square text-white w-full">Signup</button>
        </section>
        <Link className="link link-primary underline"href="/login">Already have an account? Login here.</Link>
      </main>
  )
}
}

export default SignUp
