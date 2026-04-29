'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, ChevronRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ReservationsPage() {
  const [step, setStep] = useState(1);

  return (
    <main className="min-h-screen bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-300" style={{ fontFamily: '"Inter", sans-serif' }}>
      <Navbar />
      
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
              Reserve Your Table
            </h1>
            <p className="text-[#6B6B6B] dark:text-[#9A9A95] text-lg max-w-2xl mx-auto">
              Experience the heritage of Vero. Please select your party size, date, and preferred time to begin your journey.
            </p>
          </motion.div>

          <div className="bg-[#FFFFFF] dark:bg-[#141410] border border-[#E8E2D5] dark:border-[#26241E] rounded-3xl p-8 md:p-12 shadow-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Input Fields */}
              <div className="md:col-span-2 space-y-8">
                <div className="space-y-4">
                  <label className="block text-sm font-semibold text-[#1A1A1A] dark:text-[#FAFAFA]">Party Size</label>
                  <div className="grid grid-cols-4 gap-3">
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <button 
                        key={num}
                        className="h-14 rounded-xl border border-[#E8E2D5] dark:border-[#26241E] hover:border-[#C8A961] dark:hover:border-[#C8A961] transition-colors text-[#1A1A1A] dark:text-[#FAFAFA]"
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-[#1A1A1A] dark:text-[#FAFAFA]">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-4 h-5 w-5 text-[#6B6B6B]" />
                      <input type="date" className="w-full pl-10 pr-4 py-3 bg-[#FAF8F1] dark:bg-[#0A0A08] border border-[#E8E2D5] dark:border-[#26241E] rounded-xl text-[#1A1A1A] dark:text-[#FAFAFA]" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <label className="block text-sm font-semibold text-[#1A1A1A] dark:text-[#FAFAFA]">Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3 top-4 h-5 w-5 text-[#6B6B6B]" />
                      <select className="w-full pl-10 pr-4 py-3 bg-[#FAF8F1] dark:bg-[#0A0A08] border border-[#E8E2D5] dark:border-[#26241E] rounded-xl text-[#1A1A1A] dark:text-[#FAFAFA]">
                        <option>5:00 PM</option>
                        <option>6:30 PM</option>
                        <option>8:00 PM</option>
                        <option>9:30 PM</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-[#1A1A1A] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#1A1A1A] rounded-xl font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  Check Availability <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {/* Info Panel */}
              <div className="bg-[#FAF8F1] dark:bg-[#0A0A08] p-6 rounded-2xl border border-[#E8E2D5] dark:border-[#26241E]">
                <h3 className="font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-4">Reservation Policy</h3>
                <ul className="space-y-3 text-sm text-[#6B6B6B] dark:text-[#9A9A95]">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[#C8A961]" /> Bar seating is walk-in only.</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[#C8A961]" /> 15-minute grace period for late arrivals.</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[#C8A961]" /> Cancellations within 24h incur a fee.</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-[#C8A961]" /> Private events: contact us directly.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}