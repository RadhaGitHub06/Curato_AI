import React from 'react';
import { 
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle
} from '../../../Components/ui/alert-dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';  // Import for accessibility
import Image from 'next/image';

function LoadingDialog({ loading }) {
    if (!loading) return null;  // Prevent rendering when not loading

    return (
        <AlertDialog open={loading}>
            <AlertDialogContent className="bg-white text-black">
                <AlertDialogHeader>
                    {/* Visually hidden title for screen readers */}
                    <VisuallyHidden>
                        <AlertDialogTitle>Loading...</AlertDialogTitle>
                    </VisuallyHidden>
                    
                    <div className='flex flex-col items-center py-10'>
                        <Image src={'/loading.gif'} width={170} height={80} alt="Loading..." />
                        <h2 className='text-xl mt-4'>Please wait... AI is working on your course</h2>
                    </div>  
                </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    );
}

export default LoadingDialog;
