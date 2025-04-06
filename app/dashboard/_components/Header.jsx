import React from 'react'
import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'

function Header() {
  return (
    <div className='text-white flex justify-between items-center p-5 border rounded-4xl m-10'>
     <Image src={'/logo.svg'} width={300} height={200} alt="Logo" />
     <div className="scale-180">  {/* Increased size */}
        <UserButton />
      </div>
    </div>
  )
}

export default Header
