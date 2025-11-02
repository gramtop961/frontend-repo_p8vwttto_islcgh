import { motion } from 'framer-motion';
import { Rocket, Shield, Zap, Headphones } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Instant Delivery',
    desc: 'Your boosts are applied instantly after payment.'
  },
  {
    icon: Shield,
    title: '100% Safe',
    desc: "Completely safe and aligned with platform policies."
  },
  {
    icon: Zap,
    title: 'Full Duration',
    desc: 'Guaranteed boosts for the full 30-day or 3-month duration.'
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    desc: 'Our team is always here to help you.'
  }
];

export default function Highlights() {
  return (
    <section id="features" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#3a5a99]"
        >
          Why OnlyBoosts?
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group rounded-2xl p-6 bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#a0c4ff]/30 text-[#3a5a99] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <f.icon />
              </div>
              <h3 className="text-lg font-semibold text-[#3a5a99]">{f.title}</h3>
              <p className="text-[#3a5a99]/80 mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <div className="mt-20" id="how">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-center text-[#3a5a99]"
          >
            How It Works
          </motion.h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Choose Your Package',
                desc: 'Pick the plan that fits your server.'
              },
              {
                step: '2',
                title: 'Enter Your Server Info',
                desc: 'Provide your email and invite link.'
              },
              {
                step: '3',
                title: 'Receive Your Boosts',
                desc: 'We deliver promptly and safely.'
              }
            ].map((s, idx) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="rounded-2xl p-6 bg-white/50 backdrop-blur-xl border border-white/60 shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-[#ffb7c5]/50 text-[#3a5a99] flex items-center justify-center font-semibold">
                  {s.step}
                </div>
                <h4 className="mt-4 text-lg font-semibold text-[#3a5a99]">{s.title}</h4>
                <p className="text-[#3a5a99]/80">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ inline */}
        <div className="mt-20" id="faq">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-semibold text-center text-[#3a5a99]"
          >
            Frequently Asked Questions
          </motion.h3>
          <div className="mt-8 space-y-4">
            {[
              {
                q: 'Is this service safe for my server?',
                a: 'Yes. We use safe, reliable methods and protect your privacy at every step.'
              },
              {
                q: 'How long do the boosts last?',
                a: 'All boosts are guaranteed for their full duration (30 days or 3 months based on the option).'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, crypto, and more via our secure checkout.'
              },
              {
                q: 'How fast is delivery?',
                a: 'Typically within minutes after your payment is confirmed.'
              }
            ].map((item, idx) => (
              <details key={item.q} className="group rounded-xl bg-white/50 backdrop-blur-xl border border-white/60 p-5">
                <summary className="cursor-pointer list-none font-medium text-[#3a5a99] flex items-center justify-between">
                  <span>{item.q}</span>
                  <span className="ml-4 text-[#3a5a99]/60 group-open:rotate-180 transition-transform">⌄</span>
                </summary>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 text-[#3a5a99]/80"
                >
                  {item.a}
                </motion.p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
