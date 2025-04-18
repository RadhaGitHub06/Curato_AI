"use client";
import React, { useState } from 'react';
import Header from '../dashboard/_components/Header';
import { UserInputContext } from '../_context/UserInputContext';

function Createcourselayout({ children }) {
  const [userCourseInput, setUserCourseInput] = useState([]);

  return (
    <UserInputContext.Provider value={{ userCourseInput, setUserCourseInput }}>
      <div className="relative min-h-screen bg-[#051318] pattern-grid text-white overflow-hidden">

        {/* Gradient overlay: gray in center, black edges */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-radial" />

        {/* Main Content */}
        <div className="relative z-10">
          <Header />
          <div className="mt-4">
            {children}
          </div>
        </div>
      </div>
    </UserInputContext.Provider>
  );
}

export default Createcourselayout;
