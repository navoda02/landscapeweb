"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function AboutSection() {
  const router = useRouter();
    
  const handleAboutClick = () => {
    router.push("/about");
  };

  const handleContactClick = () => {
    router.push("/contact");
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Landscaping Services
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              At Evergreen, we offer a wide range of expert landscaping services tailored to enhance the beauty and functionality of your outdoor space. From lawn care
              and custom designs to tree health management and flower bed maintenance, our team is dedicated to bringing your vision to life with professional care
              and attention to detail. Whether you're looking to revamp your entire garden or need regular upkeep, we provide reliable solutions that suit your needs.
            </p>
            
            {/* Button Container */}
            <div className="flex flex-col sm:flex-row gap-4 relative">
              
              {/* Transparent Button - Navigates to Contact Page */}
              <button 
                onClick={handleContactClick}
                className="bg-transparent hover:bg-green-50 text-green-700 font-semibold py-3 px-8 rounded-lg transition-colors border-2 border-green-700 shadow-lg cursor-pointer"
              >
                CONTACT US
              </button>
              
              {/* Image in front of the CONTACT US button - Bottom Right */}
              <div className="absolute -bottom-6 -right-6 z-10">
                <Image
                  src="/images/that.png"
                  alt="Landscape Illustration"
                  width={220}
                  height={110}
                  className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}