"use client";
import { SignIn } from "@clerk/nextjs";
import { BackgroundGradient } from "../../../../Components/ui/gradient-card";
import Aurora from "../../../../Components/ui/Aurorabg";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#0c0c1d] overflow-hidden flex items-center justify-center">
      
    
      <div className="absolute inset-0 z-0 bg-[url('/signout.svg')] w-[500px] bg-cover opacity-10"></div>
     
      {/* Aurora Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#6C63FF", "#FF6BAA", "#FF3E3E"]}
          blend={0.8}
          amplitude={1.0}
          speed={2.0}
        />
      </div>

      {/* Centered Sign-in Box */}
      <div className="z-10 w-full flex items-center justify-center px-4">
        <BackgroundGradient className="rounded-[22px] p-1 sm:p-4 dark:bg-transparent">
          <div className="w-full max-w-md rounded-2xl shadow-2xl bg-white/5 backdrop-blur-lg p-1 ">
            <SignIn appearance={{ elements: { card: 'bg-transparent shadow-none' } }} />
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
