import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';
import React from 'react';
import Header from '../../../dashboard/_components/Header';

export default function Page() {
  return (
    <div>
      <Header/>
    <div className="relative flex min-h-screen bg-gray-900 overflow-hidden bg-grid">

      {/* Floating Symbols */}
    <div className="absolute inset-0 pointer-events-none">
        {/* Symbol 1 */}
      <div className="absolute top-16 left-150 text-blue-400 text-3xl animate-float-rtl animate-float-up-down">A</div>
        <div className="absolute top-1/3 left-32 text-purple-300 text-4xl animate-float-rtl animate-float-up-down">D</div>
        <div className="absolute bottom-1/4 left-146 text-yellow-500 text-3xl animate-float-rtl animate-float-up-down">+</div>
        <div className="absolute bottom-12 left-14 text-pink-500 text-5xl animate-float-rtl animate-float-up-down">-</div>
        <div className="absolute top-51 left-140 text-teal-400 text-3xl animate-float-rtl animate-float-up-down">6</div>
        <div className="absolute top-1/3 left-22 text-green-400 text-4xl animate-float-rtl animate-float-up-down">@</div>
        <div className="absolute bottom-1/4 left-16 text-orange-400 text-3xl animate-float-rtl animate-float-up-down">#</div>
        <div className="absolute bottom-32 left-39 text-red-400 text-5xl animate-float-rtl animate-float-up-down">R</div>
        <div className="absolute top-86 left-150 text-cyan-400 text-3xl animate-float-rtl animate-float-up-down">Q</div>
        <div className="absolute top-1/4 left-22 text-yellow-300 text-4xl animate-float-rtl animate-float-up-down">F</div>
        <div className="absolute bottom-54 left-156 text-lime-400 text-3xl animate-float-rtl animate-float-up-down">9</div>
        <div className="absolute bottom-12 left-24 text-indigo-500 text-5xl animate-float-rtl animate-float-up-down">H</div>
        <div className="absolute top-23 left-30 text-pink-400 text-3xl animate-float-rtl animate-float-up-down">k</div>
        <div className="absolute top-20 left-82 text-fuchsia-300 text-4xl animate-float-rtl animate-float-up-down">!</div>
        <div className="absolute bottom-1/4 left-36 text-emerald-400 text-3xl animate-float-rtl animate-float-up-down">%</div>
        <div className="absolute bottom-12 left-89 text-blue-500 text-5xl animate-float-rtl animate-float-up-down">5</div>
      </div> 

      {/* Left Side - Image */}
      <div className="hidden lg:flex w-1/2 relative">
        <Image
          src={'/signin.svg'}
          alt="Side Image"
          height={600}
          width={600}
          className="absolute top-0 left-0 w-full h-full filter drop-shadow-[0_0_40px_rgba(97,142,190,0.7)]"
        />
      </div>

      {/* Right Side - Form */}
      <div className=" lg:w-1/2 flex items-center justify-center pr-6 z-10">
      <div className=" rounded-lg shadow-[0_10px_30px_rgba(200,200,200,0.8)]  max-w-md">
        <SignIn />
    </div>
      </div>
    </div>
    </div>
  );
}
