import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from '../../../../Components/ui/dialog'
import { HiPencilSquare } from 'react-icons/hi2'
import { Input } from '../../../../Components/ui/input'
import { Textarea } from '../../../../Components/ui/textarea'
import { Button } from '../../../../Components/ui/button'
import { courseList } from '../../../../configs/schema'
  import db from '../../../../configs/db'
   import _ from 'lodash'
   import { eq } from 'drizzle-orm'


function EditCourseBasicInfo({course, refreshData}) {

   
const[Name,setName]=useState('');
const[Description,setDiscription]=useState('');

//  useEffect(()=>{
//     setName(course.courseOutput.Course);
//     setDiscription( course.courseOutput.Course.Description);
//  },[course])

useEffect(() => {
    // Add nullish checks to prevent runtime errors
    if (course?.courseOutput?.Course) {
        setName(course.courseOutput.Course.Name || '');  // Set only the Name property
        setDiscription(course.courseOutput.Course.Description || '');
    }
}, [course]);
// const onUpdateHandler=async()=>{
//     course.courseOutput.Course.Name=Name;
//     course.courseOutput.Course.Description=Description;
//    const result=await db.update(courseList).set({
//     courseOutput:course?.courseOutput
//    }).returning({id:courseList.id});
//    console.log(result)
//    console.log(course)
// }
const onUpdateHandler = async () => {
    // Deep clone the object to avoid circular reference issues
    const updatedCourse = _.cloneDeep(course);

    // Modify the cloned object
    updatedCourse.courseOutput.Course.Name = Name;
    updatedCourse.courseOutput.Course.Description = Description;

    // Update the database with the modified clone
    const result = await db.update(courseList)
        .set({ courseOutput: updatedCourse.courseOutput })
        .where(eq(courseList.id, course.id))
        .returning({ id: courseList.id });

    refreshData(true)
};

return (
    <Dialog>
      <DialogTrigger asChild>
        <HiPencilSquare className='text-gray-400 cursor-pointer' />
      </DialogTrigger>
      <DialogContent className='bg-gray-200 text-black'>
        <DialogHeader>
          <DialogTitle>Edit Course Title & Description</DialogTitle>
        </DialogHeader>

        {/* Move the form content outside of <DialogDescription> */}
        <div className='mt-3'>
          <label className='text-black'>Course Title</label>
          <Input 
            defaultValue={course?.courseOutput?.Course?.Name} 
            className='border shadow-xl'
            onChange={(event) => setName(event?.target.value)}
          />
          <div className='mt-4'>
            <label className='text-black'>Description</label>
            <Textarea 
              defaultValue={course?.courseOutput?.Course?.Description}
              className='border shadow-xl'
              onChange={(event) => setDiscription(event?.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={onUpdateHandler} type="submit" className='bg-[#618ebe]'>Update</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export default EditCourseBasicInfo 