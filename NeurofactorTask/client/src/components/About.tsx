import interiorImage from '@assets/generated_images/Restaurant_interior_feature_image_46ce443b.png';

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={interiorImage}
                alt="Cozy South Indian restaurant interior with warm ambiance"
                className="w-full h-full object-cover aspect-[4/3]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 max-w-xl">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              Welcome to Cafe South Indian, where every dish tells a story of
              tradition, passion, and authentic South Indian flavors. For over three
              decades, our family has been serving the finest South Indian cuisine
              with recipes that have been lovingly preserved and perfected
              across generations.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed mb-4">
              From the backwaters of Kerala to the bustling streets of
              Chennai, we bring you the essence of South India in every bite. Our
              commitment to using only the freshest, locally-sourced ingredients
              ensures that each meal is a celebration of quality and taste.
            </p>
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              Join us for an unforgettable dining experience where tradition
              meets innovation, and every meal feels like coming home.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
