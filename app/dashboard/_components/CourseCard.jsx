import Image from "next/image";
import React from "react";
import { FaBookOpen, FaChartLine } from "react-icons/fa"; // Import icons
import { HiMiniEllipsisVertical } from "react-icons/hi2";
import DropdownOption from "./DropdownOption";
import { courseList as courseSchema } from "../../../configs/schema";
import { eq } from "drizzle-orm";
import db from "../../../configs/db"; // Ensure correct DB import
import Link from "next/link";

function CourseCard({ course, refreshData , displayUser=false}) {
  const handleOnDelete = async () => {
    if (!course?.id) {
      console.error("Error: course ID is undefined");
      return;
    }

    try {
      const resp = await db
        .delete(courseSchema)
        .where(eq(courseSchema.id, course.id))
        .returning({ id: courseSchema.id });

      if (resp.length > 0) {
        console.log("✅ Course deleted successfully:", resp);
        refreshData(); // Refresh UI after successful delete
      } else {
        console.warn("⚠️ No course found to delete.");
      }
    } catch (error) {
      console.error("❌ Deletion error:", error);
    }
  };

  return (
    <div className="bg-white/10 shadow-lg border border-gray-700 p-3 rounded-lg max-w-sm w-full mx-auto sm:max-w-md lg:max-w-lg hover:scale-105 transition-all cursor-pointer mt-5">
      {/* 🟢 Course Image */}
      {course?.courseId && (
  <Link href={`/Course/${course.courseId}`} className="block">
    <div className="w-full h-[200px] rounded-sm overflow-hidden">
      {course?.courseBanner ? (
        <Image
          src={course.courseBanner}
          width={400}
          height={200}
          className="w-full h-full object-cover"
          alt="course image"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gray-200">
          <span className="text-gray-500">No Image Available</span>
        </div>
      )}
    </div>
  </Link>
)}

      {/* 🟡 Course Details */}
      <div className="p-3">
        {/* 🔹 Course Name */}
        <div className="flex justify-between items-center">
          <h2 className="font-medium text-lg sm:text-xl flex items-center gap-2 truncate">
            📚 {course?.courseOutput?.Course?.Name}
          </h2>

          {/* 🔹 Dropdown Menu */}
        {!displayUser&&  <div className="flex-shrink-0">
            <DropdownOption handleOnDelete={handleOnDelete}>
              <HiMiniEllipsisVertical className="text-xl" />
            </DropdownOption>
          </div>}
        </div>

        {/* 🔹 Course Category */}
        <p className="text-sm text-gray-400">{course?.category}</p>

        <div className="grid grid-cols-2 gap-3 items-center mt-2">
          {/* 🔹 Number of Chapters */}
          <h2 className="flex items-center gap-2 text-sm sm:text-base">
            <FaBookOpen className="text-yellow-400" />
            {course?.courseOutput?.Course?.NoOfChapters} Chapters
          </h2>

          {/* 🔹 Course Level */}
          <h2 className="flex items-center gap-2 text-sm sm:text-base">
            <FaChartLine className="text-green-400" />
            {course?.level}
          </h2>
        </div>
   {displayUser&&     <div className="flex gap-2  item-center">
        <Image 
  src={course?.userProfileImage || "/default-user.png"} 
  width={30} 
  height={30}
  alt="User Profile Image"
  className="rounded-full mt-1"
/>
<h2 className="text-xs mt-2 items-center">
  {course?.userName}
</h2>
</div>}
      </div>
    </div>
  );
}

export default CourseCard;
