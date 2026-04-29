'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Leaf, Fish, Beef, Star } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const menuData = [
  {
    category: "Antipasti",
    items: [
      { name: "Burrata di Andria", price: "$24", description: "Hand-pulled mozzarella with Apulian olive oil, sun-ripened tomato, fresh basil.", tags: ["vegetarian", "signature"] },
      { name: "Carpaccio di Manzo", price: "$28", description: "Thinly sliced Wagyu beef, caper berries, shaved parmigiano, truffle aioli.", tags: ["gluten-free"] },
      { name: "Fiori di Zucca", price: "$22", description: "Crispy zucchini blossoms stuffed with herb ricotta and lemon zest.", tags: ["vegetarian"] },
      { name: "Polpo alla Griglia", price: "$29", description: "Charred Mediterranean octopus, chickpea purée, nduja vinaigrette.", tags: ["seafood"] }
    ]
  },
  {
    category: "Primi",
    items: [
      { name: "Tagliatelle al Tartufo", price: "$38", description: "Hand-rolled pasta, 24-month aged parmesan, shaved black winter truffle.", tags: ["signature", "vegetarian"] },
      { name: "Ravioli di Aragosta", price: "$42", description: "Lobster-filled pillows in a delicate saffron bisque.", tags: ["seafood"] },
      { name: "Pappardelle al Cinghiale", price: "$36", description: "Slow-braised wild boar ragu, juniper berries, red wine reduction.", tags: ["meat"] },
      { name: "Risotto allo Zafferano", price: "$34", description: "Acquerello carnaroli rice, bone marrow, gold leaf.", tags: ["gluten-free"] }
    ]
  },
  {
    category: "Secondi",
    items: [
      { name: "Bistecca alla Fiorentina", price: "$95", description: "32oz dry-aged porterhouse, rosemary infusion, sea salt.", tags: ["meat", "for-two"] },
      { name: "Branzino al Forno", price: "$44", description: "Whole roasted Mediterranean sea bass, fennel, lemon, salmoriglio.", tags: ["seafood"] },
      { name: "Osso Buco", price: "$48", description: "Veal shank braised for 12 hours, gremolata, saffron risotto.", tags: ["meat"] },
      { name: "Melanzane alla Parmigiana", price: "$32", description: "Layered eggplant, heirloom tomato, smoked provolone.", tags: ["vegetarian"] }
    ]
  },
  {
    category: "Dolci",
    items: [
      { name: "Tiramisu Vero", price: "$16", description: "Espresso-soaked savoiardi, mascarpone cream, shaved 70% dark chocolate.", tags: ["vegetarian"] },
      { name: "Panna Cotta al Limoncello", price: "$14", description: "Silky vanilla bean cream, limoncello reduction, candied peel.", tags: ["vegetarian", "gluten-free"] },
      { name: "Cannoli Siciliani", price: "$12", description: "Crispy shell, sheep's milk ricotta, candied orange, pistachio.", tags: ["vegetarian"] },
      { name: "Affogato al Caffè", price: "$10", description: "Double shot of espresso poured over house-made hazelnut gelato.", tags: ["vegetarian"] }
    ]
  }
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F1] dark:bg-[#0A0A08] transition-colors duration-500">
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#FAF8F1]/80 dark:bg-[#0A0A08]/80 border-b border-[#E8E2D5] dark:border-[#26241E]">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-[#1A1A1A] dark:text-[#FAFAFA]">Vero</Link>
          <div className="flex items-center gap-6">
            <Link href="/menu" className="text-sm font-medium text-[#1A1A1A] dark:text-[#FAFAFA]">Menu</Link>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-6xl md:text-7xl font-light text-[#1A1A1A] dark:text-[#FAFAFA] mb-6" style={{ fontFamily: '"Playfair Display", serif' }}>Our Menu</h1>
          <p className="text-xl text-[#6B6B6B] dark:text-[#9A9A95] max-w-2xl">Three generations of family recipes, preserved in the heart of the city. Hand-rolled daily.</p>
        </motion.div>

        <div className="space-y-24">
          {menuData.map((section, idx) => (
            <motion.div 
              key={section.category}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h2 className="text-3xl font-bold text-[#1A1A1A] dark:text-[#FAFAFA] mb-10 border-b border-[#E8E2D5] dark:border-[#26241E] pb-4" style={{ fontFamily: '"Playfair Display", serif' }}>
                {section.category}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {section.items.map((item) => (
                  <motion.div 
                    key={item.name}
                    whileHover={{ y: -4 }}
                    className="group p-6 rounded-2xl bg-white dark:bg-[#141410] border border-[#E8E2D5] dark:border-[#26241E] shadow-sm hover:shadow-xl transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-[#FAFAFA]">{item.name}</h3>
                      <span className="text-[#C8A961] font-semibold">{item.price}</span>
                    </div>
                    <p className="text-[#6B6B6B] dark:text-[#9A9A95] text-sm mb-4 leading-relaxed">{item.description}</p>
                    <div className="flex gap-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-[#F0EAD8] dark:bg-[#1F1D17] text-[#6B6B6B] dark:text-[#9A9A95]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#1A1A1A] dark:bg-[#141410] text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-8" style={{ fontFamily: '"Playfair Display", serif' }}>Ready to experience Vero?</h3>
          <Link href="/reservations" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#C8A961] text-black font-bold hover:bg-[#b59857] transition-all">
            Book your table <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}