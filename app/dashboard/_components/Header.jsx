"use client"
import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <header className="m-4 sm:m-6 lg:m-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-lg p-4 sm:p-6 lg:p-8 flex items-center justify-between transition-all duration-300">

      {/* Logo */}
      <div className="flex items-center space-x-4">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={200}
          height={80}
          className="w-32 sm:w-40 lg:w-52 object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* User Profile */}
      <div className="scale-[1.4] sm:scale-[1.5] md:scale-[1.6] transition-transform duration-300 hover:scale-[1.65]">
        <UserButton />
      </div>

    </header>
  )
}

export default Header
