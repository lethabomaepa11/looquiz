'use client'
import Link from "next/link"
import Image from "next/image"


function Login() {
  return (
    <main className="flex justify-center lg:justify-between">
        <Image
        src={"/looquix.png"}
        width={200}
        height={100}
        className="hidden lg:flex w-2/4 h-screen"
        alt="picture"/>
    <div className="flex min-h-screen flex-col items-center lg:items-end justify-center mr-0 lg:mr-20">
        
      <form className="flex-col  rounded-xl p-10 justify-center bg-base-200">
      <h1 className="text-lg text-center font-bold ">Login to LooQuiz</h1>
        <section className="flex-col">
            
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Username</span>
            </div>
            <input type="text" placeholder="looquiz_11" className="input input-bordered w-full" />
            <div className="label">
                <span className="label-text-alt text-error">Error here</span>
            </div>
        </label>
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Password</span>
            </div>

            <input type="password" placeholder="***" className="input input-bordered w-96 max-w-xs" />
            <div className="label ">
                <span className="label-text-alt text-error">Error here</span>
            </div>
        </label>
        <button className="btn-primary btn btn-square text-white w-full">Login</button>
        </section>
        <Link className="link link-primary underline"href="/signup">Create an account here.</Link>
      </form>
    </div>
    </main>
  )
}

export default Login
