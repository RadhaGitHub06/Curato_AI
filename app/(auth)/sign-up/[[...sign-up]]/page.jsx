import { SignedOut, SignUp } from "@clerk/nextjs";
import Image from "next/image";
import Header from "../../../dashboard/_components/Header";

export default function Page() {
  return (
    <div>
<Header/>
   
    <div className="relative flex min-h-screen bg-gray-900 overflow-hidden  bg-grid">
    
      <div className="w-full lg:w-1/2 flex items-center justify-center pr-6 z-10">
        <div className='className=" rounded-lg shadow-[0_10px_30px_rgba(200,200,200,0.8)]   max-w-md"'>
          <SignUp />
        </div>
      </div>
      {/* Floating Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Symbol 1 */}
       
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
    </div>
  );
}
