import React from 'react';

function ChapterListCard({ chapter, index }) {
  return (
    <div
      className="text-white flex items-start gap-4 p-3 hover:bg-white/10 transition-all duration-300 rounded-lg"
    >
      {/* Index circle */}
      <div className="flex-shrink-0 pt-1">
        <div className="bg-white text-black h-8 w-8 md:h-9 md:w-9 flex items-center justify-center rounded-full shadow-md font-semibold text-sm md:text-base">
          {index + 1}
        </div>
      </div>

      {/* Chapter info */}
      <div className="flex flex-col justify-start">
        <h2 className="font-semibold text-sm sm:text-base md:text-lg leading-tight text-white">
          {chapter?.ChapterName}
        </h2>
        <p className="flex items-center gap-2 text-xs sm:text-sm text-[#79b8ff] mt-1">
          🕐 {chapter?.Duration || 'Not available'}
        </p>
      </div>
    </div>
  );
}

export default ChapterListCard;
