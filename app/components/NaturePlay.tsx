"use client";

import { motion } from "framer-motion";
import { Trees, Flower2, Users } from "lucide-react";

export default function NaturePlay() {
  return (
    <section id="nature-play" className="py-16 md:py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nature Play Spaces
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Creating engaging, natural environments for children to explore
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Trees className="w-12 h-12 text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Natural Playgrounds</h3>
            <p>Logs, boulders, and natural materials for creative play</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Flower2 className="w-12 h-12 text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Sensory Gardens</h3>
            <p>Plants that engage all five senses</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-12 h-12 text-green-700 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Spaces</h3>
            <p>Areas for families to gather and connect</p>
          </div>
        </div>
      </div>
    </section>
  );
}