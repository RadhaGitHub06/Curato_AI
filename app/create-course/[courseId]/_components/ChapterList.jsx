import React from "react";
import { HiOutlineCheckCircle, HiOutlineClock } from "react-icons/hi2";

function ChapterList({ course , edit=true }) {
  return (
    <div>
      <h2 className="font-bold text-2xl text-[#618ebe] pt-10">Chapters</h2>
      <div className="mt-2">
        {course?.courseOutput?.Course?.Chapters.map((chapter, index) => (
          <div key={chapter?.id || index} className="border p-5 rounded-lg mb-2 flex items-center justify-between">
            <div className="flex gap-10 items-center">
              <h2 className="bg-[#618ebe] flex-none h-10 w-10 text-white rounded-full text-center mt-2 pt-2">
                {index + 1}
              </h2>
              <div className="gap-10">
                <h2 className="font-md text-lg">{chapter.ChapterName}</h2>
                <p className="text-sm text-gray-500">{chapter.About}</p>
                <p className="flex gap-3 text-[#618ebe] items-center">
                  <HiOutlineClock />
                  {chapter.Duration}
                </p>
              </div>
            </div>
            <HiOutlineCheckCircle className="text-4xl text-gray-400 flex-none" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
