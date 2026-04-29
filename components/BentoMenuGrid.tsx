'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const menuData = [
  {
    category: "Antipasti",
    items: ["Burrata di Andria", "Carpaccio di Manzo", "Fiori di Zucca", "Polpo alla Griglia"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800"
  },
  {
    category: "Primi",
    items: ["Tagliatelle al Tartufo", "Ravioli di Aragosta", "Pappardelle al Cinghiale", "Risotto allo Zafferano"],
    image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800"
  },
  {
    category: "Secondi",
    items: ["Bistecca alla Fiorentina", "Branzino al Forno", "Osso Buco", "Melanzane alla Parmigiana"],
    image: "https://images.unsplash.com/photo-1558030006-450675383462?w=800"
  },
  {
    category: "Dolci",
    items: ["Tiramisu Vero", "Panna Cotta al Limoncello", "Cannoli Siciliani", "Affogato al Caffè"],
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800"
  }
];

export default function BentoMenuGrid() {
  return (
    <section className="py-24 bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
            The Menu
          </h2>
          <p className="text-[#6B6B6B] dark:text-[#9A9A95] max-w-lg">
            Hand-rolled pasta, wood-fired techniques, and seasonal ingredients sourced from the Hudson Valley.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {menuData.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`group relative overflow-hidden rounded-3xl p-8 bg-[#FFFFFF] dark:bg-[#141410] border border-[#E8E2D5] dark:border-[#26241E] ${
                idx === 0 || idx === 3 ? 'md:col-span-7' : 'md:col-span-5'
              }`}
            >
              <img
                src={section.image}
                alt={section.category}
                className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-500"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-6 font-serif">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="text-[#6B6B6B] dark:text-[#9A9A95] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A961]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link 
                  href="/menu" 
                  className="inline-block mt-8 text-sm font-semibold text-[#1A1A1A] dark:text-[#FAFAFA] border-b border-[#1A1A1A] dark:border-[#FAFAFA] hover:opacity-70 transition-opacity"
                >
                  View full menu
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}