"use client";

import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  const handleAboutClick = () => {
    router.push("/about");
  };

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <section 
      id="home" 
      className="relative pt-16 min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/Home3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Simple Dark Overlay - NO BLUR */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Content - stays clear on top */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
          Professional Landscaping
        </h1>
        <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Transform your outdoor space into a beautiful sanctuary
        </p>
        
        {/* Button Container */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* Solid Green Button - Navigates to About Page */}
          <button 
            onClick={handleAboutClick}
            className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors shadow-lg cursor-pointer"
          >
            MORE ABOUT US
          </button>
          
          {/* Transparent Button - Navigates to Contact Page */}
          <button 
            onClick={handleContactClick}
            className="bg-transparent hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-colors border-2 border-white shadow-lg cursor-pointer"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
}