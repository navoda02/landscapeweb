"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function CommercialPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] mt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/Home3.jpg"
            alt="Commercial Services"
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
            Commercial
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-white/90"
          >
            Based In Brisbane
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
                package that will elevate your commercial property and bring your landscaping vision to life.
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
                an award-winning line-up of commercial projects. Our impressive portfolio includes highlights 
                such as <span className="font-semibold text-green-700">Brisbane Corporate Park</span> which won the prestigious 2022 Queensland Commercial 
                Landscape Construction of the Year Award, <span className="font-semibold text-green-700">Fortitude Valley Business Hub</span> which was awarded the 
                Category 5 Commercial Landscape of the Year Award in the same year, and a <span className="font-semibold text-green-700">Highly Commended 
                Award in 2023</span> for our work at South Bank Retail Precinct.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMAGE CARDS GRID SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 relative"
          >
            {/* Decorative Image - Responsive */}
            <div className="flex justify-end lg:justify-end mb-4 lg:mb-0">
              <div className="relative w-32 sm:w-40 md:w-48 lg:w-56 h-24 sm:h-28 md:h-32 lg:h-36">
                <Image
                  src="/images/house icon.png"
                  alt="Decoration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Recent Projects
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Award-winning commercial transformations across Brisbane
            </p>
          </motion.div>

          {/* First Row of Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/Image1.jpg"
                  alt="Corporate Park"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold">Brisbane Corporate Park</h3>
                  <p className="text-xs sm:text-sm text-white/80">Eight Mile Plains, Brisbane</p>
                </div>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/Image2.jpg"
                  alt="Business Hub"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold">Fortitude Valley Hub</h3>
                  <p className="text-xs sm:text-sm text-white/80">Fortitude Valley, Brisbane</p>
                </div>
              </div>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/Image3.jpg"
                  alt="Retail Precinct"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold">South Bank Retail Precinct</h3>
                  <p className="text-xs sm:text-sm text-white/80">South Bank, Brisbane</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Spacing between rows */}
          <div className="mt-12 sm:mt-16"></div>

          {/* Second Row of Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Card 4 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/images7.jpg"
                  alt="Office Park"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold">Toowong Office Park</h3>
                  <p className="text-xs sm:text-sm text-white/80">Toowong, Brisbane</p>
                </div>
              </div>
            </motion.div>

            {/* Card 5 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/Image5.jpg"
                  alt="Hospital Grounds"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold">Wesley Hospital Grounds</h3>
                  <p className="text-xs sm:text-sm text-white/80">Auchenflower, Brisbane</p>
                </div>
              </div>
            </motion.div>

            {/* Card 6 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 md:h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/images6.jpg"
                  alt="Shopping Centre"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="text-lg sm:text-xl font-bold">Chermside Shopping Centre</h3>
                  <p className="text-xs sm:text-sm text-white/80">Chermside, Brisbane</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}