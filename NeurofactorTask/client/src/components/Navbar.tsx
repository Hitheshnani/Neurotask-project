import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md shadow-md'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection('hero')}
              className="font-serif text-2xl md:text-3xl font-bold text-foreground hover-elevate active-elevate-2 transition-all duration-300 px-2 py-1 rounded-md"
              data-testid="link-logo"
            >
              Cafe South Indian
            </button>

            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection('about')}
                className="text-foreground hover-elevate active-elevate-2 transition-all duration-300 px-3 py-2 rounded-md font-medium"
                data-testid="link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-foreground hover-elevate active-elevate-2 transition-all duration-300 px-3 py-2 rounded-md font-medium"
                data-testid="link-menu"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('features')}
                className="text-foreground hover-elevate active-elevate-2 transition-all duration-300 px-3 py-2 rounded-md font-medium"
                data-testid="link-features"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-foreground hover-elevate active-elevate-2 transition-all duration-300 px-3 py-2 rounded-md font-medium"
                data-testid="link-testimonials"
              >
                Reviews
              </button>
              <Button
                onClick={() => scrollToSection('reservation')}
                variant="default"
                data-testid="button-reserve"
              >
                Reserve Table
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
              data-testid="button-menu-toggle"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md md:hidden"
          data-testid="menu-mobile"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-2xl font-medium text-foreground hover-elevate active-elevate-2 px-6 py-3 rounded-md transition-all duration-300"
              data-testid="link-about-mobile"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="text-2xl font-medium text-foreground hover-elevate active-elevate-2 px-6 py-3 rounded-md transition-all duration-300"
              data-testid="link-menu-mobile"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-2xl font-medium text-foreground hover-elevate active-elevate-2 px-6 py-3 rounded-md transition-all duration-300"
              data-testid="link-features-mobile"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-2xl font-medium text-foreground hover-elevate active-elevate-2 px-6 py-3 rounded-md transition-all duration-300"
              data-testid="link-testimonials-mobile"
            >
              Reviews
            </button>
            <Button
              onClick={() => scrollToSection('reservation')}
              variant="default"
              size="lg"
              data-testid="button-reserve-mobile"
            >
              Reserve Table
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
