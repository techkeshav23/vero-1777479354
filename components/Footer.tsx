'use client';

import Link from 'next/link';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FFFFFF] dark:bg-[#141410] border-t border-[#E8E2D5] dark:border-[#26241E] py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA]" style={{ fontFamily: '"Playfair Display", serif' }}>
            Vero
          </h2>
          <p className="text-[#6B6B6B] dark:text-[#9A9A95] text-sm leading-relaxed">
            Authentic Italian, refined for the modern palate. Three generations of family recipes, preserved in the heart of the city.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="#" className="text-[#1A1A1A] dark:text-[#FAFAFA] hover:text-[#C8A961] transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A] dark:text-[#FAFAFA]">Contact</h3>
          <ul className="space-y-3 text-sm text-[#6B6B6B] dark:text-[#9A9A95]">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> 224 Mulberry St, New York, NY 10012
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> (212) 555-0123
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" /> reservations@veronyc.com
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A] dark:text-[#FAFAFA]">Hours</h3>
          <ul className="space-y-2 text-sm text-[#6B6B6B] dark:text-[#9A9A95]">
            <li>Mon — Fri: 5:00 PM — 11:00 PM</li>
            <li>Sat — Sun: 5:00 PM — 12:00 AM</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-widest text-[#1A1A1A] dark:text-[#FAFAFA]">Explore</h3>
          <nav className="flex flex-col gap-2 text-sm text-[#6B6B6B] dark:text-[#9A9A95]">
            <Link href="/menu" className="hover:text-[#C8A961] transition-colors">Menu</Link>
            <Link href="/about" className="hover:text-[#C8A961] transition-colors">Our Story</Link>
            <Link href="/reservations" className="hover:text-[#C8A961] transition-colors">Reservations</Link>
            <Link href="/contact" className="hover:text-[#C8A961] transition-colors">Contact</Link>
          </nav>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-[#E8E2D5] dark:border-[#26241E] text-center text-xs text-[#6B6B6B] dark:text-[#9A9A95]">
        © {new Date().getFullYear()} Vero Restaurant. All rights reserved.
      </div>
    </footer>
  );
}