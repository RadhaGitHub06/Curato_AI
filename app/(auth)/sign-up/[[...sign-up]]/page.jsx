"use client";
import { SignUp } from "@clerk/nextjs";
import { BackgroundGradient } from "../../../../Components/ui/gradient-card";
import Aurora from "../../../../Components/ui/Aurorabg";

export default function Page() {
  return (
    <div className="relative min-h-screen bg-[#051318]  overflow-hidden flex items-center justify-center">
      
      {/* Aurora Background (Behind Everything) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Aurora
          colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
          blend={0.8}
          amplitude={1.0}
          speed={2.0}
        />
      </div>
<h1>
  Sign in to Curato AI
</h1>
      {/* Sign In Card */}
      <div className="z-10 w-full flex items-center justify-center  px-4">
        <BackgroundGradient className="rounded-[22px] p-2 sm:p-5 dark:bg-zinc-900">
          <div className="w-full max-w-md rounded-lg shadow-2xl bg-black/70 backdrop-blur-md p-6">
            <SignUp />
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
}
