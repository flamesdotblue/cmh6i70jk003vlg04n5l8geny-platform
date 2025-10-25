import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const listings = [
  {
    id: 1,
    title: 'Skyline Penthouse',
    location: 'Downtown, New York',
    price: '$4,200,000',
    beds: 4,
    baths: 4,
    area: '3,500 sq ft',
    image: 'https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1920&auto=format&fit=crop',
    description: 'A stunning penthouse with panoramic city views, private terrace, and high-end finishes throughout.'
  },
  {
    id: 2,
    title: 'Coastal Modern Villa',
    location: 'Malibu, California',
    price: '$6,950,000',
    beds: 5,
    baths: 6,
    area: '5,200 sq ft',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1920&auto=format&fit=crop',
    description: 'Expansive oceanfront villa with infinity pool, seamless indoor-outdoor living, and designer kitchen.'
  },
  {
    id: 3,
    title: 'Lakeside Retreat',
    location: 'Lake Tahoe, Nevada',
    price: '$3,100,000',
    beds: 4,
    baths: 4,
    area: '3,000 sq ft',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1920&auto=format&fit=crop',
    description: 'Serene modern cabin with private dock, vaulted ceilings, and floor-to-ceiling windows.'
  },
  {
    id: 4,
    title: 'Hillside Architectural Home',
    location: 'Hollywood Hills, LA',
    price: '$5,450,000',
    beds: 5,
    baths: 5,
    area: '4,800 sq ft',
    image: 'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d95?q=80&w=1920&auto=format&fit=crop',
    description: 'Iconic contemporary home with cantilevered decks, a glass pool, and smart-home integration.'
  }
];

export default function FeaturedListings() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative py-24 bg-gradient-to-b from-[#0b1a2b] to-[#0f2238]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Featured Listings</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Handpicked properties that exemplify refined design, superior craftsmanship, and exceptional locations.</p>
          </div>
          <div className="hidden md:block text-right">
            <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">Curated weekly</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-[#C5A35A] to-[#A1843C] px-3 py-1 text-xs font-semibold text-[#0b1a2b] shadow">
                  {item.price}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2b]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <button
                  onClick={() => setActive(item)}
                  className="absolute bottom-3 left-3 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-[#0b1a2b] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
                >
                  Quick View
                </button>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-white/70">{item.location}</p>
                <div className="mt-3 flex items-center gap-4 text-xs text-white/70">
                  <span>{item.beds} Beds</span>
                  <span>•</span>
                  <span>{item.baths} Baths</span>
                  <span>•</span>
                  <span>{item.area}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-[#0e2035]"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-56 md:h-full">
                  <img src={active.image} alt={active.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{active.title}</h3>
                  <p className="text-sm text-white/70">{active.location}</p>
                  <div className="mt-3 inline-flex items-center rounded-full bg-gradient-to-r from-[#C5A35A] to-[#A1843C] px-3 py-1 text-xs font-semibold text-[#0b1a2b]">{active.price}</div>
                  <p className="mt-4 text-white/80 text-sm leading-relaxed">{active.description}</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 text-center text-xs">
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <div className="text-white/60">Beds</div>
                      <div className="text-white font-semibold">{active.beds}</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <div className="text-white/60">Baths</div>
                      <div className="text-white font-semibold">{active.baths}</div>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                      <div className="text-white/60">Area</div>
                      <div className="text-white font-semibold">{active.area}</div>
                    </div>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href="#contact" className="inline-flex flex-1 items-center justify-center rounded-full bg-gradient-to-r from-[#C5A35A] to-[#A1843C] px-4 py-2 text-sm font-semibold text-[#0b1a2b]">Request Info</a>
                    <button onClick={() => setActive(null)} className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white">Close</button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
