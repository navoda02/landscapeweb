"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TransformSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="/images/Home3.jpg"
              alt="Beautiful Garden Transformation"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transform Your Garden with ScapeX NT
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Based in Brisbane and the surrounding areas, ScapeX NT offers expert lawn care and maintenance, 
              landscape design and installation, and flower bed design and maintenance. With over 6 years 
              of experience, ScapeX NT has transformed hundreds of gardens, creating stunning outdoor spaces 
              tailored to each client's needs.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="bg-gray-50 rounded-lg p-4">
                <span className="text-3xl sm:text-4xl font-bold text-green-700">75%</span>
                <p className="text-gray-700 mt-1">of homeowners report that professional landscaping increases the value of their property.</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <span className="text-3xl sm:text-4xl font-bold text-green-700">20%</span>
                <p className="text-gray-700 mt-1">Studies show that well-maintained gardens can increase property value by up to 20%.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}