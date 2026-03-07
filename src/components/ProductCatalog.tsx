import { Wheat, Nut, Leaf, CakeSlice, Droplets, FlaskConical, Pill, Cookie } from "lucide-react";

interface Product {
  name: string;
}

interface Category {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  products: Product[];
}

const categories: Category[] = [
  {
    icon: <Wheat className="w-6 h-6" />,
    emoji: "🌾",
    title: "Cereales, granos y derivados",
    products: [
      { name: "Avena integral" },
      { name: "Cereales para el desayuno" },
      { name: "Quinoa" },
      { name: "Germen de trigo" },
    ],
  },
  {
    icon: <Nut className="w-6 h-6" />,
    emoji: "🌰",
    title: "Semillas y frutos secos",
    products: [
      { name: "Chía" },
      { name: "Linaza" },
      { name: "Ajonjolí (sésamo)" },
      { name: "Semillas de calabaza" },
      { name: "Semillas de girasol" },
      { name: "Almendras" },
      { name: "Nueces de nogal" },
      { name: "Pistachos" },
      { name: "Arándanos deshidratados" },
    ],
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    emoji: "🌿",
    title: "Especias y superalimentos",
    products: [
      { name: "Cúrcuma" },
      { name: "Fenogreco" },
      { name: "Jengibre" },
      { name: "Maca" },
      { name: "Algarrobo" },
    ],
  },
  {
    icon: <CakeSlice className="w-6 h-6" />,
    emoji: "🥖",
    title: "Harinas y levaduras",
    products: [
      { name: "Harinas (varias)" },
      { name: "Levadura nutricional" },
    ],
  },
  {
    icon: <Droplets className="w-6 h-6" />,
    emoji: "🍯",
    title: "Endulzantes y productos naturales",
    products: [
      { name: "Miel" },
      { name: "Chocolate / cacao puro" },
    ],
  },
  {
    icon: <FlaskConical className="w-6 h-6" />,
    emoji: "🧂",
    title: "Condimentos y cocina",
    products: [
      { name: "Sal marina" },
      { name: "Vinagre de manzana" },
    ],
  },
  {
    icon: <Cookie className="w-6 h-6" />,
    emoji: "🥥",
    title: "Aceites",
    products: [
      { name: "Aceite de coco" },
    ],
  },
  {
    icon: <Pill className="w-6 h-6" />,
    emoji: "💊",
    title: "Suplementos",
    products: [
      { name: "Colágeno hidrolizado marino" },
    ],
  },
];

const ProductCatalog = () => {
  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Catálogo completo</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Nuestros Productos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Productos 100% naturales seleccionados para tu bienestar
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-lg p-6 shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {cat.icon}
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm leading-tight">
                  {cat.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {cat.products.map((product) => (
                  <li key={product.name} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    {product.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCatalog;
