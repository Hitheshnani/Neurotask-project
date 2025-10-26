import { ChefHat, Leaf, Heart } from 'lucide-react';
import chefImage from '@assets/generated_images/Chef_preparing_food_feature_02e0cfea.png';
import ingredientsImage from '@assets/generated_images/Fresh_ingredients_feature_image_fba6faaf.png';

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference that passion, quality, and tradition make
            in every dish we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-center max-w-xl">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
              <ChefHat className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Expert Chefs
            </h3>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Our master chefs bring decades of experience from South India's finest
              kitchens, ensuring every dish is prepared with authentic
              techniques and unwavering attention to detail.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              From crispy dosas to fluffy idlis and aromatic briyani, every creation is a testament to culinary
              excellence.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={chefImage}
                alt="Professional South Indian chef preparing traditional food"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img
              src={ingredientsImage}
                alt="Fresh South Indian ingredients including rice, lentils, coconut, and spices"
              className="w-full h-full object-cover aspect-[4/3]"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col justify-center max-w-xl order-1 lg:order-2">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-6">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Fresh Ingredients
            </h3>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              We source only the finest, locally-grown produce and use
              specialty spices and ingredients directly from South India to guarantee
              authenticity and exceptional flavor in every bite.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Our commitment to quality means working with trusted suppliers who
              share our passion for excellence and traditional cooking practices.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-card p-8 md:p-12 rounded-3xl shadow-lg text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
            Made with Love
          </h3>
          <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Every dish we serve is prepared with the same love and care we'd
            use when cooking for our own family. It's this passion that
            transforms simple ingredients into unforgettable dining experiences
            that keep our guests coming back time and time again.
          </p>
        </div>
      </div>
    </section>
  );
}
