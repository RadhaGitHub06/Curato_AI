"use client";
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  HiOutlineHome,
  HiOutlinePower,
  HiOutlineShieldCheck,
  HiOutlineSquare3Stack3D,
} from "react-icons/hi2";
import ProgressBar from "./ProgressBar";
import { UserCourseList } from "../../_context/UserCourseList";

function Sidebar() {
  const { userCourseL } = useContext(UserCourseList);
  const path = usePathname();
  const router = useRouter();

  const Menu = [
    { id: 1, name: "Home", icon: <HiOutlineHome />, path: "/dashboard" },
    { id: 2, name: "Explore", icon: <HiOutlineSquare3Stack3D />, path: "/dashboard/explore" },
    { id: 3, name: "Upgrade", icon: <HiOutlineShieldCheck />, path: "/dashboard/upgrade" },
    { id: 4, name: "Logout", icon: <HiOutlinePower />, path: "/" },
  ];

  const progress = Math.min((userCourseL?.length / 5) * 100, 100);

  return (
    <div className="fixed h-screen w-64 p-5 flex flex-col justify-between bg-black border-r border-white/10 z-50">
      {/* Top: Logo and Menu */}
      <div>
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Image src="/heartgenie.svg" width={170} height={150} alt="Logo" />
        </div>
        <hr className="my-2 border-white/10" />

        {/* Menu Items */}
        <ul>
          {Menu.map((item) => (
            <Link href={item.path} key={item.id}>
              <li
                className={`flex items-center gap-3 p-3 mt-2 rounded-lg cursor-pointer transition-all duration-200
                hover:bg-white/20 hover:scale-[1.03] text-sm
                ${item.path === path ? "bg-white/30 text-red-400" : "text-white/80"}`}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
              </li>
            </Link>
          ))}
        </ul>
      </div>

      {/* Bottom: Progress */}
      <div className="mt-6">
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
    </div>
  );
}

export default Sidebar;
