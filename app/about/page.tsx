'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const team = [
    {
      name: "Marco Rossi",
      role: "Executive Chef",
      bio_short: "Trained at Antica Osteria del Ponte. 20+ years of obsession with Tuscan flour and fermentation.",
      image: "https://i.pravatar.cc/300?img=12"
    },
    {
      name: "Aanya Patel",
      role: "Pastry Chef",
      bio_short: "Former lead at Le Bernardin. Specializes in deconstructed dolci and seasonal stone fruit.",
      image: "https://i.pravatar.cc/300?img=23"
    },
    {
      name: "Sarah Chen",
      role: "Head Sommelier",
      bio_short: "Curator of our 400-bottle cellar. Expert in rare Nebbiolo vintages and biodynamic Italian whites.",
      image: "https://i.pravatar.cc/300?img=44"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-500">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24"
        >
          <div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>
              Three generations. One passion.
            </h1>
            <div className="space-y-6 text-[#6B6B6B] dark:text-[#9A9A95] text-lg leading-relaxed">
              <p>Vero began in a small village in Tuscany, where Nonna Rosa's pasta was passed kitchen to kitchen for 60 years. Her philosophy was simple: respect the ingredient, honor the time.</p>
              <p>Today, that same dough is rolled by hand each morning in our Mulberry Street kitchen. We source our flour from stone mills in Italy and our produce from local Hudson Valley farms.</p>
              <p>Every dish carries a story. Every story carries us forward. We aren't just serving dinner; we are preserving a way of life.</p>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200" 
              alt="Our kitchen heritage" 
              className="w-full h-[500px] object-cover"
            />
          </div>
        </motion.section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-12 text-center" style={{ fontFamily: '"Playfair Display", serif' }}>
            The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div 
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-[#141410] p-8 rounded-2xl border border-[#E8E2D5] dark:border-[#26241E] shadow-lg hover:shadow-xl transition-shadow"
              >
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-6 object-cover" />
                <h3 className="text-xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-1">{member.name}</h3>
                <p className="text-[#C8A961] font-medium mb-4">{member.role}</p>
                <p className="text-[#6B6B6B] dark:text-[#9A9A95] text-sm leading-relaxed">{member.bio_short}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="bg-[#1A1A1A] dark:bg-[#141410] rounded-3xl p-12 text-center text-white">
          <h3 className="text-2xl font-bold mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>Press Mentions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Featured in The New York Times Dining",
              "Best Italian 2024 — Eater NYC",
              "Michelin Guide Recommended",
              "The Infatuation: Essential Mulberry St"
            ].map((mention) => (
              <div key={mention} className="p-4 border border-white/10 rounded-xl text-sm font-medium opacity-80 hover:opacity-100 transition-opacity">
                {mention}
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}