import { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

type Category = 'all' | 'women' | 'men' | 'accessories';

interface Product {
  id: number;
  name: string;
  category: Category;
  image: string;
  description: string;
  price: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'የባህል ቀሚስ Traditional Habesha Kemis',
    category: 'women',
    image: 'https://i.imgur.com/zR4qrAN.jpeg',
    description: 'Elegant white kemis with handwoven golden tibeb border',
    price: 'Contact for pricing'
  },
  {
    id: 2,
    name: 'ነጠላ Netela',
    category: 'women',
    image: 'https://i.imgur.com/og05sJd.jpeg',
    description: 'Premium cotton netela with intricate traditional patterns',
    price: 'Contact for pricing'
  },
  {
    id: 3,
    name: 'የወንድ Men\'s Cultural Outfit',
    category: 'men',
    image: 'https://i.imgur.com/hrcd3ao.jpeg',
    description: 'Classic men\'s traditional suit with embroidered details',
    price: 'Contact for pricing'
  },
  {
    id: 4,
    name: 'ለሰርግ ለፕሮግራም Ceremonial Kemis',
    category: 'women',
    image: 'https://i.imgur.com/pd4hz1S.jpeg',
    description: 'Special occasion kemis with elaborate border designs',
    price: 'Contact for pricing'

  },
  {
    id: 6,
    name: 'የእለት ልብስ Everyday Kemis',
    category: 'women',
    image: 'https://i.imgur.com/9oSfvIM.jpeg',
    description: 'Comfortable and elegant daily wear kemis',
    price: 'Contact for pricing'
  },
  {
    id: 7,
    name: 'ልዩ ቀሚስ Special Kemis',
    category: 'women',
    image: 'https://i.imgur.com/0RSkm1S.jpeg',
    description: 'Unique design with traditional Ethiopian patterns',
    price: 'Contact for pricing'
  },
  {
    id: 8,
    name: 'የባህል አለባበስ Cultural Attire',
    category: 'women',
    image: 'https://i.imgur.com/EMREC6G.jpeg',
    description: 'Authentic Ethiopian traditional clothing',
    price: 'Contact for pricing'
  },
  {
    id: 9,
    name: 'የእጅ ሥራ Handcrafted Kemis',
    category: 'women',
    image: 'https://i.imgur.com/UPXtfOg.jpeg',
    description: 'Expertly handwoven with premium materials',
    price: 'Contact for pricing'
  },
  {
    id: 10,
    name: 'ለየት ያሉ ባህላዊ ልብስ Heritage Dress',
    category: 'women',
    image: 'https://i.imgur.com/JrV58jr.jpeg',
    description: 'Celebrates Ethiopian heritage with elegant design',
    price: 'Contact for pricing'
  },
  {
    id: 11,
    name: 'ሽፎኖች Chiffon Kemis',
    category: 'women',
    image: 'https://i.imgur.com/YEjgXJx.jpeg',
    description: 'Artistic traditional dress with modern elegance',
    price: 'Contact for pricing'
  },
  {
    id: 12,
    name: 'ሽፎን Chiffon',
    category: 'women',
    image: 'https://imgur.com/kkAFLHN.jpeg',
    description: 'Sophisticated kemis with traditional craftsmanship',
    price: 'Contact for pricing'
  },
  {
    id: 13,
    name: 'የዱባይ እና የህንድ ሽፎኖች Dubai and Indian Chiffon',
    category: 'women',
    image: 'https://imgur.com/YYXdigw.jpeg',
    description: 'Timeless Ethiopian dress with exquisite detailing',
    price: 'Contact for pricing'
  },
  {
    id: 14,
    name: 'ባህላዊ ጌጣጌጥ Traditional Jewelry Set',
    category: 'accessories',
    image: 'https://i.imgur.com/JAQEbkT.jpeg',
    description: 'Authentic Ethiopian jewelry with cultural significance',
    price: 'Contact for pricing'
  },
  {
    id: 15,
    name: 'ለሰርግ Cultural Weeding Accessories',
    category: 'accessories',
    image: 'https://imgur.com/bcpO7Sh.jpeg',
    description: 'Handcrafted traditional Ethiopian accessories',
    price: 'Contact for pricing'
  },
  {
    id: 16,
    name: 'መስቀል የአንገት ሃብል Cross Pendant Necklace',
    category: 'accessories',
    image: 'https://imgur.com/udsiYip.jpeg',
    description: 'Beautiful traditional jewelry celebrating Ethiopian culture',
    price: 'Contact for pricing'
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'women', label: 'Women' },
    { id: 'men', label: 'Men' },
    { id: 'accessories', label: 'Accessories' },
  ];

  return (
    <section id="products" className="bg-white py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Our Collection
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600">
            Discover our carefully curated selection of authentic Ethiopian traditional clothing
          </p>
          <div className="mx-auto h-1 w-24 bg-amber-500"></div>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`rounded-full px-8 py-3 font-semibold transition-all ${
                activeCategory === cat.id
                  ? 'bg-amber-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-2xl"
            >
              <div className="relative h-80 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900">{product.name}</h3>
                <p className="mb-4 text-sm text-gray-600">{product.description}</p>
                <p className="mb-4 text-lg font-semibold text-amber-600">{product.price}</p>

                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-amber-500 px-6 py-3 font-semibold text-white transition-all hover:bg-amber-600"
                >
                  <ShoppingBag className="h-5 w-5" />
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
