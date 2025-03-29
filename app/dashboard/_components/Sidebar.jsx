"use client";
import React from "react";
import Image from "next/image";


import {
  HiOutlineHome,
  HiOutlinePower,
  HiOutlineShieldCheck,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "../../../Components/ui/progress";

function Sidebar() {
  const Menu = [
    { id: 1, name: "Home", icon: <HiOutlineHome />, path: "/dashboard" },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineSquare3Stack3D />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <HiOutlinePower />,
      path: "/dashboard/logout",
    },
  ];

  const path = usePathname(); // Return the current path name

  return (
    <div className=" fixed h-full md:w-64 p-5 shadow-xl shadow-gray-300  z-10">
      <div className="flex justify-center w-full">
    <Image src={"/heartgenie.svg"} width={170} height={150} alt="Logo" />
  </div>
      <hr className="my-2" />

      <ul>
        {Menu.map((item, index) => (
         <Link href={item.path}  key={item.id}>
         <li
            key={item.id}
            className={`flex items-center gap-3 text-gray-300 p-3 cursor-pointer hover:bg-gray-300 hover:text-black rounded-lg mb-2xl 
                        ${item.path === path ? "bg-gray-300 text-red-400" : ""}`}
          >
            <div className="text-2xl">{item.icon}</div>
            <h2>{item.name}</h2>
          </li>
        
         </Link> 
         
        ))}
      </ul>
      <hr className="my-2" />
     
<div className="absolute bottom-10 w-[80%]">

 <Progress value={80} className="h-6 bg-blue-200" /> 
<h2 className="text-sm my-2">3 out of 5 course completed</h2>
<h2 className="text-sx text-gray-500">Uprade your plan for unlimited course curation</h2>

</div>
 
    </div>
  );
}

export default Sidebar;
