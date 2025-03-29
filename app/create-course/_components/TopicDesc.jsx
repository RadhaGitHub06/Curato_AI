import React, { useContext } from "react";
import { Input } from "../../../Components/ui/input";
import { Textarea } from "../../../Components/ui/textarea";
import { UserInputContext } from "../../_context/UserInputContext";
function TopicDesc() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="text-white px-5 md:px-20 lg:px-44 text-base sm:text-lg md:text-lg lg:text-lg ">
      {/* Topic Section */}
      <div className="mt-5 text-base md:text-lg">
        <label className="block mb-2 ">
          📝 Write the topic for which you want to generate a course
          <span className="text-gray-400">
            (e.g., Python, Machine Learning, Dance, Yoga)
          </span>
          :
        </label>
        <Input
          placeholder="Enter Topic"
          className="w-full p-3 rounded-md border focus:ring-2 focus:ring-primary transition"
          onChange={(e) => handleInputChange("topic", e.target.value)}
          defaultValue={userCourseInput?.topic}        
        />
      </div>

      {/* Description Section */}
      <div className="mt-8 pb-10">
        <label className="block mb-2">
          💡 <span className="font-semibold">Optional:</span> Tell us more about
          the course you want to include
        </label>
        <Textarea
          placeholder="About your course"
          className="w-full p-3 rounded-md border focus:ring-2 focus:ring-primary transition"
          onChange={(e) => handleInputChange("description", e.target.value)}
          defaultValue={userCourseInput?.description}      
       />
      </div>
    </div>
  );
}

export default TopicDesc;
