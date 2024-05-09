'use client'
import Image from "next/image";
import Header from "./components/Header";
import {useState, useEffect} from "react";
import SideNav from "./components/SideNav";
import Feed from "./components/Feed";


export default function Home() {
  const [isVisible, setisVisible] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(true)

  function toggleSideNav(){
    setisVisible(prevIsVisible => {return !prevIsVisible})
  }
  return (
    <main className="min-h-screen flex-col justify-between">
      {/*main page/homepage*/}
      <Header 
      onClick={toggleSideNav}
      isVisible={isVisible}
      isLoggedIn={isLoggedIn}/>

      <section className="flex justify-between items-start">
        <SideNav isVisible={isVisible}/>
        {!isVisible&&<Feed 
        isLoggedIn={isLoggedIn}/>}
        
      </section>
      
    </main>
  );
}
