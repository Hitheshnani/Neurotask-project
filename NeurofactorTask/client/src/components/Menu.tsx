import { useQuery } from '@tanstack/react-query';
import { MenuCard } from './MenuCard';
import type { MenuItem } from '@shared/schema';

// Import placeholders - Replace with actual South Indian images when available
import placeholderImg from '@assets/generated_images/Bruschetta_appetizer_menu_item_7d6852ea.png';
import carbonaraImg from '@assets/generated_images/Spaghetti_carbonara_menu_item_6eafb95e.png';
import pizzaImg from '@assets/generated_images/Margherita_pizza_menu_item_9c29a255.png';
import lasagnaImg from '@assets/generated_images/Lasagna_bolognese_menu_item_9a5c60ef.png';
import capreseImg from '@assets/generated_images/Caprese_salad_menu_item_75dc50b9.png';
import risottoImg from '@assets/generated_images/Mushroom_risotto_menu_item_656b44aa.png';
import tiramisuImg from '@assets/generated_images/Tiramisu_dessert_menu_item_357fbe20.png';
import alfredoImg from '@assets/generated_images/Fettuccine_alfredo_menu_item_9f0a2659.png';
import parmigianaImg from '@assets/generated_images/Chicken_parmigiana_menu_item_302a2410.png';
import linguineImg from '@assets/generated_images/Seafood_linguine_menu_item_9cedb6a0.png';
import gelatoImg from '@assets/generated_images/Gelato_dessert_menu_item_56732c35.png';

/**
 * TODO: Add actual South Indian food images to attached_assets/generated_images/ with these exact names:
 * - dosa.png
 * - idli.png  
 * - masaladosa.png
 * - uttapam.png
 * - ravadosa.png
 * - vada.png
 * - pongal.png
 * - briyani.png
 * - chickencurry.png
 * - payasam.png
 * - gulabjamun.png
 * 
 * See IMAGE_SETUP_INSTRUCTIONS.md for details
 */

const imageMap: Record<string, string> = {
  // Using actual South Indian food images from online sources
  'dosa': 'https://png.pngtree.com/background/20230613/original/pngtree-plate-of-dosa-with-sauce-on-top-picture-image_3422751.jpg',
  'idli': 'https://img.freepik.com/premium-photo/idli-with-sambar-traditional-south-indian-breakfast-with-steamed-rice-cakes-spicy-sambar_875755-7352.jpg',
  'masaladosa': 'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg',
  'uttapam': 'https://2.bp.blogspot.com/-zdX_A9LFr_U/VcFNBLMCtOI/AAAAAAAAC6k/JuM9YOwuOR0/s1600/uttapam3.jpg',
  'ravadosa': 'https://i.pinimg.com/originals/30/f0/e3/30f0e387e23f67e13610b8110d897663.jpg',
  'vada': 'https://img.freepik.com/premium-photo/sambar-vada-medu-vada-popular-south-indian-food-served-with-green-red-coconut-chutney-moody-background-selective-focus_466689-59611.jpg?w=2000',
  'pongal': risottoImg,
  'briyani': 'https://tse3.mm.bing.net/th/id/OIP.fV30Bcr3SRXRHsSEJTubugHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
  'chickencurry': 'https://th.bing.com/th/id/R.15410bb90a5bee24487b6d2a44244657?rik=ECVliBK0U19X8g&riu=http%3a%2f%2fi0.wp.com%2fwww.valerieskeepers.com%2fwp-content%2fuploads%2f2015%2f03%2fIndian-Chicken-curry-2.jpg&ehk=gYATxbfDejXAHN9OV%2fivUZydDEWRgc%2f6JFsxHO97BZg%3d&risl=&pid=ImgRaw&r=0',
  'payasam': 'https://tse3.mm.bing.net/th/id/OIP.5VInbgHt4NZRC1Xqzz5-aQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
  'gulabjamun': 'https://bakewithzoha.com/wp-content/uploads/2023/04/gulab-jamun-3-scaled.jpg',
};

export function Menu() {
  const { data: menuItems, isLoading, isError } = useQuery<MenuItem[]>({
    queryKey: ['/api/menu'],
  });

  return (
    <section id="menu" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Our Menu
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of authentic South Indian dishes,
            each prepared with passion and the finest ingredients.
          </p>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl overflow-hidden shadow-lg animate-pulse"
              >
                <div className="aspect-[4/3] bg-muted"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 bg-muted rounded"></div>
                  <div className="h-4 bg-muted rounded w-3/4"></div>
                  <div className="h-4 bg-muted rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-12">
            <p className="text-lg text-foreground/70">
              Unable to load menu items. Please try again later.
            </p>
          </div>
        )}

        {menuItems && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {menuItems.map((item, index) => (
              <div
                key={item.id}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'backwards' }}
              >
                <MenuCard
                  image={imageMap[item.imageId] || bruschettaImg}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  category={item.category}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
