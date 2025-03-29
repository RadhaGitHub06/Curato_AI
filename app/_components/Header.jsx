


import Image from 'next/image'
import React from 'react'
import { Button } from '../../Components/ui/button'

function Header() {
  return (
    <div className="flex justify-between items-center p-4  relative overflow-hidden rounded-lg bg-black shadow-sm shadow-gray-500">
  {/* Grey Gradient Line Background */}
  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-0"></div>

  {/* Navbar Content */}
  <div className="relative z-10 flex justify-between w-full">
    <Image src={'/logo.svg'} width={200} height={200} alt="Logo" />
   <Button>Get started</Button>
  
  </div>
</div>

  

  )
}

export default Header
