// import React, { useContext } from "react";
// import { Input } from "../../../Components/ui/input";
// import { Textarea } from "../../../Components/ui/textarea";
// import { UserInputContext } from "../../_context/UserInputContext";
// function TopicDesc() {
//   const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
//   const handleInputChange = (fieldName, value) => {
//     setUserCourseInput((prev) => ({
//       ...prev,
//       [fieldName]: value,
//     }));
//   };

//   return (
//     <div className="text-white px-5 md:px-20 lg:px-44 text-base sm:text-lg md:text-lg lg:text-lg ">
//       {/* Topic Section */}
//       <div className="mt-5 text-base md:text-lg">
//         <label className="block mb-2 ">
//           📝 Write the topic for which you want to generate a course
//           <span className="text-gray-400">
//             (e.g., Python, Machine Learning, Dance, Yoga)
//           </span>
//           :
//         </label>
//         <Input
//           placeholder="Enter Topic"
//           className="w-full p-3 rounded-md border focus:ring-2 focus:ring-primary transition"
//           onChange={(e) => handleInputChange("topic", e.target.value)}
//           defaultValue={userCourseInput?.topic}        
//         />
//       </div>

//       {/* Description Section */}
//       <div className="mt-8 pb-10">
//         <label className="block mb-2">
//           💡 <span className="font-semibold">Optional:</span> Tell us more about
//           the course you want to include
//         </label>
//         <Textarea
//           placeholder="About your course"
//           className="w-full p-3 rounded-md border focus:ring-2 focus:ring-primary transition"
//           onChange={(e) => handleInputChange("description", e.target.value)}
//           defaultValue={userCourseInput?.description}      
//        />
//       </div>
//     </div>
//   );
// }

// export default TopicDesc;
"use client";
import React, { useContext } from "react";
import { Textarea } from "../../../Components/ui/textarea";
import { UserInputContext } from "../../_context/UserInputContext";
import { PlaceholdersAndVanishInput } from "../../../Components/ui/Placeholder";

function TopicDesc() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const placeholders = [
    "Python for beginners",
    "Mastering Machine Learning",
    "Yoga for stress relief",
    "How to dance like a pro",
    "Web Development Bootcamp"
  ];

  return (
    <div className="text-white px-5 md:px-20lg:px-44 text-base sm:text-lg md:text-lg lg:text-lg">
      {/* Topic Section with Placeholder Animation */}
      <div className="mt-5 text-base  flex items-center justify-center flex-col md:text-lg">
        <label className="block mb-2 ">
          📝 Write the topic for which you want to generate a course
          {/* <span className="text-gray-400">
            (e.g., Python, Machine Learning, Dance, Yoga)
          </span> */}
          :
        </label>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={(e) => handleInputChange("topic", e.target.value)}
        />
      </div>

      {/* Description Section */}
      <div className="mt-8 pb-10  flex items-center justify-center flex-col">
        <label className="block mb-2">
          💡 <span className="font-semibold">Optional:</span> Tell us more about
          the course you want to include
        </label>
        <Textarea
          placeholder="About your course"
  className="lg:w-xl px-4 py-3 rounded-full bg-zinc-800 hover:bg-white hover:text-black transition duration-300  text-white border-none focus:outline-none  placeholder:text-gray-400 transition duration-300"
          onChange={(e) => handleInputChange("description", e.target.value)}
          defaultValue={userCourseInput?.description}
        />
      </div>
    </div>
  );
}

export default TopicDesc;
