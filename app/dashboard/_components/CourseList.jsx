"use client";
import React, { useContext, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import CourseCard from "./CourseCard";
import { UserCourseList } from "../../_context/UserCourseList";
import LoadingDialog from "../../create-course/_components/LoadingDialog";
import { getCoursesByOwner } from "../../actions/courseActions";

function CourseList() {
    const [courseList, setCourseList] = useState([]);
    const { userCourseL, setUserCourseL } = useContext(UserCourseList);
    const [loading, setLoading] = useState(false);
    const { user } = useUser();

    useEffect(() => {
        if (user) getUserCourse();
    }, [user]);

    const getUserCourse = async () => {
        setLoading(true);
        try {
            const result = await getCoursesByOwner(user?.primaryEmailAddress?.emailAddress);

            console.log("Fetched Courses:", result);
            setCourseList(result);
            setUserCourseL(result);
        } catch (error) {
            console.error("Error fetching courses:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-white mt-15">
            <h2 className="font-bold text-lg text-[#618ebe] mb-4">My AI Courses</h2>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    {[1, 2, 3, 4, 5].map((item, index) => (
                        <div key={index} className="w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[270px]" />
                    ))}
                </div>
            ) : courseList.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5">
                    {courseList.map((course, index) => (
                        <CourseCard course={course} key={index} refreshData={getUserCourse} />
                    ))}
                </div>
            ) : (
                <div className="text-gray-400 italic mt-4">You haven’t created any courses yet.</div>
            )}
        </div>
    );
}

export default CourseList;
