import React from 'react';

function ChapterListCard({ chapter, index }) {
  return (
    <div
      className="text-white grid grid-cols-[auto_1fr] p-3 items-start gap-4 hover:bg-white/10 transition-all duration-300 rounded-md"
    >
      {/* Circle with index */}
      <div className="flex justify-center items-start pt-1">
        <div className="bg-white text-black h-8 w-8 md:h-9 md:w-9 flex items-center justify-center rounded-full shadow-md font-semibold text-sm">
          {index + 1}
        </div>
      </div>

      {/* Chapter info */}
      <div className="col-span-1">
        <h2 className="font-semibold text-sm md:text-base leading-tight text-white">
          {chapter?.ChapterName}
        </h2>
        <h3 className="flex items-center gap-2 text-xs text-[#79b8ff] mt-1 whitespace-nowrap">
          🕐 {chapter?.Duration || "Not available"}
        </h3>
      </div>
    </div>
  );
}

export default ChapterListCard;
