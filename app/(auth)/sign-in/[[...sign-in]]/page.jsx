"use client";
import { SignIn, SignUp } from "@clerk/nextjs";
import Image from "next/image";

import { BackgroundGradient } from "../../../../Components/ui/gradient-card";
import Aurora from "../../../../Components/ui/Aurorabg";
export default function Page() {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
   <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.8}
  amplitude={1.0}
  speed={2.0}
/>

      <Image
      src={'/logo.svg'}
      width={300}
      height={200}
      alt="logo"
      className=""
      />
    
      <div className="min-h-screen flex items-center justify-center  text-white relative overflow-hidden">
       

        {/* Right Side - SignUp Form */}
        <BackgroundGradient className="rounded-[22px] p-2  sm:p-5  dark:bg-zinc-900">
            <div className="w-full flex justify-center items-center px-2 z-10 rounded-2xl">
          <div className=" rounded-lg p-2 shadow-2xl max-w-md w-full">
            <SignIn/>
          </div>
        </div>
</BackgroundGradient>
        {/* Background Glow */}
        </div>
    </div>
  );
}
