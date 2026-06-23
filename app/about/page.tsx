"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] mt-16">
        <div className="absolute inset-0">
            <Image
              src="/images/Home3.jpg"
              alt="Services"
              fill
              className="object-cover"
              priority
            />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Text at Bottom */}
        <div className="relative h-full flex flex-col justify-end pb-20 pl-8 sm:pl-12 md:pl-16 z-10">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4"
            >
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-white/90"
            >
              Based In Darwin
            </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative">
            
            {/* Left Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-80 sm:h-96 lg:h-[450px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/Home3.jpg"
                alt="Our Story"
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
              className="relative pb-20 sm:pb-24 md:pb-0"
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Our Story
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Founded in 2020, ScapeX NT has been a family-owned business, committed to creating sustainable 
                and beautiful gardens that last. Based in Brisbane, we specialize in custom garden design, 
                landscaping, and maintenance, delivering personalized services that suit every client's 
                unique vision. With decades of experience and a deep passion for nature, we continue to 
                evolve, blending traditional techniques with modern creativity to bring your garden dreams 
                to life.
              </p>
            </motion.div>
          </div>

          {/* Decorative Image - Responsive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end mt-6 lg:mt-0"
          >
            <div className="relative w-40 sm:w-48 md:w-56 lg:w-64 h-20 sm:h-24 md:h-28 lg:h-32">
              <Image
                src="/images/house icon.png"
                alt="Decoration"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </main>
  );
}