"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import db from "../../../configs/db"; // Adjust import as needed
import { courseList } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import CourseBasicInfo from "../../create-course/[courseId]/_components/CourseBasicInfo";
import Header from "../../dashboard/_components/Header";
import CourseDetail from "../../create-course/[courseId]/_components/CourseDetail";
import ChapterList from "../../create-course/[courseId]/_components/ChapterList";


export default function CoursePage() {
  const { courseId } = useParams(); // ✅ Get dynamic courseId from the URL
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (courseId) {
      GetCourse();
    }
  }, [courseId]);

  const GetCourse = async () => {
    try {
      const result = await db.select().from(courseList).where(eq(courseList?.courseId, courseId));
      console.log(result)
      if (result.length > 0) {
        setCourse(result[0]);
      } else {
        console.warn("No course found!");
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div className="text-white px-10 p-10 lg:px-44 md:px-20 bg-grid">
      <Header/>
   <CourseBasicInfo course={course } edit={false} />
   <CourseDetail course={course}/>
   <ChapterList course={course}/>
  </div>
   
  );
}
