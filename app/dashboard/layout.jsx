"use client";
import React, { useState } from "react";
import Sidebar from "./_components/Sidebar";
import Header from "./_components/Header";
import { FiMenu, FiX } from "react-icons/fi";
import { UserCourseList } from "../_context/UserCourseList";

function DashboardLayout({ children }) {
  const [userCourseL, setUserCourseL] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <UserCourseList.Provider value={{ userCourseL, setUserCourseL }}>
      <div className="flex relative bg-gradient-to-br from-[#0f2027] min-h-screen overflow-hidden">
        {/* 🔷 Honeycomb Background Animation */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,_#ffffff0a_1px,_transparent_0)] bg-[length:30px_30px] animate-honeycomb" />

        {/* 🟢 Sidebar */}
        <div
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-black text-white transition-transform transform 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:relative md:translate-x-0 md:w-20`}
        >
          <div className="absolute top-4 right-4 md:hidden">
            <button onClick={() => setIsSidebarOpen(false)} className="text-white text-2xl">
              <FiX />
            </button>
          </div>
          <Sidebar />
        </div>

        {/* 🟢 Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* 🟢 Main Content */}
        <div className="flex-1 md:ml-64 p-4 relative z-10">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="md:hidden p-3 text-white bg-gray-800 rounded-lg focus:outline-none"
          >
            <FiMenu size={24} />
          </button>
          <Header />
          <div className="p-4">{children}</div>
        </div>
      </div>
    </UserCourseList.Provider>
  );
}

export default DashboardLayout;
