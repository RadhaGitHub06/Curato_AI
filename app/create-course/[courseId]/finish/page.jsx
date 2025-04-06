// "use client"
// import { useUser } from '@clerk/nextjs';
// import { useParams, useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react'
// import db from '../../../../configs/db';
// import { courseList } from '../../../../configs/schema';
// import { and, eq } from 'drizzle-orm';
// import CourseBasicInfo from '../_components/CourseBasicInfo';
// import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';

// function FinishScreen() {   // ✅ Removed params from props
//     const { user } = useUser();
//     const params = useParams();    // ✅ Using only the hook
//     const [course, setCourse] = useState([]);
//     const router = useRouter();

//     useEffect(() => {
//         if (params && user) {
//             GetCourse();
//         }
//     }, [params, user]);

//     const GetCourse = async () => {
//         try {
//             const result = await db
//                 .select()
//                 .from(courseList)
//                 .where(
//                     and(
//                         eq(courseList.courseId, params?.courseId),
//                         eq(courseList.createdBy, user?.primaryEmailAddress?.emailAddress)
//                     )
//                 );
//             setCourse(result[0]);
//             console.log("Course Data:", result[0]);
//         } catch (error) {
//             console.error("Error fetching course:", error);
//         }
//     };

//     return (
//         <div className='text-white px-10 md:px-20 lg:px-44 my-7'>
//           <h2 className='text-center font-bold text-2xl my-3 text-white'>Congrats! Your Course is Generated Successfully 🎉</h2>
        
//     <CourseBasicInfo course={course} refreshData={() => console.log()} />
//         <h2 className='mt-3 text-center text-[#618ebe]'>Course Url</h2>
//     <h2 className='text-center text-gray-500 flex gap-5  rounded-sm shadow-gray-400 shadow-2xs p-2'>{process.env.NEXT_PUBLIC_HOST_NAME}/course/view/{course?.courseId}
//         <HiOutlineClipboardDocumentCheck className='h-5 cursor-pointer w-5 '
//          onClick={async()=>await navigator.clipboard.writeText(process.env.NEXT_PUBLIC_HOST_NAME+"/course/view/"+course?.courseId)}/></h2>
//         </div>
//     )
// }

// export default FinishScreen


"use client"
import { useUser } from '@clerk/nextjs';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import db from '../../../../configs/db';
import { courseList } from '../../../../configs/schema';
import { and, eq } from 'drizzle-orm';
import CourseBasicInfo from '../_components/CourseBasicInfo';
import { HiOutlineClipboardDocumentCheck } from 'react-icons/hi2';

function FinishScreen() {  
    const { user } = useUser();
    const params = useParams();
    const [course, setCourse] = useState(null);
    const [copied, setCopied] = useState(false);  // State for copy notification
    const router = useRouter();

    useEffect(() => {
        if (params && user) {
            GetCourse();
        }
    }, [params, user]);

    const GetCourse = async () => {
        try {
            const result = await db
                .select()
                .from(courseList)
                .where(
                    and(
                        eq(courseList.courseId, params?.courseId),
                        eq(courseList.createdBy, user?.primaryEmailAddress?.emailAddress)
                    )
                );
            setCourse(result[0]);
            console.log("Course Data:", result[0]);
        } catch (error) {
            console.error("Error fetching course:", error);
        }
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_HOST_NAME}/course/view/${course?.courseId}`);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500); // Hide after 1.5 seconds
        } catch (error) {
            console.error("Failed to copy:", error);
        }
    };

    return (
        <div className='text-white px-10 md:px-20 lg:px-44 my-7'>
            <h2 className='text-center font-bold text-2xl my-3 text-white'>
                Congrats! Your Course is Generated Successfully 🎉
            </h2>
        
            <CourseBasicInfo course={course} refreshData={() => console.log()} />

            <h2 className='mt-3 text-center text-[#618ebe]'>Course Url</h2>
            <div className='text-center text-gray-500 flex flex-col sm:flex-row gap-2 sm:gap-5 items-center justify-center rounded-sm shadow-gray-400 shadow-2xs p-3 break-words sm:break-normal overflow-x-auto'>

                {process.env.NEXT_PUBLIC_HOST_NAME}/course/view/{course?.courseId}
                <div className="relative">
                    <HiOutlineClipboardDocumentCheck 
                        className='h-5 w-5 cursor-pointer'
                        onClick={handleCopy}
                    />
                    {copied && (
                        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 shadow-md">
                            URL Copied!
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FinishScreen;
