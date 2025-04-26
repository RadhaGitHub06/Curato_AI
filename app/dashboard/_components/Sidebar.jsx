"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { HiOutlineHome, HiOutlinePower, HiOutlineShieldCheck, HiOutlineSquare3Stack3D } from "react-icons/hi2";
import ProgressBar from "./ProgressBar";
import { UserCourseList } from "../../_context/UserCourseList";
import { IconArrowLeft, IconBrandTabler, IconSettings, IconUserBolt } from "@tabler/icons-react";
import { motion } from "motion/react";
import { fromJSON } from "postcss";
import { Sidebar ,SidebarLink,SidebarBody} from "../../../Components/ui/sidebarcomp";
// SidebarDemo component code
function SidebarDemo() {
  const { userCourseL } = useContext(UserCourseList);
  const path = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <IconBrandTabler className="h-5 w-5 shrink-0text-neutral-200" />,
    },
    {
      label: "Explore",
      href: "/dashboard/explore",
      icon: <HiOutlineSquare3Stack3D className="h-5 w-5 shrink-0text-neutral-200" />,
    },
    {
      label: "Upgrade",
      href: "/dashboard/upgrade",
      icon: <HiOutlineShieldCheck className="h-5 w-5 shrink-0text-neutral-200" />,
    },
    {
      label: "Logout",
      href: "/",
      icon: <IconArrowLeft className="h-5 w-5 shrink-0 text-neutral-200" />,
    },
  ];

  const progress = Math.min((userCourseL?.length / 5) * 100, 100);

  return (
    <div className="flex w-full h-screen">
      <Sidebar open={open} setOpen={setOpen} className="  text-white">

        <SidebarBody className="justify-between gap-10 ">
           <Image src={'/education.svg'} width={150} height={150} alt="Logo" />
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <div className="mt-8 flex flex-col gap-2">
            {links.map((link, idx) => {
  const isActive = path === link.href;
  return (
    <SidebarLink
      key={idx}
      link={link}
      className={`flex items-center gap-2 p-2 rounded-lg transition-colors duration-300 ${
        isActive
          ? 'bg-blue-500 text-white'
          : 'hover:bg-gray-700 hover:text-white text-gray-300'
      }`}
    />
  );
})}

            </div>
          </div>
          <div
  className={`p-4 transition-all duration-300 ${
    open ? 'opacity-100 h-auto' : 'opacity-0 h-0 overflow-hidden'
  }`}
>
  <ProgressBar progress={progress} />
  <h2 className="text-sm my-2 text-white/80">
    {userCourseL?.length} out of 5 courses completed
  </h2>
  <p
    className="text-xs text-blue-400 underline cursor-pointer hover:text-blue-300"
    onClick={() => router.push("/dashboard/upgrade")}
  >
    Upgrade your plan for unlimited course curation
  </p>
</div>

        </SidebarBody>
      </Sidebar>

     
     
    </div>
  );
}

export default SidebarDemo;
