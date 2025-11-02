import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const goToPricing = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="top" className="relative pt-28 overflow-hidden">
      {/* Slow animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a0c4ff]/40 via-[#fdfaff] to-[#ffb7c5]/40 animate-[gradient_14s_ease_infinite] pointer-events-none" />

      {/* Spline 3D scene */}
      <div className="relative mx-auto max-w-7xl grid lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:py-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-[#3a5a99]"
          >
            The Easiest Way to Boost Your Discord Server.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg md:text-xl text-[#3a5a99]/80 max-w-2xl"
          >
            Get premium, reliable server boosts in under 5 minutes. Safe, fast, and affordable.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex gap-4"
          >
            <button
              onClick={goToPricing}
              className="rounded-full bg-[#3a5a99] text-white px-6 py-3 font-medium shadow-lg shadow-[#3a5a99]/20 hover:scale-[1.02] active:scale-[0.99] transition-transform"
            >
              View Plans
            </button>
            <a
              href="#features"
              className="rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#3a5a99] px-6 py-3 font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              Learn More
            </a>
          </motion.div>
        </div>
        <div className="relative h-[380px] md:h-[520px] lg:h-[600px]">
          <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* Subtle radial glow overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,_rgba(160,196,255,0.25),_transparent_60%)]" />
        </div>
      </div>

      <style>
        {`
        @keyframes gradient {
          0% { filter: hue-rotate(0deg); }
          50% { filter: hue-rotate(8deg); }
          100% { filter: hue-rotate(0deg); }
        }
        `}
      </style>
    </section>
  );
}
