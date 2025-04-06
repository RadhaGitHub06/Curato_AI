import React from "react";
import { HiOutlineChartBar , HiOutlineClock ,HiOutlineBookOpen, HiOutlinePlayCircle} from "react-icons/hi2";

function CourseDetail({ course }) {
  return (
    <div className="border p-7 rounded-2xl shadow-sm shadow-[#618ebe] mt-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 ">
        <div className="flex gap-2">
          <HiOutlineChartBar className="text-4xl text-[#618ebe]" />
          <div>
            <h2 className="text-xs test-gray-500">Skill Level</h2>
            <h2 className="font-md text-lg">{course?.level}</h2>
          </div>
        </div>
        <div className="flex gap-2">
          < HiOutlineClock className="text-4xl text-[#618ebe]" />
          <div>
            <h2 className="text-xs test-gray-500">Duration</h2>
            <h2 className="font-md text-lg">{course?.courseOutput?.Course?.Duration}</h2>
          </div>
        </div>
        <div className="flex gap-2">
          <HiOutlineBookOpen className="text-4xl text-[#618ebe]" />
          <div>
            <h2 className="text-xs test-gray-500">No of Chapters</h2>
            <h2 className="font-md text-lg">{course?.courseOutput?.Course?.NoOfChapters}</h2>
        
          </div>
        </div>
        <div className="flex gap-2">
          <HiOutlinePlayCircle className="text-4xl text-[#618ebe]" />
          <div>
            <h2 className="text-xs test-gray-500">Video Included</h2>
            <h2 className="font-md text-lg">{course?.includeVideo}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
