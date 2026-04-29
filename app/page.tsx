'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChefHat, Wine, Utensils } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-500">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=80"
          alt="Authentic Italian Kitchen"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>
            Vero
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 font-light">Authentic Italian, refined for the modern palate.</p>
          <Link 
            href="/reservations"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A961] text-white rounded-full hover:bg-[#b09555] transition-all"
          >
            Reserve a Table <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>

      {/* Bento Menu Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-12 text-center" style={{ fontFamily: '"Playfair Display", serif' }}>Signature Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {[
            { title: "Antipasti", desc: "Hand-pulled mozzarella & Wagyu", span: "md:col-span-4" },
            { title: "Primi", desc: "Hand-rolled pasta & truffles", span: "md:col-span-8" },
            { title: "Secondi", desc: "Dry-aged porterhouse & Branzino", span: "md:col-span-8" },
            { title: "Dolci", desc: "Tiramisu & Panna Cotta", span: "md:col-span-4" }
          ].map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -8 }}
              className={`${cat.span} p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#141410] border border-[#E8E2D5] dark:border-[#26241E] shadow-lg`}
            >
              <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-2">{cat.title}</h3>
              <p className="text-[#6B6B6B] dark:text-[#9A9A95]">{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Chef Narrative */}
      <section className="py-24 bg-[#F0EAD8] dark:bg-[#1F1D17]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-5xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>Three generations. One passion.</h2>
            <div className="space-y-6 text-[#6B6B6B] dark:text-[#9A9A95] text-lg">
              <p>Vero began in a small village in Tuscany, where Nonna Rosa's pasta was passed kitchen to kitchen for 60 years. Her philosophy was simple: respect the ingredient, honor the time.</p>
              <p>Today, that same dough is rolled by hand each morning in our Mulberry Street kitchen. We source our flour from stone mills in Italy and our produce from local Hudson Valley farms.</p>
            </div>
          </motion.div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://i.pravatar.cc/300?img=12" className="rounded-2xl shadow-xl" alt="Chef Marco" />
            <img src="https://i.pravatar.cc/300?img=23" className="rounded-2xl shadow-xl mt-12" alt="Chef Aanya" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#E8E2D5] dark:border-[#26241E] bg-[#FFFFFF] dark:bg-[#0A0A08]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#1A1A1A] dark:text-[#FAFAFA] font-bold text-xl mb-4">Vero</p>
          <p className="text-[#6B6B6B] dark:text-[#9A9A95]">224 Mulberry St, New York, NY 10012</p>
          <p className="text-[#6B6B6B] dark:text-[#9A9A95]">(212) 555-0123</p>
        </div>
      </footer>
    </main>
  );
}