import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function ContactUs() {
  return (
    <section className="relative py-24 bg-gradient-to-t from-[#0b1a2b] to-[#0f2238]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">Contact Us</h2>
            <p className="mt-2 text-white/70">We are here to assist with private showings, market insights, or tailored property searches.</p>

            <motion.form
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              className="mt-6 space-y-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FloatingLabelInput label="First Name" type="text" name="firstName" />
                <FloatingLabelInput label="Last Name" type="text" name="lastName" />
              </div>
              <FloatingLabelInput label="Email" type="email" name="email" />
              <FloatingLabelInput label="Phone" type="tel" name="phone" />
              <FloatingLabelTextarea label="Message" name="message" rows={5} />
              <div className="flex items-center justify-between">
                <div className="flex gap-3 text-white/70">
                  <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook size={18} /></a>
                  <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                  <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram size={18} /></a>
                  <a href="#" aria-label="LinkedIn" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                </div>
                <button type="submit" className="inline-flex items-center rounded-full bg-gradient-to-r from-[#C5A35A] to-[#A1843C] px-6 py-3 text-sm font-semibold text-[#0b1a2b] shadow-lg hover:shadow-xl transition-shadow">Send Inquiry</button>
              </div>
            </motion.form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="aspect-[16/10] w-full">
              <iframe
                title="Map"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086869011449!2d-122.40136352332695!3d37.789709112213266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f3d5b3c7%3A0x7a0e2755d3a6a2d!2sSalesforce%20Tower!5e0!3m2!1sen!2sus!4v1700000000000"
                allowFullScreen
              />
            </div>
            <div className="p-4 text-sm text-white/70">Visit our showroom: 415 Mission St, San Francisco, CA</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FloatingLabelInput({ label, name, type = 'text' }) {
  return (
    <label className="group relative block">
      <input
        name={name}
        type={type}
        placeholder=" "
        className="peer w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-transparent outline-none transition focus:border-[#C5A35A]/60 focus:bg-white/10"
      />
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-transparent px-1 text-white/60 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs peer-focus:text-[#C5A35A]">{label}</span>
    </label>
  );
}

function FloatingLabelTextarea({ label, name, rows = 4 }) {
  return (
    <label className="group relative block">
      <textarea
        name={name}
        placeholder=" "
        rows={rows}
        className="peer w-full resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder-transparent outline-none transition focus:border-[#C5A35A]/60 focus:bg-white/10"
      />
      <span className="pointer-events-none absolute left-3 top-3 bg-transparent px-1 text-white/60 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-[#C5A35A]">{label}</span>
    </label>
  );
}
