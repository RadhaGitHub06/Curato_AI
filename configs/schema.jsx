// import { json, pgSchema, serial, varchar } from "drizzle-orm/pg-core";

// // Define schema with `pgSchema` for compatibility
// export const courseList = pgSchema('courseList').table('courses', {
//     id: serial('id').primaryKey(),
//     courseId: varchar('courseId').notNull(),
//     name: varchar('name').notNull(),
//     category: varchar('category').notNull(),
//     level: varchar('level').notNull(),
//     courseOutput: json('courseOutput').default({}),   // Safer default JSON
//     createdBy: varchar('createdBy').notNull(),
//     userName: varchar('userName'),
//     userProfileImage: varchar('userProfileImage')
// });
import { json, pgSchema, serial, varchar } from "drizzle-orm/pg-core";

// Define schema with `pgSchema` for compatibility
export const courseList = pgSchema('courseList').table('courses', {
    id: serial('id').primaryKey(),
    courseId: varchar('courseId').notNull(),
    name: varchar('name').notNull(),
    category: varchar('category').notNull(),
    level: varchar('level').notNull(),
    courseOutput: json('courseOutput').default({}),   // Safer default JSON
    createdBy: varchar('createdBy').notNull(),
    userName: varchar('userName'),
    userProfileImage: varchar('userProfileImage')
});
