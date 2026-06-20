"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] mt-16">
        <div className="absolute inset-0">
          <Image
            src="/images/Home3.jpg"
            alt="Contact Us"
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
            Contact Us
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

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Call Us Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Call us</h3>
                <div className="space-y-2">
                  <p className="text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-700" /> (07) 3338 8860
                  </p>
                  <p className="text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-green-700" /> 0421 966 801
                  </p>
                </div>
              </div>

              {/* Email Us Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Email us</h3>
                <p className="text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-green-700" /> info@scapex.com.au
                </p>
              </div>

              {/* Visit Us Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Visit us</h3>
                <p className="text-gray-700 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-green-700 mt-1" /> 
                  117 Sandgate Road Albion 4010
                </p>
              </div>

              {/* Decorative Line */}
              <div className="pt-6">
                <div className="w-12 h-0.5 bg-green-700"></div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* FIX: Removed tree icon - this is likely causing the shift */}
              {/* The tree icon image might be missing or slow to load */}

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Details.
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-700"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-700"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your phone*</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-700"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">I'm interested in...*</label>
                  <select
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-700 bg-white"
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  >
                    <option value="">Please choose an option—</option>
                    <option value="Residential">Residential Landscaping</option>
                    <option value="Commercial">Commercial Landscaping</option>
                    <option value="Nature Play">Nature Play</option>
                    <option value="Maintenance">Garden Maintenance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Your message*</label>
                  <textarea
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-700"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  SUBMIT
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}