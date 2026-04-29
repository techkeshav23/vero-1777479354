'use client';

import { motion } from 'framer-motion';

export default function ChefNarrative() {
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
    <section className="py-24 bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-5xl md:text-6xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-8"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Three generations. One passion.
            </h2>
            <div className="space-y-6 text-[#6B6B6B] dark:text-[#9A9A95] text-lg leading-relaxed">
              <p>
                Vero began in a small village in Tuscany, where Nonna Rosa's pasta was passed kitchen to kitchen for 60 years. Her philosophy was simple: respect the ingredient, honor the time.
              </p>
              <p>
                Today, that same dough is rolled by hand each morning in our Mulberry Street kitchen. We source our flour from stone mills in Italy and our produce from local Hudson Valley farms.
              </p>
              <p>
                Every dish carries a story. Every story carries us forward. We aren't just serving dinner; we are preserving a way of life.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200" 
              alt="Chef preparing pasta" 
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </motion.div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -8 }}
              className="p-8 rounded-3xl bg-[#FFFFFF] dark:bg-[#141410] border border-[#E8E2D5] dark:border-[#26241E] shadow-lg transition-all"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-24 h-24 rounded-full mb-6 object-cover border-4 border-[#FAF8F1] dark:border-[#0A0A08]"
              />
              <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-1" style={{ fontFamily: '"Playfair Display", serif' }}>
                {member.name}
              </h3>
              <p className="text-[#C8A961] font-medium mb-4">{member.role}</p>
              <p className="text-[#6B6B6B] dark:text-[#9A9A95] text-sm leading-relaxed">
                {member.bio_short}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}