
import { Spotlight } from "../Components/ui/spotlight-new";

import Header from "./_components/Header";
import Hero from "./_components/Hero";


export default function Home() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#051318] to-[#152c3d] overflow-hidden">
    {/* Radial Background Grid (non-interactive, layered behind) */}
    <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,_#ffffff0a_1px,_transparent_0)] bg-[length:30px_30px]" />
  
    {/* Main Content Area (z-10 to stay above background) */}
    <div className="relative z-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-8 space-y-10">
      {/* Header Section */}
      <Spotlight />
      <Header />
  
      {/* Hero Section */}
      <Hero />
    </div>
  </div>
  
  );
}
