"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About ScapeX
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              With over 15 years of experience, we create stunning landscapes that blend functionality with natural beauty.
            </p>
            <p className="text-gray-600 mb-6">
              Our team of expert designers and landscapers work closely with clients to bring their vision to life, 
              using sustainable practices and premium materials.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                <span>✓ 500+ completed projects</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                <span>✓ Award-winning designs</span>
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                <span>✓ 100% satisfaction guarantee</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1558904541-efa843c96d01?w=800"
              alt="Landscaping team"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}