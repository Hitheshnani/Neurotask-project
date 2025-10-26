import { Button } from '@/components/ui/button';
import { ScrollIndicator } from './ScrollIndicator';
import heroImage from '@assets/generated_images/Italian_dining_hero_image_7de0f6cc.png';

export function Hero() {
  const scrollToReservation = () => {
    const element = document.getElementById('reservation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Authentic South Indian dining experience with dosa and traditional food"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 py-32 text-center">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 animate-fade-up">
          Authentic South Indian Cuisine
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-up [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
          Experience the rich flavors of South India with our crispy dosas,
          fluffy idlis, and traditional recipes passed down through
          generations.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
          <Button
            onClick={scrollToReservation}
            variant="default"
            size="lg"
            className="bg-primary/90 backdrop-blur-md hover:bg-primary text-primary-foreground min-w-[200px]"
            data-testid="button-hero-reserve"
          >
            Reserve a Table
          </Button>
          <Button
            onClick={scrollToMenu}
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 min-w-[200px]"
            data-testid="button-hero-menu"
          >
            View Menu
          </Button>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
