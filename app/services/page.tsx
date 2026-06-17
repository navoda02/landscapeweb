"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Lawn Care & Maintenance",
      description: "We offer comprehensive lawn care services, including mowing, fertilization, aeration, and weed control. Our expert team ensures your lawn stays lush, healthy, and well-maintained throughout every season, with tailored care plans for optimal results."
    },
    {
      title: "Landscape Design & Installation",
      description: "Our landscape design services transform your outdoor space into a beautiful and functional area. From custom garden designs to hardscaping, we work with you to create a landscape that suits your style, needs, and budget. Our installation team brings your vision to life with precision and care."
    },
    {
      title: "Flower Bed Design & Maintenance",
      description: "Enhance the beauty of your garden with our flower bed design and maintenance services. We design vibrant, sustainable flower beds and provide ongoing care to ensure they flourish year-round, adding color and charm to your outdoor space."
    }
  ];

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
            Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base/sm:text-lg/md:text-xl text-white/90"
          >
            Based In Brisbane
          </motion.p>
      </div>
    </section>

      {/* Intro Section - Text Left, Image Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Our Lawn Care & Landscaping Services
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At ScapeX, we provide a wide range of professional lawn care and landscaping services designed 
                to keep your garden in top shape year-round. With years of experience and a dedicated team of 
                experts, we're committed to making your outdoor space beautiful and healthy. Here are a few 
                key facts about our services:
              </p>
              
              {/* Stats */}
              <div className="space-y-4 mb-8">
                <div className="border-l-4 border-green-700 pl-4">
                  <div className="text-3xl sm:text-4xl font-bold text-green-700">200</div>
                  <p className="text-gray-600 text-sm">
                    Over 200 unique landscape designs created for satisfied customers across Brisbane.
                  </p>
                </div>
                <div className="border-l-4 border-green-700 pl-4">
                  <div className="text-3xl sm:text-4xl font-bold text-green-700">500+</div>
                  <p className="text-gray-600 text-sm">
                    500+ regular lawn care visits made annually to ensure the ongoing health and beauty of our clients' gardens.
                  </p>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/about"
                  className="bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-center"
                >
                  About Us
                </Link>
                <Link 
                  href="/#gallery"
                  className="bg-transparent hover:bg-green-50 text-green-700 font-semibold py-3 px-8 rounded-lg border-2 border-green-700 transition-colors text-center"
                >
                  View Our Gallery
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <Image
                src="/images/CommertialHome.jpg"
                alt="Lawn Care Services"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expert Services Section - 3 Text-Only Cards (No Images, No Button) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Expert Lawn Care, Landscaping, and Flower Bed Services
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* No Image - Text Only */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}