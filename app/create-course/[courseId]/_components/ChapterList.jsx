import React, { useState } from "react";
import { HiOutlineCheckCircle, HiOutlineClock } from "react-icons/hi2";
import { HiCheckCircle } from "react-icons/hi2";

function ChapterList({ course, edit = true }) {
  const [completed, setCompleted] = useState([]);

  const toggleComplete = (index) => {
    setCompleted((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const totalChapters = course?.courseOutput?.Course?.Chapters.length || 0;
  const completedCount = completed.length;
  const progressPercent = totalChapters
    ? Math.round((completedCount / totalChapters) * 100)
    : 0;

  return (
    <div>
      <h2 className="font-bold text-2xl text-[#618ebe] pt-10">Chapters</h2>

      {/* Progress Bar */}
      <div className="w-full bg-gray-800 rounded-full h-4 mt-4">
        <div
          className="bg-[#618ebe] h-4 rounded-full transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>
      <p className="text-right text-sm text-white mt-1">
        {completedCount}/{totalChapters} chapters completed
      </p>

      <div className="mt-4 space-y-4">
        {course?.courseOutput?.Course?.Chapters.map((chapter, index) => (
          <div
            key={chapter?.id || index}
            className="group p-5 rounded-xl bg-gradient-to-br from-[#051318] to-[#152c3d] shadow-md hover:shadow-lg transition-all duration-200 ease-in-out transform hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-6">
                <div className="bg-[#618ebe] flex-none h-10 w-10 text-white rounded-full flex items-center justify-center text-md font-semibold mt-1">
                  {index + 1}
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">
                    {chapter.ChapterName}
                  </h2>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {chapter.About}
                  </p>
                  <p className="flex gap-2 text-[#618ebe] items-center text-sm mt-1">
                    <HiOutlineClock className="text-base" />
                    {chapter.Duration}
                  </p>
                </div>
              </div>

              {/* Clickable Completion Icon */}
              {edit && (
                <button onClick={() => toggleComplete(index)}>
                  {completed.includes(index) ? (
                    <HiCheckCircle className="text-3xl text-[#618ebe] transition-colors duration-300" />
                  ) : (
                    <HiOutlineCheckCircle className="text-3xl text-gray-400 hover:text-[#618ebe] transition-colors duration-300" />
                  )}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChapterList;
