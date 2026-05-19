"use server";

import db from "../../configs/db";
import { Chapters, courseList } from "../../configs/schema";
import { and, eq } from "drizzle-orm";

function buildDefaultCourseBanner(courseData) {
  const topic = String(courseData?.name || "course").trim();
  const category = String(courseData?.category || "education").trim();
  const prompt = `clean modern course thumbnail for ${topic}, ${category}, educational, high quality, no text overlay`;
  const encodedPrompt = encodeURIComponent(prompt);

  return `/api/course-thumbnail?prompt=${encodedPrompt}`;
}

export async function createCourseRecord(courseData) {
  await db.insert(courseList).values({
    ...courseData,
    courseBanner: courseData?.courseBanner || buildDefaultCourseBanner(courseData),
  });
}

export async function getCourseByCourseId(courseId, createdBy) {
  if (!courseId) return null;

  const filters = [eq(courseList.courseId, courseId)];

  if (createdBy) {
    filters.push(eq(courseList.createdBy, createdBy));
  }

  const result = await db
    .select()
    .from(courseList)
    .where(filters.length > 1 ? and(...filters) : filters[0])
    .limit(1);

  return result[0] ?? null;
}

export async function getCoursesByOwner(createdBy) {
  if (!createdBy) return [];

  return db.select().from(courseList).where(eq(courseList.createdBy, createdBy));
}

export async function getPaginatedCourses(limit, offset) {
  return db.select().from(courseList).limit(limit).offset(offset);
}

export async function updateCourseBannerById(id, bannerUrl) {
  if (!id) return;

  await db.update(courseList).set({ courseBanner: bannerUrl }).where(eq(courseList.id, id));
}

export async function updateCourseBasicInfoById(id, name, description) {
  if (!id) return;

  const result = await db.select().from(courseList).where(eq(courseList.id, id)).limit(1);
  const currentCourse = result[0];

  if (!currentCourse) return;

  const updatedCourseOutput = structuredClone(currentCourse.courseOutput ?? {});

  if (updatedCourseOutput?.Course) {
    updatedCourseOutput.Course.Name = name;
    updatedCourseOutput.Course.Description = description;
  }

  await db
    .update(courseList)
    .set({ courseOutput: updatedCourseOutput })
    .where(eq(courseList.id, id));
}

export async function deleteCourseByIdAndCourseId(id, courseId) {
  if (courseId) {
    await db.delete(Chapters).where(eq(Chapters.courseId, courseId));
  }

  if (id) {
    await db.delete(courseList).where(eq(courseList.id, id));
  }
}

export async function insertChapterRecord({ courseId, chapterId, content, videoId }) {
  await db.insert(Chapters).values({
    courseId,
    chapterId,
    content,
    VideoId: videoId,
  });
}

export async function publishCourseByCourseId(courseId) {
  if (!courseId) return;

  await db.update(courseList).set({ publish: true }).where(eq(courseList.courseId, courseId));
}

export async function getChapterByCourseIdAndChapterId(courseId, chapterId) {
  if (!courseId && chapterId === undefined) return null;

  const result = await db
    .select()
    .from(Chapters)
    .where(and(eq(Chapters.courseId, courseId), eq(Chapters.chapterId, chapterId)))
    .limit(1);

  return result[0] ?? null;
}