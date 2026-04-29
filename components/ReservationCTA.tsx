'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Clock, Users } from 'lucide-react';

export default function ReservationCTA() {
  return (
    <section className="py-20 px-6 bg-[#FAF8F1] dark:bg-[#0A0A08]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-white dark:bg-[#141410] border border-[#E8E2D5] dark:border-[#26241E] shadow-2xl p-8 md:p-16"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-5" />
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 
                className="text-4xl md:text-5xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-6"
                style={{ fontFamily: '"Playfair Display", serif' }}
              >
                Secure your table at Vero
              </h2>
              <p className="text-[#6B6B6B] dark:text-[#9A9A95] text-lg mb-8 leading-relaxed">
                Experience the heritage of Tuscan tradition. Reservations are recommended for the dining room to ensure your preferred time.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#1A1A1A] dark:text-[#FAFAFA]">
                  <Clock className="h-5 w-5 text-[#C8A961]" />
                  <span className="font-medium">Mon — Fri: 5:00 PM — 11:00 PM</span>
                </div>
                <div className="flex items-center gap-3 text-[#1A1A1A] dark:text-[#FAFAFA]">
                  <CalendarDays className="h-5 w-5 text-[#C8A961]" />
                  <span className="font-medium">Sat — Sun: 5:00 PM — 12:00 AM</span>
                </div>
                <div className="flex items-center gap-3 text-[#1A1A1A] dark:text-[#FAFAFA]">
                  <Users className="h-5 w-5 text-[#C8A961]" />
                  <span className="font-medium">Private events available upon request</span>
                </div>
              </div>
            </div>

            <div className="bg-[#FAF8F1] dark:bg-[#0A0A08] p-8 rounded-2xl border border-[#E8E2D5] dark:border-[#26241E]">
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="date" 
                  className="w-full p-3 rounded-xl bg-white dark:bg-[#141410] border border-[#E8E2D5] dark:border-[#26241E] text-[#1A1A1A] dark:text-[#FAFAFA] focus:ring-2 focus:ring-[#C8A961] outline-none"
                />
                <select className="w-full p-3 rounded-xl bg-white dark:bg-[#141410] border border-[#E8E2D5] dark:border-[#26241E] text-[#1A1A1A] dark:text-[#FAFAFA] outline-none">
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests</option>
                </select>
                <button className="w-full py-4 rounded-xl bg-[#1A1A1A] dark:bg-[#FAFAFA] text-[#FAFAFA] dark:text-[#1A1A1A] font-bold hover:bg-[#C8A961] transition-colors">
                  Check Availability
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}