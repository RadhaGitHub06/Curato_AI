import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { HiOutlinePuzzlePiece } from 'react-icons/hi2';
import { Button } from '../../../../Components/ui/button';
import EditCourseBasicInfo from './EditCourseBasicInfo';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../configs/firebaseConfig';
import db from '../../../../configs/db';  // Import db
import { courseList } from '../../../../configs/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';

function CourseBasicInfo({ course, refreshData,edit=true }) {
  const [selectedfile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');

useEffect(()=>{
  if(course){
    setSelectedFile(course?.courseBanner)
  }
},[course])

  const onFileSelected = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setSelectedFile(URL.createObjectURL(file));

    const filename = `curato-ai/${Date.now()}-${file.name}`;
    const storageRef = ref(storage, filename);

    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);  // Get the image URL
      console.log('Upload complete:', url);

      // Update DB with Firebase URL
      await db.update(courseList)
        .set({ courseBanner: url })   // Use the correct URL variable
        .where(eq(courseList.id, course.id));  

      setImageUrl(url);
      refreshData(url);
    } catch (error) {
      console.error('Upload failed:', error);
    }
  };

  return (
    <div className='p-10 border rounded-xl shadow-sm shadow-orange-50 mt-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-50'>
        {/* Course Info */}
        <div>
          <h2 className='font-bold text-[#618ebe] text-2xl'>
            {course?.courseOutput?.Course?.Name}
         {edit&& <EditCourseBasicInfo course={course} refreshData={() => refreshData(true)} />}
          </h2>
          <p className='text-sm text-gray-400'>{course?.courseOutput?.Course?.Description}</p>
          <h1 className='text-bold text-md font-md mt-2 mb-2 flex gap-2 items-center text-primary'>
            <HiOutlinePuzzlePiece className='text-2xl text-[#618ebe]' />
            {course?.category}
          </h1>
    <Link href={'/Course/'+course?.courseId+"/start"}>
          <Button className='bg-white text-black w-full'>Start</Button></Link>
        </div>

        {/* Course Image */}
        <div className='flex items-center justify-baseline'>
          <label htmlFor='upload-image'>
            <Image 
              src={imageUrl || selectedfile || '/uploaded.svg'} 
              alt='upload'
              width={350}
              height={100}
              className='rounded-xl shadow-lg object-cover cursor-pointer'
            />
          </label>
        </div>
      </div>

      <input
        type='file'
        id='upload-image'
        className='opacity-0'
        onChange={onFileSelected}
      />
    </div>
  );
}

export default CourseBasicInfo;
