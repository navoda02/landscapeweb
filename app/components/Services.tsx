"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Services() {
  const router = useRouter();

  const services = [
    {
      title: "Residential",
      description: "Beautiful gardens and outdoor living spaces for your home",
      image: "/images/ResidentialHome.jpg",
      link: "/residential"
    },
    {
      title: "Commercial",
      description: "Professional landscaping for businesses and offices",
      image: "/images/CommertialHome.jpg",
      link: "/commercial"
    },
    {
      title: "Nature Play",
      description: "Natural play spaces that inspire creativity",
      image: "/images/Home2.jpg",
      link: "/nature-play"
    }
  ];

  const handleNavigation = (link: string) => {
    router.push(link);
  };

  return (
    <section id="services" className="py-20" style={{ backgroundColor: '#5bb450' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            We provide complete landscaping solutions for every need
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleNavigation(service.link)}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
                <div className="mt-4 text-green-600 font-medium hover:text-green-700 transition-colors">
                  Learn More →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}