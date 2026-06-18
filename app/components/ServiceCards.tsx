"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  const services = [
    {
      title: "COMMERCIAL",
      description: "Professional landscaping for businesses and offices",
      image: "/images/CommertialHome.jpg",
      link: "/commercial"
    },
    {
      title: "RESIDENTIAL",
      description: "Beautiful gardens and outdoor living spaces for your home",
      image: "/images/ResidentialHome.jpg",
      link: "/residential"
    },
    {
      title: "NATURE PLAY",
      description: "Natural play spaces that inspire creativity",
      image: "/images/Home2.jpg",
      link: "/nature-play"
    }
  ];

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-gray-800 mb-3">
            Superior landscaping with a difference.
          </h2>
          <div className="w-20 h-1 bg-green-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-500 italic">Go outdoors to live.</p>
        </div>

        {/* Services Grid - Square Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(service.link)}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3 aspect-square"
            >
              {/* Image Container - Fills entire square */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              {/* Content - Positioned at bottom of square */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl md:text-3xl font-bold tracking-wider">
                  {service.title}
                </h3>
                <p className="text-sm text-white/80 mt-1">
                  {service.description}
                </p>
                {/* Arrow indicator */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/20">
                  <span className="text-white/70 text-sm">Learn More</span>
                  <span className="text-white text-xl font-bold group-hover:translate-x-2 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}