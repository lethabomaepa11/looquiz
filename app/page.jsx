
import Image from "next/image";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Feed from "./components/Feed";
import { Profile } from "@/lib/session";
import { Suspense } from "react";
import Loading from "./components/Loading";
import LoadingQuiz from "./components/LoadingQuiz";


export default async function Home() {
 
  let isLoggedIn = await Profile() != undefined?true:false;
  let isVisible = false;

  /*function toggleSideNav(){
    setisVisible(prevIsVisible => {return !prevIsVisible})
  }*/
  return (
    <Suspense fallback={<LoadingQuiz/>}>
    <main className="min-h-screen flex-col justify-between bg-base-300">
      {/*main page/homepage*/}
      <Header 
      //onClick={toggleSideNav}
      isVisible={isVisible}
      isLoggedIn={isLoggedIn}
      username = {await Profile()}/>

      <section className="flex justify-between items-start bg-base-200">
        <SideNav isVisible={isVisible}/>
        {!isVisible&&<Feed 
        isLoggedIn={isLoggedIn}/>}
        
      </section>
      
    </main>
    </Suspense>
  );
}
