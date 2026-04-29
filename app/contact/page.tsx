'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function ContactPage() {
  const hours = [
    { days: "Mon — Fri", open: "5:00 PM", close: "11:00 PM" },
    { days: "Sat — Sun", open: "5:00 PM", close: "12:00 AM" }
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-500">
      <Navbar />
      
      <section className="pt-24 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-16"
          >
            {/* Contact Info */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
                  Get in touch
                </h1>
                <p className="text-lg text-[#6B6B6B] dark:text-[#9A9A95] leading-relaxed">
                  Whether you have a question about our menu, need assistance with a reservation, or are interested in private dining, we are here to help.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#E8E2D5] dark:bg-[#1F1D17]">
                    <MapPin className="h-6 w-6 text-[#1A1A1A] dark:text-[#FAFAFA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FAFAFA]">Location</h3>
                    <p className="text-[#6B6B6B] dark:text-[#9A9A95]">224 Mulberry St, New York, NY 10012</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#E8E2D5] dark:bg-[#1F1D17]">
                    <Phone className="h-6 w-6 text-[#1A1A1A] dark:text-[#FAFAFA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FAFAFA]">Phone</h3>
                    <p className="text-[#6B6B6B] dark:text-[#9A9A95]">(212) 555-0123</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-[#E8E2D5] dark:bg-[#1F1D17]">
                    <Mail className="h-6 w-6 text-[#1A1A1A] dark:text-[#FAFAFA]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1A1A1A] dark:text-[#FAFAFA]">Email</h3>
                    <p className="text-[#6B6B6B] dark:text-[#9A9A95]">reservations@veronyc.com</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white dark:bg-[#141410] border border-[#E8E2D5] dark:border-[#26241E] shadow-xl">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="h-5 w-5 text-[#C8A961]" />
                  <h3 className="font-bold text-[#1A1A1A] dark:text-[#FAFAFA]">Opening Hours</h3>
                </div>
                <div className="space-y-4">
                  {hours.map((h, i) => (
                    <div key={i} className="flex justify-between border-b border-[#E8E2D5] dark:border-[#26241E] pb-2">
                      <span className="text-[#6B6B6B] dark:text-[#9A9A95]">{h.days}</span>
                      <span className="font-medium text-[#1A1A1A] dark:text-[#FAFAFA]">{h.open} — {h.close}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Map/Visual Placeholder */}
            <div className="lg:col-span-7">
              <div className="relative h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200" 
                  alt="Vero Interior" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A08]/80 to-transparent flex items-end p-10">
                  <div className="text-white">
                    <h4 className="text-2xl font-bold mb-2" style={{ fontFamily: '"Playfair Display", serif' }}>Visit us in Mulberry St</h4>
                    <p className="text-white/80">Experience the heart of our kitchen in the historic district of NYC.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}