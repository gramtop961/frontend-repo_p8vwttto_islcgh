import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-[#fdfaff] text-[#3a5a99]">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <Pricing />
      </main>
      <footer className="mt-20 border-t border-white/70 bg-white/40 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#3a5a99]/80">© 2024 OnlyBoosts.xyz. All rights reserved.</div>
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-[#1e3a8a] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#1e3a8a] transition-colors">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
