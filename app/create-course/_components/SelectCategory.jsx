import React, { useContext } from 'react'
import CategoryList from '../../_shared/CategoryList'
import Image from 'next/image'
import { UserInputContext } from '../../_context/UserInputContext'

function SelectCategory() {
  const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);

  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: category
    }));
  };

  return (
    <div className='px-5 md:px-20 text-white'>
      <h2 className='pb-5 text-lg md:text-2xl'>Select the Course Category</h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {CategoryList.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center p-5 border rounded-xl 
                        hover:border-primary hover:bg-red-300 cursor-pointer
                        transition duration-300 ease-in-out 
                        ${userCourseInput?.category === item.name ? 'border-primary bg-[#618ebe]' : ''}`}
            onClick={() => handleCategoryChange(item.name)}
          >
            <Image 
              src={item.icon} 
              width={102} 
              height={150} 
              alt={item.name}
            />
            <h2 className='text-base sm:text-lg md:text-lg lg:text-lg mt-2'>
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectCategory;
