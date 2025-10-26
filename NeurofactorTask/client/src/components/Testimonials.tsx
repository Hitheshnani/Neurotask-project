import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Food Blogger',
    content:
      'Absolutely divine! The masala dosa was the best I\'ve had outside of Chennai. The authentic flavors and warm atmosphere make this my go-to spot for South Indian cuisine.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Regular Customer',
    content:
      'The attention to detail is remarkable. From the crispy dosas to the perfectly fluffy idlis, every dish showcases true South Indian craftsmanship. Simply outstanding!',
    rating: 5,
  },
  {
    name: 'Aarthi Reddy',
    role: 'Local Resident',
    content:
      'This place feels like a slice of South India right in our neighborhood. The staff treats you like family, and the food is consistently exceptional. Can\'t recommend it enough!',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            What Our Guests Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers
            have to say about their experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card p-8 rounded-xl shadow-lg hover-elevate transition-all duration-300 hover:shadow-xl animate-fade-up"
              style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'backwards' }}
              data-testid={`card-testimonial-${index + 1}`}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              <p className="text-lg italic text-foreground/90 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
