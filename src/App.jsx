import { useEffect } from 'react';
import Hero from './components/Hero';
import FeaturedListings from './components/FeaturedListings';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0b1a2b] text-white font-inter">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mt-4 rounded-full bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10 border border-white/10 shadow-lg">
            <nav className="flex items-center justify-between px-6 py-3">
              <a href="#home" className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#C5A35A] to-[#8E6B2D]" />
                <span className="text-sm tracking-widest uppercase text-white/90">LuxEstate</span>
              </a>
              <ul className="hidden md:flex items-center gap-8 text-sm">
                <li><a className="hover:text-[#C5A35A] transition-colors" href="#home">Home</a></li>
                <li><a className="hover:text-[#C5A35A] transition-colors" href="#featured">Featured Listings</a></li>
                <li><a className="hover:text-[#C5A35A] transition-colors" href="#about">About Us</a></li>
                <li><a className="hover:text-[#C5A35A] transition-colors" href="#contact">Contact Us</a></li>
              </ul>
              <a href="#contact" className="hidden md:inline-flex items-center rounded-full bg-gradient-to-r from-[#C5A35A] to-[#A1843C] px-4 py-2 text-xs font-medium text-[#0b1a2b] shadow hover:shadow-lg transition-shadow">Schedule a Viewing</a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="home"><Hero /></section>
        <section id="featured"><FeaturedListings /></section>
        <section id="about"><AboutUs /></section>
        <section id="contact"><ContactUs /></section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-10 text-center text-xs text-white/60">
          © {new Date().getFullYear()} LuxEstate Realty. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
