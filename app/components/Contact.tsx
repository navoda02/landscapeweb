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
    <section className="py-20 bg-white overflow-visible">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-visible">
        <div className="grid grid-cols-1 gap-12">
          
          {/* Text Content with Image in Top Right Corner */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative overflow-visible"
          >
            {/* Image in Top Right Corner - Responsive */}
            {/* <div className="flex justify-end mb-4">
              <div className="relative w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                <Image
                  src="/images/that.png"
                  alt="Landscape Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div> */}

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Landscaping Services
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              At ScapeX, we offer a wide range of expert landscaping services tailored to enhance the beauty and functionality of your outdoor space. From lawn care
              and custom designs to tree health management and flower bed maintenance, our team is dedicated to bringing your vision to life with professional care
              and attention to detail. Whether you're looking to revamp your entire garden or need regular upkeep, we provide reliable solutions that suit your needs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleContactClick}
                className="bg-transparent hover:bg-green-50 text-green-700 font-semibold py-3 px-8 rounded-lg transition-colors border-2 border-green-700 shadow-lg cursor-pointer"
              >
                CONTACT US
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}