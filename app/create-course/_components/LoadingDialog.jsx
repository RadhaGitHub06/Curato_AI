import React from 'react'
import { AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
 } from '../../../Components/ui/alert-dialog'
 import Image from 'next/image'

function LoadingDialog({loading}) {
  return (
<AlertDialog open={loading}>
 <AlertDialogTitle></AlertDialogTitle>
  <AlertDialogContent className="bg-white text-black">
    <AlertDialogHeader>
     
      <AlertDialogDescription>
<div className='flex flex-col items-center py-10'>
       <Image src={'/loading.gif'} width={170} height={80} alt="load"/>
          <h2 className='text-xl'>Please Wait..Ai Working on your Course</h2>
  </div>    </AlertDialogDescription>
    </AlertDialogHeader>
  
  </AlertDialogContent>
</AlertDialog>

  )
}

export default LoadingDialog
