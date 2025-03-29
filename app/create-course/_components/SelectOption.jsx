import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../Components/ui/select";
import { Input } from "../../../Components/ui/input";
import { useContext } from "react";
import { UserInputContext } from "../../_context/UserInputContext";

function SelectOption() {
   const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
  const handleInputChange = (fieldName, value) => {
    setUserCourseInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <div className="text-white px-5 md:px-20 lg:px-44">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        
        {/* Difficulty Level */}
        <div className="flex flex-col">
          <label className="mb-2">📊 Difficulty Level</label>
          <Select 
          defaultValue={userCourseInput?.level}
          onValueChange={(value)=>handleInputChange('level',value)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Beginner">Beginner</SelectItem>
              <SelectItem value="Intermediate">Intermediate</SelectItem>
              <SelectItem value="Advance">Advance</SelectItem>
            </SelectContent>
          </Select>
        </div> 

        {/* Course Duration */}
        <div className="flex flex-col">
          <label className="mb-2">⏱️ Course Duration</label>
          <Select
          defaultValue={userCourseInput?.duration}
          onValueChange={(value)=>handleInputChange('duration',value)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-Hour">1-Hour</SelectItem>
              <SelectItem value="2-Hours">2-Hours</SelectItem>
              <SelectItem value="More than 3-Hours">More than 3-Hours</SelectItem>
            </SelectContent>
          </Select>
        </div> 

        {/* Add Videos */}
        <div className="flex flex-col">
          <label className="mb-2">🎥 Add Videos</label>
          <Select 
          defaultValue={userCourseInput?.displayVideo}
          onValueChange={(value)=>handleInputChange('displayVideo',value)}>
            <SelectTrigger className="w-[200px]">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Yes">Yes</SelectItem>
              <SelectItem value="No">No</SelectItem>
            </SelectContent>
          </Select>
        </div> 

        {/* Number of Chapters */}
        <div className="flex flex-col">
          <label className="mb-2">📚 Number of Chapters</label>
          <Input onChange={(event)=>handleInputChange('noOfChapters',event.target.value)  }
            type="number" 
            className="w-[200px] p-2 rounded-md border focus:ring-2 focus:ring-primary transition"
            defaultValue={userCourseInput?.noOfChapters} 
          />
        </div>
      </div>
    </div>
  );
}

export default SelectOption;
