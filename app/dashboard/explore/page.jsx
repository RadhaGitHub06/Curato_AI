"use client";
import React, { useEffect, useState } from 'react';
import db from '../../../configs/db';
import { courseList } from '../../../configs/schema';
import CourseCard from '../_components/CourseCard';
import { Button } from '../../../Components/ui/button';

function Explore() {
  const [courseListData, setCourseListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const[pageIndex,setPageIndex]=useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    GetAllCourse();
  }, [pageIndex]);

  const GetAllCourse = async () => {
    try {
      const result = await db.select().from(courseList).limit(9).offset(pageIndex*9);
      setCourseListData(result);
    } catch (err) {
      console.error("Failed to fetch courses:", err);
      setError("Something went wrong while fetching courses.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white px-3 md:px-12 lg:px-12 py-1">
      <h2 className="font-bold text-3xl mb-1">Explore More Projects</h2>
      <p className="text-gray-400 mb-2">Explore more projects built with AI by other users</p>

      {loading && <p className="text-gray-400">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {courseListData?.map((course, index) => (
          <div key={course.courseId || index}>
            <CourseCard course={course} displayUser={true}/>
          </div>
        ))}
      </div>
      <div className='flex justify-between mt-5'>
  {pageIndex !== 0 && (
    <Button className="bg-[#618ebe]" onClick={() => setPageIndex(prev => Math.max(prev - 1, 0))}>
      Previous Page
    </Button>
  )}

  <Button
    className="bg-[#618ebe]"
    onClick={() => setPageIndex(pageIndex + 1)}
    disabled={courseListData.length < 9}
  >
    Next Page
  </Button>
</div>
    </div>
  );
}

export default Explore;
