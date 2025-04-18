import { cn } from "../../lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

export const HoverEffect = ({ items, className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10", className)}>
      {items.map((item, index) => (
        <div
          key={item.id} // Using the index or a unique identifier here
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <div
            className="flex flex-col items-center p-5 border rounded-xl 
              hover:border-primary hover:bg-red-300 cursor-pointer
              transition duration-300 ease-in-out"
            onClick={item.onClick}
          >
            <Image
              src={item.image}
              width={102}
              height={150}
              alt={item.title}
            />
            <h2 className="text-base sm:text-lg md:text-lg lg:text-lg mt-2">
              {item.title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};
