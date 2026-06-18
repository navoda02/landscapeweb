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
            <div className="flex justify-end mb-4">
              <div className="relative w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32">
                <Image
                  src="/images/this.png"
                  alt="Landscape Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Outdoor Space with Professional Landscaping
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              At ScapeX, we specialize in creating and maintaining beautiful,
              functional outdoor spaces. Our team offers a range of landscaping
              services, including lawn care, custom designs, tree and shrub care,
              and vibrant flower bed installations. We work closely with you
              to bring your ideas to life, ensuring your landscape is both
              stunning and sustainable. Whether you're looking to refresh your
              yard or need ongoing maintenance, we're here to help your outdoor
              area thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleContactClick}
                className="bg-transparent hover:bg-green-50 text-green-700 font-semibold py-3 px-8 rounded-lg transition-colors border-2 border-green-700 shadow-lg cursor-pointer"
              >
                MORE GET TO KNOW
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}