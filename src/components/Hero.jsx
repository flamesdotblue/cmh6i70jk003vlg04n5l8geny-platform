import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1a2b]/50 via-[#0b1a2b]/60 to-[#0b1a2b]" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight"
            >
              Discover Luxury Living with
              <span className="block bg-gradient-to-r from-white to-[#C5A35A] bg-clip-text text-transparent">Timeless Elegance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-4 text-white/80 max-w-xl"
            >
              Premium homes and exclusive properties curated for those who value sophistication, comfort, and unmatched attention to detail.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="mt-8 flex items-center gap-4"
            >
              <a
                href="#featured"
                className="inline-flex items-center rounded-full bg-gradient-to-r from-[#C5A35A] to-[#A1843C] px-6 py-3 text-sm font-semibold text-[#0b1a2b] shadow-lg hover:shadow-xl transition-shadow"
              >
                Explore Featured Listings
              </a>
              <a
                href="#about"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm text-white hover:bg-white/10 transition-colors"
              >
                Learn About Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
