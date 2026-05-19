

"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation"; // ✅ Use the correct router import
import { useUser } from "@clerk/nextjs";
import CourseBasicInfo from "./_components/CourseBasicInfo";
import CourseDetail from "./_components/CourseDetail";
import ChapterList from "./_components/ChapterList";
import { Button } from "../../../Components/ui/button";
import { GenerateChapterContent_Ai } from "../../../configs/AiModel";
import LoadingDialog from "../_components/LoadingDialog";
import service from "../../../configs/service";
import { getCourseByCourseId, insertChapterRecord, publishCourseByCourseId } from "../../actions/courseActions";

function parseModelJson(responseText) {
  if (!responseText) {
    throw new Error("Empty model response");
  }

  const trimmedText = String(responseText).trim();

  try {
    return JSON.parse(trimmedText);
  } catch (error) {
    const match = trimmedText.match(/\{[\s\S]*\}|\[[\s\S]*\]/);

    if (!match) {
      throw error;
    }

    return JSON.parse(match[0]);
  }
}

function CourseLayout() {
  const { user } = useUser();
  const params = useParams();
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (params && user) {
      GetCourse();
    }
  }, [params, user]);

  const GetCourse = async () => {
    try {
      const result = await getCourseByCourseId(params?.courseId, user?.primaryEmailAddress?.emailAddress);
      setCourse(result);
      console.log("Course Data:", result);
    } catch (error) {
      console.error("Error fetching course:", error);
    }
  };

  const GenerateChapterContent = async () => {
    setLoading(true);

    const chapters = course?.courseOutput?.Course?.Chapters;

    if (!chapters || chapters.length === 0) {
      console.warn("No chapters found.");
      setLoading(false);
      return;
    }

    try {
      const promises = chapters.map(async (chapter, index) => {
      
          const PROMPT = `Explain the concept in Detail on Topic: ${course?.name}, Chapter: ${chapter?.ChapterName} for the content ${chapter?.About} in JSON Format with fields as title, explanation, and code example (Code field in <precode> format) if applicable`;

          console.log(`Generating for Chapter ${index + 1}:`, PROMPT);

          let content = {};
          let videoId = "";

          try {
            const result = await GenerateChapterContent_Ai.sendMessage(PROMPT);
            const responseText = result?.response?.text();

            // ✅ Parse JSON with error handling
            try {
              content = parseModelJson(responseText);
            } catch (error) {
              console.error(`Invalid JSON response for Chapter ${index + 1}:`, error);
              content = { title: "Error", explanation: "Invalid content format" };
            }

            // ✅ Fetch YouTube videos with error handling
            try {
              const resp = await service.getVideos(course?.name + ":" + chapter?.ChapterName);
              videoId = resp[0]?.id?.videoId || "";
            } catch (error) {
              console.error("Failed to fetch video:", error);
            }

            // ✅ Save chapter content + video URL to DB
            await insertChapterRecord({
              chapterId: index,
              courseId: course?.courseId,
              content: content,
              videoId,
            });

          } catch (error) {
            console.error(`Error generating content for Chapter ${index + 1}:`, error);
          }
        
      });

      await Promise.all(promises);
await publishCourseByCourseId(course?.courseId)
     
      // ✅ Navigate after all chapters are generated
      router.replace(`/create-course/${course?.courseId}/finish`);

    } catch (error) {
      console.error("Error during content generation:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-white mt-10 px-7 md:px-20 lg:px-44">
      <h2 className="font-bold text-center text-2xl">Curated Course</h2>
      <LoadingDialog loading={loading} />

      {/* Basic Info */}
      <CourseBasicInfo course={course} edit={true} refreshData={() => GetCourse()} />
      <Button
  onClick={GenerateChapterContent}
  className="my-10 px-6 py-3 bg-white text-black text-xl font-semibold rounded-2xl shadow-md hover:bg-[#618ebe] hover:text-white hover:scale-105 transition-all duration-300 ease-in-out border border-gray-300"
>
  Generate Course Content
</Button>
      {/* Course Details */}
      <CourseDetail course={course} />

      {/* Chapter */}
      <ChapterList course={course} />
      
    </div>
  );
}

export default CourseLayout;
