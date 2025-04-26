

import React, { useContext } from 'react';
import CategoryList from '../../_shared/CategoryList';
import Image from 'next/image';
import { UserInputContext } from '../../_context/UserInputContext';
import { BackgroundGradient } from '../../../Components/ui/gradient-card';

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
      <h2 className='pb-5 text-lg md:text-2xl text-center font-bold text-[#f0f4f8]'>
        Select the Course Category
      </h2>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {CategoryList.map((item) => (
          <BackgroundGradient className="rounded-[22px] p-2 sm:p-1 dark:bg-zinc-900" key={item.name}>
            <div
              className={`flex flex-col items-center p-5 border rounded-xl 
                          hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out
                          cursor-pointer
                          ${userCourseInput?.category === item.name ? 'border-primary bg-[#051c34]' : 'border-transparent bg-[#1c1c1c]'}`}
              onClick={() => handleCategoryChange(item.name)}
            >
              {/* Category Icon */}
              <Image
                src={item.icon}
                width={102}
                height={150}
                alt={item.name}
                className="rounded-md"
              />
              <h2 className='text-base sm:text-lg md:text-lg lg:text-lg mt-2 text-center text-[#f0f4f8]'>
                {item.name}
              </h2>
            </div>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
}

export default SelectCategory;
