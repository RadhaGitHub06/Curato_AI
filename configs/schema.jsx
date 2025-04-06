
import { json, serial, varchar, pgTable , boolean, integer } from "drizzle-orm/pg-core";

export const courseList = pgTable('courses', {
    id: serial('id').primaryKey(),
    courseId: varchar('courseId').notNull(),
    name: varchar('name').notNull(),
    category: varchar('category').notNull(),
    level: varchar('level').notNull(),
    includeVideo:varchar('includeVideo').notNull().default('yes'),
    courseOutput: json('courseOutput').default({}),   // Safer default JSON
    createdBy: varchar('createdBy').notNull(),
    userName: varchar('userName'),
    userProfileImage: varchar('userProfileImage'),
    courseBanner:varchar('courseBanner').default('/uploaded.svg'),
    publish: boolean('publish').default(false) 
});

export const Chapters=pgTable('chapters',{
    id:serial('id').primaryKey(),
    courseId: varchar('courseId').notNull(),
    chapterId: integer('chapterId').notNull(),
    content: json('content').notNull(),
    VideoId: varchar('VideoId').notNull()
   
})