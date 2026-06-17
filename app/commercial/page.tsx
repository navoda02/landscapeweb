"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ResidentialPage() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] mt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/Home3.jpg"
            alt="Residential Services"
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

      {/* IMAGE CARDS GRID SECTION - First Row */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 relative"
          >
            {/* Image in Top Right Corner */}
            <div className="absolute -top-6 -right-6 z-10">
              <Image
                src="/images/house icon.png"
                alt="Decoration"
                width={300}
                height={180}
                className="object-contain"
              />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 pr-32">
              Our Recent Projects
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto pr-32">
              Award-winning residential transformations across Brisbane
            </p>
          </motion.div>

          {/* First Row of Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/Image1.jpg"
                  alt="Primrose Terrace"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  {/* <h3 className="text-xl font-bold">Primrose Terrace</h3>
                  <p className="text-sm text-white/80">Red Hill, Brisbane</p> */}
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/Image2.jpg"
                  alt="Hetherington Street"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  {/* <h3 className="text-xl font-bold">Hetherington Street</h3>
                  <p className="text-sm text-white/80">Herston, Brisbane</p> */}
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/Image3.jpg"
                  alt="Glenrosa Street"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  {/* <h3 className="text-xl font-bold">Glenrosa Street</h3>
                  <p className="text-sm text-white/80">Red Hill, Brisbane</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Spacing between rows - mt-16 creates large gap */}
          <div className="mt-16"></div>

          {/* Second Row of Images */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 4 */}
            <div className="group cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/images7.jpg"
                  alt="New Farm Residence"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  {/* <h3 className="text-xl font-bold">New Farm Residence</h3>
                  <p className="text-sm text-white/80">New Farm, Brisbane</p> */}
                </div>
              </div>
            </div>

            {/* Card 5 */}
            <div className="group cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/Image5.jpg"
                  alt="Hamilton Garden"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  {/* <h3 className="text-xl font-bold">Hamilton Garden</h3>
                  <p className="text-sm text-white/80">Hamilton, Brisbane</p> */}
                </div>
              </div>
            </div>

            {/* Card 6 */}
            <div className="group cursor-pointer">
              <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/images/images6.jpg"
                  alt="Ascot Estate"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  {/* <h3 className="text-xl font-bold">Ascot Estate</h3>
                  <p className="text-sm text-white/80">Ascot, Brisbane</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}