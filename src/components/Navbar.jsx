import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur-lg bg-white/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div onClick={() => goTo('top')} className="font-semibold text-xl tracking-tight text-[#3a5a99] cursor-pointer">
          OnlyBoosts.xyz
        </div>
        <div className="hidden md:flex items-center gap-8 text-[#3a5a99]">
          <button onClick={() => goTo('features')} className="hover:text-[#1e3a8a] transition-colors">Features</button>
          <button onClick={() => goTo('pricing')} className="hover:text-[#1e3a8a] transition-colors">Pricing</button>
          <button onClick={() => goTo('faq')} className="hover:text-[#1e3a8a] transition-colors">FAQ</button>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={() => goTo('pricing')} className="rounded-full bg-[#a0c4ff] text-[#3a5a99] font-medium px-4 py-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
