
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
  await session.save();
}
// Next.js Server Components and Server Actions (App Router)
export async function getIronSessionData() {
  const session = await getIronSession(cookies(), { password: "5lCbJBFxm/zsLxY0ExxtkmBrQbLqPEV4u2UQpwtHyMM=", cookieName: "session" ,
    cookieOptions: {
      secure: true,
    }
  });
  return session
}

export async function Profile() {
  const session = await getIronSessionData();

  return session.username;
}