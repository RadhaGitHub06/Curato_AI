import { SignedOut, SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="relative flex min-h-screen bg-gray-900 overflow-hidden">
      <div className="w-full lg:w-1/2 flex items-center justify-center pr-6 z-10">
        <div className='className=" rounded-lg shadow-[0_10px_30px_rgba(200,200,200,0.8)]   max-w-md"'>
          <SignUp />
        </div>
      </div>
      {/* Floating Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Symbol 1 */}
        <div className="absolute top-16 left-200 text-blue-400 text-3xl animate-float-up-down">
          A{" "}
        </div>
        <div className="absolute top-1/3 right-32 text-green-300 text-4xl animate-float-up-down">
          D{" "}
        </div>
        <div className="absolute bottom-1/4 left-196 text-yellow-400 text-3xl animate-float-up-down">
          +{" "}
        </div>
        <div className="absolute bottom-12 right-14 text-pink-400 text-5xl animate-float-up-down">
          -{" "}
        </div>
        <div className="absolute top-51 left-210 text-blue-400 text-3xl animate-float-up-down">
          6{" "}
        </div>
        <div className="absolute top-1/3 right-22 text-green-300 text-4xl animate-float-up-down">
          @{" "}
        </div>
        <div className="absolute bottom-1/4 right-16 text-yellow-400 text-3xl animate-float-up-down">
          #{" "}
        </div>
        <div className="absolute bottom-32 right-39 text-pink-400 text-5xl animate-float-up-down">
          R
        </div>
        <div className="absolute top-86 left-210 text-blue-400 text-3xl animate-float-up-down">
          Q{" "}
        </div>
        <div className="absolute top-1/4 right-22 text-green-300 text-4xl animate-float-up-down">
          F{" "}
        </div>
        <div className="absolute bottom-54 left-186 text-yellow-400 text-3xl animate-float-up-down">
          9
        </div>
        <div className="absolute bottom-12 right-24 text-pink-400 text-5xl animate-float-up-down">
          H
        </div>
        <div className="absolute top-23 right-30 text-blue-400 text-3xl animate-float-up-down">
          k{" "}
        </div>
        <div className="absolute top-20 right-82 text-green-300 text-4xl animate-float-up-down">
          !{" "}
        </div>
        <div className="absolute bottom-1/4 right-36 text-yellow-400 text-3xl animate-float-up-down">
          %{" "}
        </div>
        <div className="absolute bottom-12 right-89 text-pink-400 text-5xl animate-float-up-down">
          5
        </div>
      </div>

      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 relative">
        <Image
          src={"/signin.svg"}
          alt="Side Image"
          height={600}
          width={600}
          className="absolute top-0 left-0 w-full h-full filter drop-shadow-[0_0_40px_rgba(97,142,190,0.7)]"
        />
      </div>

      {/* Right Side - Form */}
    </div>
  );
}
