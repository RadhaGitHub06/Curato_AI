"use client"
import React from 'react'
import { useUser } from '@clerk/nextjs';
import { Button } from '../../../Components/ui/button';
import Link from 'next/link';
function AddCourse() {
    const {user}=useUser();
  return (
    <div className='flex items-center justify-between'>
   <div>
    <h2 className='text-3xl text-white'>Hello, <span className='text-gray-100 font-bold'>
    {user?.fullName} </span></h2>
    <p>Create New course with AI, Share with friends and Earn from it</p>
   </div>
   <Link href={'/create-course'}>
   <Button className='bg-white text-black'>
    + Course Curation With AI
   </Button>
   </Link>
  
    </div>
  )
}

export default AddCourse
