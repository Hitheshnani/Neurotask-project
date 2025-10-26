import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Cafe South Indian
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              Bringing authentic South Indian flavors to your table since 1990.
              Experience the taste of tradition.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-foreground/70 hover-elevate active-elevate-2 inline-block px-2 py-1 rounded-md transition-all duration-300"
                  data-testid="link-footer-about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="text-foreground/70 hover-elevate active-elevate-2 inline-block px-2 py-1 rounded-md transition-all duration-300"
                  data-testid="link-footer-menu"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#reservation"
                  className="text-foreground/70 hover-elevate active-elevate-2 inline-block px-2 py-1 rounded-md transition-all duration-300"
                  data-testid="link-footer-reservation"
                >
                  Reservations
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-foreground/70 hover-elevate active-elevate-2 inline-block px-2 py-1 rounded-md transition-all duration-300"
                  data-testid="link-footer-reviews"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Hours</h4>
            <div className="text-foreground/70 space-y-1">
              <p>Mon - Fri: 11:00 AM - 10:00 PM</p>
              <p>Saturday: 10:00 AM - 11:00 PM</p>
              <p>Sunday: 10:00 AM - 9:00 PM</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Stay Connected
            </h4>
            <p className="text-foreground/70 mb-4">
              Follow us on social media for updates and special offers.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-all duration-300"
                aria-label="Facebook"
                data-testid="link-social-facebook"
              >
                <Facebook className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-all duration-300"
                aria-label="Instagram"
                data-testid="link-social-instagram"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-muted hover-elevate active-elevate-2 flex items-center justify-center transition-all duration-300"
                aria-label="Twitter"
                data-testid="link-social-twitter"
              >
                <Twitter className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-card-border pt-8 text-center">
          <p className="text-foreground/70">
            &copy; {currentYear} Cafe South Indian. All rights reserved. Crafted with
            passion and dedication.
          </p>
        </div>
      </div>
    </footer>
  );
}
