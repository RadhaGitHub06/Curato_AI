import React, { useContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../Components/ui/select";
import { Input } from "../../../Components/ui/input";
import { UserInputContext } from "../../_context/UserInputContext";
import { BackgroundGradient } from "../../../Components/ui/gradient-card";
function SelectOption() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const baseCardStyles =
    "backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-4 transition duration-300 hover:scale-[1.01] focus-within:ring-2 focus-within:ring-primary";

  const labelStyles = "mb-2 font-medium text-lg flex items-center gap-2";

  return (
    <div className="text-white px-5 md:px-20 lg:px-44">
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

        {/* Difficulty Level */}
       
        <div className={baseCardStyles}>
          <label className={labelStyles}>📊 Difficulty Level</label>
          <Select
            defaultValue={userCourseInput?.level}
            onValueChange={(value) => handleInputChange("level", value)}
          >
            <SelectTrigger className="w-full rounded-md bg-[#1f1f1f] border border-gray-600 text-white focus:ring-2 focus:ring-primary transition">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-[#051318] text-white">
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Course Duration */}

    
        <div className={baseCardStyles}>
          <label className={labelStyles}>⏱️ Course Duration</label>
          <Select
            defaultValue={userCourseInput?.duration}
            onValueChange={(value) => handleInputChange("duration", value)}
          >
            <SelectTrigger className="w-full rounded-md bg-[#1f1f1f] border border-gray-600 text-white focus:ring-2 focus:ring-primary transition">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-[#051318] text-white">
              <SelectItem value="1-Hour">1-Hour</SelectItem>
              <SelectItem value="2-Hours">2-Hours</SelectItem>
              <SelectItem value="More than 3-Hours">
                More than 3-Hours
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Add Videos */}
   
        <div className={baseCardStyles}>
          <label className={labelStyles}>🎥 Add Videos</label>
          <Select
            defaultValue={userCourseInput?.displayVideo}
            onValueChange={(value) => handleInputChange("displayVideo", value)}
          >
            <SelectTrigger className="w-full rounded-md bg-[#1f1f1f] border border-gray-600 text-white focus:ring-2 focus:ring-primary transition">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent className="bg-[#051318] text-white">
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Number of Chapters */}
     
        <div className={baseCardStyles}>
          <label className={labelStyles}>📚 Number of Chapters....(up to 5)</label>
          <Input
            type="number"
            onChange={(e) =>
              handleInputChange("noOfChapters", e.target.value)
            }
            defaultValue={userCourseInput?.noOfChapters}
            placeholder="Enter number"
            className="w-full p-3 rounded-md bg-[#1f1f1f] border border-gray-600 text-white focus:bg-white focus:text-black focus:ring-2 focus:ring-primary transition duration-300"
          />
        </div>
      
      </div>
   
    </div>
  );
}

export default SelectOption;
