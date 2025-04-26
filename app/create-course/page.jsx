"use client"
import React, { useEffect, useState ,useContext} from 'react'
import { HiClipboardDocumentCheck, HiLightBulb, HiMiniSquares2X2 } from 'react-icons/hi2'
import { Button } from '../../Components/ui/button'
import SelectCategory from './_components/SelectCategory'
import TopicDesc from './_components/TopicDesc'
import SelectOption from './_components/SelectOption'
import { UserInputContext } from '../_context/UserInputContext'
import { GenerateCourseLayout_Ai } from '../../configs/AiModel'
import LoadingDialog from './_components/LoadingDialog'
import { courseList } from '../../configs/schema'
import uuid4 from 'uuid4'
import { useUser } from '@clerk/nextjs'
import db from '../../configs/db'
import { useRouter } from 'next/navigation'




function Createcourse() {
    const StepperOptions=[
        {
            id:1,
            name:'Category',
            icon: <HiMiniSquares2X2/>
        },
        {
            id:2,
            name:'Topics & Desc',
            icon: <HiLightBulb/>
        },
        {
            id:3,
            name:'Options',
            icon: <HiClipboardDocumentCheck/>
        },
    ]
  
      const { userCourseInput, setUserCourseInput } = useContext(UserInputContext);
     const [loading,setLoading]=useState(false);
      const[activeindex,setactiveindex]=useState(0);
 const {user}=useUser();
 const router=useRouter();

    useEffect(()=>{
  console.log(userCourseInput);
 },[userCourseInput])
   
//  check next button is enabled or desable
 const checkStatus=()=>{
    if(userCourseInput?.length==0){
      return true;
    }if(activeindex==0&& (userCourseInput?.category?.length==0|| userCourseInput?.category==undefined)){
      return true;
    }if(activeindex==1 &&(userCourseInput?.topic?.length==0 ||userCourseInput?.topic==undefined)){
      return true;
    }else if(activeindex==2 && (userCourseInput?.level==undefined|| userCourseInput?.duration==undefined||userCourseInput?.displayVideo==undefined|| userCourseInput?.noOfChapters==undefined)){
      return true;
    }
    return false;
 }

 const GenerateCourseLayout=async()=>{
  setLoading(true)
  const BASIC_PROMPT='generate A Course Tutorial on Following Detail with field as Course which has Name, Description , Along with Chapter Name , About , Duration :'
 const USER_INPUT_PROMPT=' Category:'+userCourseInput?.category+' , Topic:'+userCourseInput?.topic+',Level:'+userCourseInput?.level+', Duration:'+userCourseInput?.duration+',NoOfChapters:'+userCourseInput?.noOfChapters+', in JSON format'
const FINAL_PROMPT=BASIC_PROMPT+USER_INPUT_PROMPT;
console.log(FINAL_PROMPT);
const result=await GenerateCourseLayout_Ai.sendMessage(FINAL_PROMPT);
  console.log(result.response?.text());
  console.log(JSON.parse(result.response?.text()));
  setLoading(false);
  SaveCourseLayoutInDb(JSON.parse(result.response?.text()));
 }



const SaveCourseLayoutInDb = async (courseLayout) => {
    const id = uuid4();
    setLoading(true);
    
    try {
        const result = await db.insert(courseList).values({
            courseId: id,
            name: userCourseInput?.topic,
            level: userCourseInput?.level,
            category: userCourseInput?.category,
            courseOutput: courseLayout,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            userName: user?.fullName,
            userProfileImage: user?.imageUrl
        });

        console.log("Data inserted:", result);
       
    } catch (error) {
        console.error("Error inserting data:", error);
    } finally {
        setLoading(false);
        router.replace('/create-course/'+id)
    }
};

  return (
    <div  className=''>
     {/* stepper */}
     <div className='flex flex-col justify-center items-center'>
      <h2 className='text-4xl  pb-[30px] font-bold  text-white bg-clip-text animate-gradient bg-[length:200%_200%]"'>
      Create Course
      </h2>
    {/* <div className='flex'>
    {StepperOptions.map((item, index) => (
        <div className='flex items-center' key={item.id}> 
            <div className='flex flex-col items-center w-[50px] md:w-[100px]'>
                <div className={`text-2xl p-2 rounded-full bg-[#618ebe] 
                    ${activeindex >= index && 'bg-red-300'}`}>
                    {item.icon}
                </div>
                <h2 className='hidden md:block md:text-sm text-white'>{item.name}</h2>
            </div>
            {index !== StepperOptions.length - 1 && (
                <div 
                    className={`h-1 w-[50px] md:w-[100px] rounded-full lg:w-[170px] bg-[#618ebe]
                    ${activeindex - 1 >= index && 'bg-red-300'}`}>
                </div>
            )}
        </div>
    ))} 

</div> */}

     </div>
<div className='px-10 md:px-20 lg:px-44 mt-10'>
     {/* components */}
{activeindex==0?<SelectCategory/> :activeindex==1?<TopicDesc/>:<SelectOption/>}
     {/* next previous button */}
     <div className="flex justify-between mt-10 px-4">

{/* Previous Button */}
<Button
  disabled={activeindex === 0}
  onClick={() => setactiveindex(activeindex - 1)}
  className={`px-6 py-2 text-lg font-semibold rounded-md border backdrop-blur-md transition-all duration-300 shadow-md 
    ${
      activeindex === 0 
        ? 'bg-zinc-400/30 text-white cursor-not-allowed border-zinc-200' 
        : 'bg-white/10 hover:bg-white/20 text-white border-white hover:shadow-[0_0_10px_rgba(192,132,252,0.6)]'
    }`}
>
  Previous
</Button>

{/* Next Button */}
{activeindex < 2 && (
  <Button
    disabled={checkStatus()}
    onClick={() => setactiveindex(activeindex + 1)}
    className={`px-6 py-2 text-lg font-semibold rounded-md border backdrop-blur-md transition-all duration-300 shadow-md 
      ${
        checkStatus()
          ? 'bg-zinc-400/30 text-white cursor-not-allowed border-zinc-200'
          : 'bg-gradient-to-r from-[#618ebe] to-[#051318] hover:from-[#051318] hover:to-[#618ebe] text-white border-white hover:shadow-[0_0_14px_rgba(232,121,249,0.6)]'
      }`}
  >
    Next
  </Button>
)}

{/* Generate Button */}
{activeindex === 2 && (
  <Button
    disabled={checkStatus()}
    onClick={() => GenerateCourseLayout()}
    className={`px-6 py-2 text-lg font-semibold rounded-md border backdrop-blur-md transition-all duration-300 shadow-md 
      ${
        checkStatus()
          ? 'bg-zinc-400/30 text-white cursor-not-allowed border-zinc-200'
          : 'bg-gradient-to-r from-[#618ebe] to-[#051318] hover:from-[#051318] hover:to-[#618ebe] text-white border-white hover:shadow-[0_0_16px_rgba(236,72,153,0.7)]'
      }`}
  >
    Generate Course Layout
  </Button>
)}
</div>


     </div>
         <LoadingDialog loading={loading} />
   
    </div>
  )
}

export default Createcourse
