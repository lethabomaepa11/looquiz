
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';
import { redirect } from 'next/navigation';


// Next.js Route Handlers (App Router)


export async function logout(){
    const session =  await getIronSessionData();
    session.destroy();
    redirect("/login")
}
export async function createSession(username) {
  const session = await getIronSessionData();
  session.username = username;
  //console.log(session.username)
  await session.save();
  //console.log(await Profile());
}
// Next.js Server Components and Server Actions (App Router)
export async function getIronSessionData() {
  const session = await getIronSession(cookies(), { password: process.env.SESSION_SECRET, cookieName: "session" });
  return session
}

export async function Profile() {
  const session = await getIronSessionData();

  return session.username;
}