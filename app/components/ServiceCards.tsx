// "use client";

// import Image from "next/image";

// export default function ServiceCards() {
//   const services = [
//     {
//       title: "Lawn Care & Maintenance",
//       description: "We provide regular mowing, edging, and fertilization to keep your lawn lush, healthy, and vibrant year-round.",
//       image: "/images/ResidentialHome.jpg",
//       alt: "Lawn care services"
//     },
//     {
//       title: "Landscape Design & Installation",
//       description: "Our team creates custom landscape designs that transform your outdoor space, from plant selection to hardscaping features.",
//       image: "/images/CommertialHome.jpg",
//       alt: "Landscape design services"
//     },
//     {
//       title: "Flower Bed Design & Maintenance",
//       description: "We create and maintain vibrant flower beds, selecting the best plants for your space to ensure colorful, seasonal blooms year-round.",
//       image: "/images/Home2.jpg",
//       alt: "Flower bed services"
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
//             Our Landscaping Services
//           </h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             At ScapeX, we offer a wide range of expert landscaping services tailored to enhance your outdoor space.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
//             >
//               {/* Image Container */}
//               <div className="relative h-56 w-full overflow-hidden bg-gray-200">
//                 <Image
//                   src={service.image}
//                   alt={service.alt}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </div>
              
//               {/* Content */}
//               <div className="p-6 text-center">
//                 <div className="w-12 h-12 bg-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <span className="text-white text-xl font-bold">{index + 1}</span>
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-900 mb-2">
//                   {service.title}
//                 </h3>
//                 <p className="text-gray-600">
//                   {service.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

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