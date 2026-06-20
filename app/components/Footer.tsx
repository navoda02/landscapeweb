"use client";

import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1 - Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-green-700 mb-4">ScapeXNT</h3>
            <div className="space-y-3 text-gray-600 text-sm">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-700" /> (07) 1234 5678
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-700" /> info@scapexnt.com.au
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-700" /> Based in Darwin
              </p>
            </div>
            <div className="mt-4">
              <h4 className="text-gray-800 font-semibold mb-2">Available Hours</h4>
              <p className="text-gray-500 text-sm">Monday–Saturday<br />08:00AM – 05:00PM</p>
            </div>
          </div>

          {/* Column 2 - Pages */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Pages</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-500 hover:text-green-700 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-500 hover:text-green-700 transition-colors">About Us</Link></li>
              <li><Link href="/residential" className="text-gray-500 hover:text-green-700 transition-colors">Residential</Link></li>
              <li><Link href="/commercial" className="text-gray-500 hover:text-green-700 transition-colors">Commercial</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-green-700 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-gray-500 hover:text-green-700 transition-colors">Services</Link></li>
              <li><Link href="/#gallery" className="text-gray-500 hover:text-green-700 transition-colors">Recent Work</Link></li>
              <li><Link href="/#faq" className="text-gray-500 hover:text-green-700 transition-colors">FAQs</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-green-700 transition-colors">Our Locations</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-green-700 transition-colors">Site Map</Link></li>
            </ul>
          </div>

          {/* Column 4 - Follow Us - Using simple text/emojis */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Follow us</h3>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="bg-gray-200 w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors text-gray-600 text-sm font-bold">
                f
              </a>
              <a href="#" className="bg-gray-200 w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors text-gray-600 text-sm font-bold">
                ig
              </a>
              <a href="#" className="bg-gray-200 w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors text-gray-600 text-sm font-bold">
                in
              </a>
              <a href="#" className="bg-gray-200 w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors text-gray-600 text-sm font-bold">
                wa
              </a>
              <a href="#" className="bg-gray-200 w-9 h-9 rounded-full flex items-center justify-center hover:bg-green-600 hover:text-white transition-colors text-gray-600 text-sm font-bold">
                x
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© 2020 ScapeXNT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}