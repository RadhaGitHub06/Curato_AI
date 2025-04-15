"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { FileText, Sliders, BookOpen, MessageCircle } from 'lucide-react'
import { Github, Linkedin, Mail } from 'lucide-react';
import { HeroParallax } from '../../Components/ui/Hero-parallax'
import Link from 'next/link'
import SpotlightCard from '../../Components/ui/cards'
import Orb from '../../Components/ui/orb'
import { SparklesCore } from '../../Components/ui/sparkles'
import Heading from './heading'

function Hero() {
  const router = useRouter()

  return (
    <div className="max-w-full relative mx-auto px-4  sm:px-6 lg:px-8 text-white">
  
       <section className=" lg:grid lg:h-screen lg:place-content-center ">
      
        <div className="mx-auto w-screen max-w-screen-xl px-4 py-10 sm:px-6 sm:py-10 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:py-32 ">
        
          <div className="max-w-prose text-left">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              AI-powered
              <strong className="text-[#618ebe]"> personalized course </strong>
              curation
            </h1>

            <p className="mt-4 text-base text-pretty text-white sm:text-lg/relaxed">
              Unlock personalized education with AI-driven course creation. Tailor your learning journey to fit your goals and pace.
            </p>

            <div className="mt-4 flex gap-4 sm:mt-6">
              <a
                className="inline-block rounded border border-[#618ebe] bg-[#618ebe] px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-[#dc9325] cursor-pointer"
                onClick={() => router.push("/dashboard")}
              >
                Get Started
              </a>

              <a
                className="inline-block rounded border border-gray-200 px-5 py-3 font-medium text-[#618ebe] shadow-sm transition-colors hover:bg-gray-50 hover:text-gray-900"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>

        
          <div className='relative w-full max-w-[500px] h-[600px] '>
          <div className="absolute inset-4 z-0 -mt-8 scale-[1.5]">
          <Orb />
        </div> 
          <div className="relative w-[500px] h-[600px]">
            <Image
              src={'/education.svg'}
              width={500}
              height={600}
              alt="education"
              className="absolute top-0 left-0 w-full h-full filter drop-shadow-[0_0_40px_rgba(97,142,190,0.7)]"
            />
          </div>
         </div>
         </div>
       
      </section> 
      
    <Heading/>  

<section className="bg-black py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
  {/* Background Square Grid */}
  <div className="absolute inset-0 opacity-5 pointer-events-none" />

  <div className="relative max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 z-10">
    {[
      {
        icon: <FileText className="w-10 h-10 text-[#618ebe] mb-3" />,
        title: "5 Free Course Generation",
        desc: "Responsive and mobile-first Courses for the web",
      },
      {
        icon: <Sliders className="w-10 h-10 text-[#618ebe] mb-3" />,
        title: "Customizable",
        desc: "Easily customized and extendable",
      },
      {
        icon: <BookOpen className="w-10 h-10 text-[#618ebe] mb-3" />,
        title: "Free to Use",
        desc: "Every component and plugin is well documented",
      },
      {
        icon: <MessageCircle className="w-10 h-10 text-[#618ebe] mb-3" />,
        title: "24/7 Support",
        desc: "Contact us 24 hours a day, 7 days a week",
      },
    ].map((feature, index) => (
      <SpotlightCard
        key={index}
        className="custom-spotlight-card bg-[#111] text-white text-center p-6 rounded-lg shadow-md shadow-blue-600 transition-transform transform hover:scale-105 hover:shadow-xl"
        spotlightColor="rgba(0, 229, 255, 0.6)"
      >
        <div className="flex justify-center">{feature.icon}</div>
        <h3 className="text-xl font-semibold mt-2">{feature.title}</h3>
        <p className="text-sm mt-2 text-gray-300">{feature.desc}</p>
      </SpotlightCard>
    ))}
  </div>
</section>

{/* footer?\ */}
<footer className="bg-gradient-to-b from-[#0a0a0a] to-black text-white py-12 px-6 border-t border-[#1f1f1f] mt-50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
         
          <div className="space-y-3">
            <div className=" p-2 rounded-lg inline-block">
              <Image src="/logo.svg" alt="logo" width={150} height={40} />
            </div>
            <p className="text-gray-300"> AI-powered  personalized course curation </p>
            <div className="text-sm text-gray-400 space-y-1">
             
              <div className="text-green-400 mt-2">● All Systems Operational</div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Navigation</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/" className="hover:text-[#618ebe] transition">Home</a></li>
              <li><a href="/dashboard" className="hover:text-[#618ebe] transition">DashBoard</a></li>
              <li><a href="/dashboard/explore" className="hover:text-[#618ebe] transition">Explore</a></li>
              <li><a href="/dashboard/upgrade" className="hover:text-[#618ebe] transition">Upgrade</a></li>
            </ul>
          </div>

  
           <div>
          <h3 className="text-lg font-semibold mb-3">Connect With Us</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Github className="w-5 h-5 text-[#618ebe]" />
              <a href="https://github.com/RadhaGitHub06?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-[#618ebe]">
                GitHub - Radha Gupta
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Linkedin className="w-5 h-5 text-[#618ebe]" />
              <a href=" https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=radha-gupta-4887a6296 " target="_blank" rel="noopener noreferrer" className="hover:text-[#618ebe]">
                LinkedIn - Radha Gupta
              </a>
            </li>
            <li className="flex items-center gap-2 mt-2">
              <Mail className="w-5 h-5 text-[#618ebe]" />
              <a href="" className="hover:text-[#618ebe] transition">
           rg9319738@gmail.com
              </a>
            </li>
          </ul>
         
        </div>
        </div>
      </footer>
      </div>
  )
}

export default Hero
