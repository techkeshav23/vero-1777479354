'use client';

import { motion } from 'framer-motion';

const menuData = [
  {
    category: "Antipasti",
    items: [
      { name: "Burrata di Andria", price: "$24", description: "Hand-pulled mozzarella with Apulian olive oil, sun-ripened tomato, fresh basil.", ingredients: "Buffalo milk, sea salt, basil, extra virgin olive oil", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800" },
      { name: "Carpaccio di Manzo", price: "$28", description: "Thinly sliced Wagyu beef, caper berries, shaved parmigiano, truffle aioli.", ingredients: "Wagyu, capers, parmesan, truffle oil", image: "https://images.unsplash.com/photo-1582235478330-22c611009187?w=800" },
      { name: "Fiori di Zucca", price: "$22", description: "Crispy zucchini blossoms stuffed with herb ricotta and lemon zest.", ingredients: "Zucchini flowers, sheep ricotta, lemon, mint", image: "https://images.unsplash.com/photo-1626078478766-4c4493393b4a?w=800" },
      { name: "Polpo alla Griglia", price: "$29", description: "Charred Mediterranean octopus, chickpea purée, nduja vinaigrette.", ingredients: "Octopus, chickpeas, nduja, parsley", image: "https://images.unsplash.com/photo-1606491956621-2c5caf3e7c1d?w=800" }
    ]
  },
  {
    category: "Primi",
    items: [
      { name: "Tagliatelle al Tartufo", price: "$38", description: "Hand-rolled pasta, 24-month aged parmesan, shaved black winter truffle.", ingredients: "00 Flour, farm eggs, black truffle, butter", image: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=800" },
      { name: "Ravioli di Aragosta", price: "$42", description: "Lobster-filled pillows in a delicate saffron bisque.", ingredients: "Maine lobster, saffron, cream, chives", image: "https://images.unsplash.com/photo-1555949993-68078631620a?w=800" },
      { name: "Pappardelle al Cinghiale", price: "$36", description: "Slow-braised wild boar ragu, juniper berries, red wine reduction.", ingredients: "Wild boar, red wine, juniper, carrots", image: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?w=800" },
      { name: "Risotto allo Zafferano", price: "$34", description: "Acquerello carnaroli rice, bone marrow, gold leaf.", ingredients: "Carnaroli rice, saffron, beef marrow, butter", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800" }
    ]
  }
];

export default function MenuDetailList() {
  return (
    <div className="py-20 bg-[#FAF8F1] dark:bg-[#0A0A08]">
      <div className="max-w-5xl mx-auto px-6">
        {menuData.map((section, idx) => (
          <div key={idx} className="mb-20">
            <h2 className="text-4xl font-serif mb-12 text-[#1A1A1A] dark:text-[#FAFAFA]">{section.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group bg-[#FFFFFF] dark:bg-[#141410] rounded-3xl overflow-hidden shadow-lg border border-[#E8E2D5] dark:border-[#26241E] transition-all"
                >
                  <div className="h-64 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-[#1A1A1A] dark:text-[#FAFAFA]">{item.name}</h3>
                      <span className="text-[#C8A961] font-bold">{item.price}</span>
                    </div>
                    <p className="text-[#6B6B6B] dark:text-[#9A9A95] text-sm mb-4 leading-relaxed">{item.description}</p>
                    <div className="pt-4 border-t border-[#E8E2D5] dark:border-[#26241E]">
                      <p className="text-[10px] uppercase tracking-widest text-[#6B6B6B]/60 dark:text-[#9A9A95]/60 font-medium">Ingredients</p>
                      <p className="text-xs text-[#1A1A1A] dark:text-[#FAFAFA] mt-1">{item.ingredients}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}