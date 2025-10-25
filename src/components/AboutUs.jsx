import { motion } from 'framer-motion';

const team = [
  {
    name: 'Ava Thompson',
    role: 'Principal Broker',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Liam Carter',
    role: 'Luxury Listings Specialist',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop'
  },
  {
    name: 'Sofia Martinez',
    role: 'Client Relations Director',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1600&auto=format&fit=crop'
  }
];

export default function AboutUs() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold">About Us</h2>
            <p className="mt-4 text-white/80 leading-relaxed">
              At LuxEstate, we specialize in premier properties that blend architectural excellence with unparalleled comfort. Our team brings decades of market expertise, personalized service, and a commitment to discretion.
            </p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold">Our Mission</h3>
              <p className="mt-2 text-white/70 text-sm">To curate exceptional homes and deliver an elevated, seamless experience for discerning buyers and sellers across the globe.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-white/5"
              >
                <div className="h-44 w-full overflow-hidden">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <div className="font-semibold">{member.name}</div>
                  <div className="text-xs text-white/70">{member.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <StatCard value="500+" label="Luxury Homes Sold" />
          <StatCard value="35+" label="Years Combined Experience" />
          <StatCard value="$1.2B" label="Total Sales Volume" />
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
      <div className="text-3xl font-semibold bg-gradient-to-r from-white to-[#C5A35A] bg-clip-text text-transparent">{value}</div>
      <div className="mt-1 text-white/70 text-sm">{label}</div>
    </div>
  );
}
