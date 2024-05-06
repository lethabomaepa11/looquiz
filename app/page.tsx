'use client'
import Image from "next/image";
import Header from "./components/Header";
import React from "react";
import SideNav from "./components/SideNav";
import Feed from "./components/Feed";


export default function Home() {
  const [isVisible, setisVisible] = React.useState(false);

  function toggleSideNav(){
    setisVisible(prevIsVisible => {return !prevIsVisible})
  }
  return (
    <main className="min-h-screen flex-col justify-between">
      {/*main page/homepage*/}
      <Header 
      onClick={toggleSideNav}
      isVisible={isVisible}/>
      <section className="flex justify-between items-start">
        <SideNav isVisible={isVisible}/>
        {!isVisible&&<Feed/>}
        
      </section>
      
    </main>
  );
}
