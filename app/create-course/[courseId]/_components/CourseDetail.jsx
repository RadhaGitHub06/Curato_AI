import React from "react";
import {
  HiOutlineChartBar,
  HiOutlineClock,
  HiOutlineBookOpen,
  HiOutlinePlayCircle,
} from "react-icons/hi2";

function CourseDetail({ course }) {
  const info = [
    {
      icon: HiOutlineChartBar,
      label: "Skill Level",
      value: course?.level || "-",
    },
    {
      icon: HiOutlineClock,
      label: "Duration",
      value: course?.courseOutput?.Course?.Duration || "-",
    },
    {
      icon: HiOutlineBookOpen,
      label: "No of Chapters",
      value: course?.courseOutput?.Course?.NoOfChapters || "-",
    },
    {
      icon: HiOutlinePlayCircle,
      label: "Video Included",
      value: course?.includeVideo || "-",
    },
  ];

  return (
    <div className="p-6 rounded-2xl border-none  mt-6 bg-gradient-to-br from-[#051318] to-[#152c3d] transition-all duration-500 ease-in-out animate-fade-in">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {info.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
            key={idx}
            className="group flex items-center justify-center gap-4 p-4 rounded-xl transition-transform duration-100 ease-out hover:scale-[1.2] will-change-transform"
          >
              <Icon className="text-3xl text-[#618ebe] group-hover:scale-110 transform transition-transform duration-300" />
              <div>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-all">{item.label}</p>
                <p className="tex t-lg font-semibold text-white">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CourseDetail;
