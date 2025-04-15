
import { Spotlight } from "../Components/ui/spotlight-new";

import Header from "./_components/Header";
import Hero from "./_components/Hero";


export default function Home() {
  return (
    <div className="bg-black ">
   { /* Header */}<Spotlight/>
  
   <Header/>
  
   {/* hero section */}
   <Hero/>
  
    </div>
  );
}
