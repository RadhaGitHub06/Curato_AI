"use client"
import React, { useEffect, useState } from 'react'
import db from '../../../../configs/db'
import { Chapters, courseList } from '../../../../configs/schema'
import { and, eq } from 'drizzle-orm'
import { useParams, useRouter } from 'next/navigation'
import ChapterListCard from './_components/ChapterListCard'
import ChpaterContent from './_components/ChpaterContent'
import { Menu, X } from 'lucide-react'

function CourseStart() {
  const params = useParams();
  const router = useRouter();
  const [selectedChapter, setSelectedChapter] = useState();
  const [chapterContent, setChapterContent] = useState();
  const [course, setCourse] = useState();
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [chapterIndex, setChapterIndex] = useState(0);

  useEffect(() => {
    GetCourse();
  }, []);

  const GetCourse = async () => {
    const result = await db.select().from(courseList)
      .where(eq(courseList?.courseId, params?.courseId));
    setCourse(result[0]);
  }

  const GetSelectedChapterContent = async (chapterId) => {
    const result = await db.select().from(Chapters)
      .where(and(
        eq(Chapters.chapterId, chapterId),
        eq(Chapters.courseId, course?.courseId)
      ));
    setChapterContent(result[0]);
  }

  const chapters = course?.courseOutput?.Course?.Chapters;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#051318] to-[#152c3d] overflow-hidden">
      {/* Radial Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,_#ffffff0a_1px,_transparent_0)] bg-[length:30px_30px]" />

      <div className='relative z-10 flex flex-col min-h-screen'>

        {/* Top Course Title */}
        

        <div className='flex flex-1'>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden fixed top-4 left-4 z-50">
            <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
              {isSidebarOpen ? <X className='w-7 h-7 text-white' /> : <Menu className='w-7 h-7 text-white' />}
            </button>
          </div>

          {/* Sidebar */}
          <div
  className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transform transition-transform duration-100 fixed md:static w-64  p-4 rounded-r-3xl shadow-lg shadow-black/30 z-40`}
  style={{
    position: 'fixed',   
    top: '0',             // Keep it at the top of the page when scrolling
    left: '0',            // Place it on the left side (or modify if necessary)
    height: '100vh',      // Full height of the viewport
    zIndex: 40,           // Keep it above other content
  }}
>
  <div
    className="space-y-4 pt-6"
    style={{
      height: 'calc(100vh - 100px)',  // Allow the content to be scrollable (adjust for any header or spacing)
      overflowY: 'auto',              // Make the inner content scrollable if needed
    }}
  >
    {chapters?.map((chapter, index) => (
      <div
        key={chapter.id || index}
        className={`cursor-pointer px-4 py-3 rounded-full transition-colors ${
          selectedChapter?.ChapterName === chapter?.ChapterName
            ? 'bg-gradient-to-r from-[#618ebe] to-[#335577] text-white shadow-md'
            : 'hover:bg-[#051318]'
        }`}
        onClick={() => {
          setSelectedChapter(chapter);
          GetSelectedChapterContent(index);
          setSidebarOpen(false);
          setChapterIndex(index);
        }}
      >
        <ChapterListCard chapter={chapter} index={index} />
      </div>
    ))}
  </div>
</div>


          {/* Main Content */}
          <div className="flex-1 p-6 lg:pl-[300px] sm:pl-[5px] overflow-y-auto">
          <div className="text-center py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg tracking-wide">
            {course?.courseOutput?.Course?.Name || "Loading..."}
          </h1>
        </div>
            <div className="bg-white/5 rounded-2xl p-6 shadow-md shadow-black/20 backdrop-blur-md">

              <ChpaterContent chapter={selectedChapter} content={chapterContent} />
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default CourseStart;
