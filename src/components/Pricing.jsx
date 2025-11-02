import { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, CreditCard, X, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Starter Pack',
    boosts: 2,
    price: 0.7,
    highlight: false
  },
  {
    name: 'Popular Pack',
    boosts: 14,
    price: 4.9,
    highlight: true
  },
  {
    name: 'Mega Pack',
    boosts: 30,
    price: 10.5,
    highlight: false
  }
];

export default function Pricing() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(plans[1]);
  const [email, setEmail] = useState('');
  const [invite, setInvite] = useState('');

  const openCheckout = (p) => {
    setSelected(p);
    setOpen(true);
  };

  return (
    <section id="pricing" className="relative py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#a0c4ff]/10 to-[#ffb7c5]/10 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-[#3a5a99]"
        >
          Simple, Transparent Pricing
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className={`relative rounded-3xl p-6 bg-white/60 backdrop-blur-2xl border border-white/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all ${
                p.highlight ? 'ring-2 ring-[#ffb7c5]' : ''
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold tracking-wide px-3 py-1 rounded-full bg-[#ffb7c5] text-[#3a5a99] shadow">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-semibold text-[#3a5a99]">{p.name}</h3>
              <p className="mt-2 text-4xl font-extrabold text-[#3a5a99]">€{p.price.toFixed(2)}</p>
              <p className="text-[#3a5a99]/70">{p.boosts} Server Boosts</p>
              <ul className="mt-4 space-y-2 text-[#3a5a99]/85">
                {['Instant Delivery', '30-Day Duration', '24/7 Support'].map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-[#a0c4ff]" /> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => openCheckout(p)}
                className={`mt-6 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 font-medium transition-all shadow-sm hover:shadow-md ${
                  p.highlight
                    ? 'bg-[#3a5a99] text-white hover:scale-[1.02]'
                    : 'bg-white/80 text-[#3a5a99] border border-white/70 hover:-translate-y-0.5'
                }`}
              >
                <CreditCard className="w-5 h-5" /> Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Checkout Modal (Sellath placeholder) */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="relative w-full max-w-lg rounded-2xl bg-white/60 backdrop-blur-2xl border border-white/70 shadow-2xl p-6"
          >
            <button
              aria-label="Close"
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 p-2 rounded-full bg-white/70 hover:bg-white text-[#3a5a99] shadow"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 text-[#3a5a99]">
              <CreditCard className="w-5 h-5" />
              <h4 className="text-lg font-semibold">Checkout</h4>
            </div>
            <p className="mt-1 text-[#3a5a99]/80">
              Purchasing: <span className="font-semibold text-[#3a5a99]">{selected.name}</span> — {selected.boosts} Boosts • €{selected.price.toFixed(2)}
            </p>

            <form
              className="mt-4 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Simulated handoff to Sellath
                alert(`Proceeding to payment for ${selected.name}\nEmail: ${email}\nInvite: ${invite}`);
              }}
            >
              <div>
                <label className="block text-sm font-medium text-[#3a5a99]">Your Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1 w-full rounded-xl border border-white/70 bg-white/80 px-4 py-3 text-[#3a5a99] placeholder:text-[#3a5a99]/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#a0c4ff]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#3a5a99]">Your Discord Server Invite Link</label>
                <input
                  type="text"
                  required
                  value={invite}
                  onChange={(e) => setInvite(e.target.value)}
                  placeholder="discord.gg/your-server"
                  className="mt-1 w-full rounded-xl border border-white/70 bg-white/80 px-4 py-3 text-[#3a5a99] placeholder:text-[#3a5a99]/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#ffb7c5]"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#3a5a99] text-white px-4 py-3 font-medium shadow-lg shadow-[#3a5a99]/20 hover:scale-[1.01] active:scale-[0.99] transition-transform"
              >
                Proceed to Payment <ArrowRight className="w-5 h-5" />
              </button>
            </form>
            <p className="mt-3 text-xs text-[#3a5a99]/60">
              This is a demo modal illustrating the Sellath checkout handoff.
            </p>
          </motion.div>
        </div>
      )}
    </section>
  );
}
