"use client";

import { motion } from "framer-motion";

export default function SimpleScrollGallery() {
  const galleryItems = [
    { title: "Modern Garden Design", delay: 0, color: "bg-green-200" },
    { title: "Outdoor Living Space", delay: 0.2, color: "bg-green-300" },
    { title: "Water Feature", delay: 0.4, color: "bg-green-400" },
    { title: "Native Garden", delay: 0.1, color: "bg-green-200" },
    { title: "Patio Design", delay: 0.3, color: "bg-green-300" },
    { title: "Vertical Garden", delay: 0.5, color: "bg-green-400" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Work Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scroll to see our beautiful transformations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: item.delay }}
              viewport={{ once: true }}
              className={`${item.color} relative h-72 rounded-lg overflow-hidden shadow-lg cursor-pointer flex items-center justify-center`}
            >
              <p className="text-gray-800 text-xl font-semibold text-center px-4">
                {item.title}
                <br />
                <span className="text-sm text-gray-600">(Add image to /public/images/)</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}