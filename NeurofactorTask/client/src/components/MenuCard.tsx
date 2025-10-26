interface MenuCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  category: string;
}

export function MenuCard({ image, name, description, price, category }: MenuCardProps) {
  return (
    <div
      className="group bg-card rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover-elevate"
      data-testid={`card-menu-${name.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={`${name} - ${description}`}
          className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-110"
          loading="lazy"
        />
        <div className="absolute top-4 left-4">
          <span className="inline-block bg-primary/90 backdrop-blur-sm text-primary-foreground text-sm font-medium px-3 py-1 rounded-full">
            {category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground flex-1">
            {name}
          </h3>
          <span className="font-bold text-lg text-primary whitespace-nowrap">
            {price}
          </span>
        </div>
        <p className="text-base text-foreground/70 leading-relaxed line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
