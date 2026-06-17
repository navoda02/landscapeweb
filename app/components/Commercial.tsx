"use client";

import { motion } from "framer-motion";
import { Building2, Trees, Droplets } from "lucide-react";

export default function Commercial() {
  const features = [
    { icon: <Building2 />, text: "Corporate Campuses", desc: "Professional, impressive landscapes" },
    { icon: <Trees />, text: "Retail Spaces", desc: "Inviting entrances & walkways" },
    { icon: <Droplets />, text: "Water Management", desc: "Eco-friendly drainage solutions" },
  ];

  return (
    <section id="commercial" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Commercial Landscaping
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Enhance your business image with professional landscaping
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg shadow-md text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-700">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.text}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}