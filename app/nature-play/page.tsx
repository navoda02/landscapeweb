"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NaturePlayPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] mt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/Home3.jpg"
            alt="Nature Play"
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
            Nature Play
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

      {/* Content Section with Green Left Border */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Paragraph 1 - Larger & Green */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="border-l-4 border-green-700 pl-6 mb-8"
            >
              <p className="text-green-700 text-xl sm:text-2xl md:text-3xl leading-relaxed font-medium">
                From concept to design, and from design to construction, we offer a comprehensive landscape 
                package that will elevate your property and bring your landscaping vision to life.
              </p>
            </motion.div>
            
            {/* Paragraph 2 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                Equipped with a team of talented and motivated landscapers, we specialise in all aspects of 
                soft and hardscaping including intelligent garden design, exterior lighting, carpentry, 
                concreting, blockwork, rendering, painting, stone-cladding, tiling, and turfing. We do 
                everything under the sun—literally.
              </p>
            </motion.div>
            
            {/* Paragraph 3 with Green Background Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-green-50 rounded-lg p-6 border-l-4 border-green-700"
            >
              <p className="text-gray-700 text-lg leading-relaxed">
                We bring to the table expertise in all areas of design and construction and are supported by 
                an award-winning line-up of residential projects. Our impressive portfolio includes highlights 
                such as <span className="font-semibold text-green-700">Primrose Terrace Red Hill</span> which won the prestigious 2020 Queensland Residential 
                Landscape Construction of the Year Award, <span className="font-semibold text-green-700">Hetherington Street Herston</span> which was awarded the 
                Category 6 Residential Landscape of the Year Award in the same year, and a <span className="font-semibold text-green-700">Highly Commended 
                Award in 2021</span> for our work at Glenrosa Street, Red Hill.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}