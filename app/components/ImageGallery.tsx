"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageGallery() {
  const galleryItems = [
    {
      id: 1,
      title: "Lawn Care & Maintenance",
      description: "Regular mowing, edging, and fertilization for a lush lawn",
      image: "/images/gallery-1.jpg",
      tag: "SERVICE"
    },
    {
      id: 2,
      title: "Landscape Design",
      description: "Custom designs that transform your outdoor space",
      image: "/images/gallery-2.jpg",
      tag: "SERVICE"
    },
    {
      id: 3,
      title: "Flower Bed Design",
      description: "Vibrant, seasonal blooms year-round",
      image: "/images/gallery-3.jpg",
      tag: "SERVICE"
    },
    {
      id: 4,
      title: "Tree & Shrub Care",
      description: "Professional care for healthy trees and shrubs",
      image: "/images/gallery-4.jpg",
      tag: "SERVICE"
    },
    {
      id: 5,
      title: "Patio & Hardscaping",
      description: "Beautiful patios, walkways, and outdoor living spaces",
      image: "/images/gallery-5.jpg",
      tag: "SERVICE"
    },
    {
      id: 6,
      title: "Garden Maintenance",
      description: "Complete garden care and upkeep services",
      image: "/images/gallery-6.jpg",
      tag: "SERVICE"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Landscaping Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of expert landscaping services tailored to enhance your outdoor space
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"></div>
                <div 
                  className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                ></div>
                
                {/* Tag */}
                <div className="absolute top-4 left-4 z-20">
                  <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                
                {/* Text Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}