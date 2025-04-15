"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import Orb from "./orb";

export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  

  return (
    <div className="max-w-7xl relative mx-auto px-4 py-10 sm:px-6 lg:px-8 text-white">
    <div className="w-full flex flex-col-reverse md:grid md:grid-cols-2 md:items-center md:gap-4">
      
      {/* Left Text Content */}
      <div className="text-left mt-6 md:mt-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          AI-powered
          <strong className="text-[#618ebe]"> personalized course </strong>
          curation
        </h1>
  
        <p className="mt-4 text-base sm:text-lg text-white">
          Unlock personalized education with AI-driven course creation. Tailor your learning journey to fit your goals and pace.
        </p>
  
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
        <Link
  href="/dashboard"
  className="inline-block text-center rounded border border-[#618ebe] bg-[#618ebe] px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#dc9325] cursor-pointer"
>
  Get Started
</Link>
          <a
            className="inline-block text-center rounded border border-gray-200 px-6 py-3 font-medium text-[#618ebe] shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
            href="#"
          >
            Learn More
          </a>
        </div>
      </div>
  
      {/* Right Image */}
      <div className="relative w-full max-w-[400px] h-[500px]">
        {/* Orb animation background */}
        <div className="absolute inset-4 z-0 -mt-8 scale-[1.4]">
          <Orb />
        </div>
  
        {/* Foreground Image */}
        <Image
          src="/education.svg"
          width={500}
          height={600}
          alt="education"
          className="relative z-10 w-full h-full drop-shadow-[0_0_40px_rgba(97,142,190,1)]"
        />
      </div>
    </div>
  </div>
  
  
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y:-20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative shrink-0">
      <Link href={product.link} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title} />
      </Link>
      <div
        className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2
        className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
