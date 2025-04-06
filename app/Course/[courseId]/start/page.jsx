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
    //setSelectedChapter(result[0]?.courseOutput?.Course?.Chapters[0]);
    //GetSelectedChapterContent(0);
    //setChapterIndex(0);
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
 // const isLastChapter = chapterIndex === chapters?.length - 1;
  const handleGoToDashboard = () => {
    router.push('/dashboard');
  };

  return (
    <div className='text-white flex'>
      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <X className='w-6 h-6 text-white' /> : <Menu className='w-6 h-6 text-white' />}
        </button>
      </div>

      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'block' : 'hidden'} md:block fixed md:w-64 h-screen bg-gray-300/10 border-r shadow-lg shadow-gray-500 z-40`}> 
        <h2 className='font-medium text-2xl text-[#618ebe] bg-white p-3 rounded-b-lg '>
          {course?.courseOutput?.Course?.Name}
        </h2>
        <div className='pt-10 overflow-y-auto h-[calc(100%-100px)]'>
          {course?.courseOutput?.Course?.Chapters.map((chapter, index) => (
            <div
              key={chapter.id || index}
              className={`cursor-pointer rounded-full hover:bg-black ${
                selectedChapter?.ChapterName === chapter?.ChapterName ? 'bg-black' : ''
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

      {/* Content Section */}
      <div className='flex-1 md:ml-64 '>
        <ChpaterContent chapter={selectedChapter} content={chapterContent} />
        {/* {isLastChapter && (
          <div className="text-center mt-10 bg-blue-800/40 p-6 rounded-lg shadow-lg border border-blue-300">
            <h1 className="text-3xl font-bold text-white mb-4">🎉 Hurray! You completed the course!</h1>
            <button
              onClick={handleGoToDashboard}
              className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-green-600 transition"
            >
              Go to Dashboard
            </button>
          </div>
        )} */}
      </div>
      
    </div>
  )
}

export default CourseStart
