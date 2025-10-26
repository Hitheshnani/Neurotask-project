import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Menu } from '@/components/Menu';
import { Features } from '@/components/Features';
import { Testimonials } from '@/components/Testimonials';
import { Reservation } from '@/components/Reservation';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Features />
        <Testimonials />
        <Reservation />
      </main>
      <Footer />
    </div>
  );
}
