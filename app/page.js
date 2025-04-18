
import { Spotlight } from "../Components/ui/spotlight-new";

import Header from "./_components/Header";
import Hero from "./_components/Hero";


export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#051318] to-[#152c3d] ">
       <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_1px_1px,_#ffffff0a_1px,_transparent_0)] bg-[length:30px_30px]" />
   { /* Header */}
  <Spotlight/>
   <Header/>
  
   {/* hero section */}
   <Hero/>
  
    </div>
  );
}
