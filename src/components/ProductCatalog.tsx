import { MessageCircle, Star } from "lucide-react";
import avenaIntegralImg from "@/assets/products/avena-integral.png";
import quinoaImg from "@/assets/products/quinoa.png";
import semillasCalabazaImg from "@/assets/products/semillas-de-calabaza.png";
import cerealesParaDesayunoImg from "@/assets/products/cereales-para-el-desayuno.png";
import fenogrecoImg from "@/assets/products/fenogreco.png";
import jengibreImg from "@/assets/products/jengibre.png";
import macaImg from "@/assets/products/maca.png";
import algarroboImg from "@/assets/products/algarrobo.png";
import harinasImg from "@/assets/products/harina.png";
import mielImg from "@/assets/products/miel.png";
import chocolateCacaoPuroImg from "@/assets/products/chocolate.png";
import salMarinaImg from "@/assets/products/sal-marina.png";
import vinagreManzanaImg from "@/assets/products/vinagre-manzana.png";
import aceiteCocoImg from "@/assets/products/aceite-de-coco.png";
import colagenoHidrolizadoMarinoImg from "@/assets/products/colageno.png";
import gerImg from "@/assets/products/germen-de-trigo.png";
import chiaImg from "@/assets/products/chia.png";
import linazaImg from "@/assets/products/linaza.png";
import ajonjoliImg from "@/assets/products/ajonjoli.png";
import semillasGirasolImg from "@/assets/products/semillas-de-girasol.png";
import almendrasImg from "@/assets/products/almendras.png";
import nuecesNogalImg from "@/assets/products/nueces-de-nogal.png";
import pistachosImg from "@/assets/products/pistachos.png";
import arandanosDeshidratadosImg from "@/assets/products/arandanos.png";
import curcumaImg from "@/assets/products/curcuma.png";
import levaduraImg from "@/assets/products/levadura-nutricional.png";




interface Product {
  name: string;
  description?: string;
  image?: string;
}

interface Category {
  emoji: string;
  title: string;
  products: Product[];
}

const categories: Category[] = [
  {
    emoji: "🌾",
    title: "Cereales, granos y derivados",
    products: [
      { name: "Avena integral", description: "Fuente natural de fibra y energía para tu día", image: avenaIntegralImg },
      { name: "Cereales para el desayuno", description: "Mezcla nutritiva para empezar con energía", image: cerealesParaDesayunoImg },
      { name: "Quinoa", description: "Superalimento andino rico en proteínas y minerales", image: quinoaImg },
      { name: "Germen de trigo", description: "Concentrado de vitaminas del grupo B y vitamina E", image: gerImg },
    ],
  },
  {
    emoji: "🌰",
    title: "Semillas y frutos secos",
    products: [
      { name: "Chía", description: "Rica en omega-3 y fibra soluble", image: chiaImg },
      { name: "Linaza", description: "Semilla dorada con alto contenido en fibra", image: linazaImg},
      { name: "Ajonjolí (sésamo)", description: "Fuente de calcio y minerales esenciales",  image: ajonjoliImg },
      { name: "Semillas de calabaza", description: "Ricas en zinc y magnesio natural", image: semillasCalabazaImg },
      { name: "Semillas de girasol", description: "Snack nutritivo con vitamina E", image: semillasGirasolImg },
      { name: "Almendras", description: "Fruto seco premium rico en proteínas", image: almendrasImg },
      { name: "Nueces de nogal", description: "Fuente natural de omega-3 y antioxidantes", image: nuecesNogalImg },
      { name: "Pistachos", description: "Fruto seco con alto valor nutricional", image: pistachosImg },
      { name: "Arándanos deshidratados", description: "Antioxidantes naturales en cada porción", image: arandanosDeshidratadosImg },
    ],
  },
  {
    emoji: "🌿",
    title: "Especias y superalimentos",
    products: [
      { name: "Cúrcuma", description: "Antiinflamatorio natural con curcumina activa", image: curcumaImg },
      { name: "Fenogreco", description: "Semilla tradicional con múltiples beneficios", image: fenogrecoImg },
      { name: "Jengibre", description: "Raíz con propiedades digestivas y antiinflamatorias", image: jengibreImg },
      { name: "Maca", description: "Superalimento peruano para energía y vitalidad", image: macaImg },
      { name: "Algarrobo", description: "Alternativa natural al cacao, rica en fibra", image: algarroboImg },
    ],
  },
  {
    emoji: "🥖",
    title: "Harinas y levaduras",
    products: [
      { name: "Harinas (varias)", description: "Harinas naturales para repostería saludable", image: harinasImg },
      { name: "Levadura nutricional", description: "Fuente vegana de vitamina B12 y proteínas", image: levaduraImg },
    ],
  },
  {
    emoji: "🍯",
    title: "Endulzantes y productos naturales",
    products: [
      { name: "Miel", description: "Miel pura de abejas, endulzante 100% natural", image: mielImg },
      { name: "Chocolate / cacao puro", description: "Cacao sin procesar, rico en antioxidantes", image: chocolateCacaoPuroImg },
    ],
  },
  {
    emoji: "🧂",
    title: "Condimentos y cocina",
    products: [
      { name: "Sal marina", description: "Uso culinario y baños, sin aditivos", image: salMarinaImg },
      { name: "Vinagre de manzana", description: "Orgánico, ideal para salud digestiva", image: vinagreManzanaImg },
    ],
  },
  {
    emoji: "🥥",
    title: "Aceites",
    products: [
      { name: "Aceite de coco", description: "Virgen extra, multiusos para cocina y cuidado personal", image: aceiteCocoImg },
    ],
  },
  {
    emoji: "💊",
    title: "Suplementos",
    products: [
      { name: "Colágeno hidrolizado marino", description: "Para piel, cabello, uñas y articulaciones", image: colagenoHidrolizadoMarinoImg },
    ],
  },
];

const ProductCard = ({ product, categoryEmoji }: { product: Product; categoryEmoji: string }) => {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=573126063529&text=Hola%2C%20me%20interesa%20${encodeURIComponent(product.name)}`;

  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group flex flex-col">
      {/* Emoji/image area */}
      <div className="relative bg-secondary flex items-center justify-center h-40 overflow-hidden">
        {product.image ? (
          <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        ) : (
          <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{categoryEmoji}</span>
        )}
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
          <Star className="w-3 h-3" />
          Natural
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-foreground text-base leading-tight mb-1">
          {product.name}
        </h3>
        <p className="text-primary font-bold text-lg mb-2">Consultar precio</p>
        {product.description && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
            {product.description}
          </p>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-sm py-2.5 rounded-full transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Ver producto
        </a>
      </div>
    </div>
  );
};

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

        {categories.map((cat) => (
          <div key={cat.title} className="mb-14">
            <h3 className="font-display font-bold text-2xl text-foreground mb-6 flex items-center gap-3">
              <span className="text-3xl">{cat.emoji}</span>
              {cat.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {cat.products.map((product) => (
                <ProductCard key={product.name} product={product} categoryEmoji={cat.emoji} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductCatalog;
