import { useState, useEffect } from "react";
import { MessageCircle, Search, Star, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import avenaIntegralImg from "@/assets/products/avena-integral.jpg";
import quinoaImg from "@/assets/products/quinoa.jpg";
import semillasCalabazaImg from "@/assets/products/semillas-de-calabaza.jpg";
import cerealesParaDesayunoImg from "@/assets/products/cereales-para-el-desayuno.jpg";
import fenogrecoImg from "@/assets/products/fenogreco.jpg";
import jengibreImg from "@/assets/products/jengibre.jpg";
import macaImg from "@/assets/products/maca.jpg";
import algarroboImg from "@/assets/products/algarrobo.jpg";
import harinasImg from "@/assets/products/harina.jpg";
import mielImg from "@/assets/products/miel.jpg";
import chocolateCacaoPuroImg from "@/assets/products/chocolate.jpg";
import salMarinaImg from "@/assets/products/sal-marina.jpg";
import vinagreManzanaImg from "@/assets/products/vinagre-manzana.jpg";
import aceiteCocoImg from "@/assets/products/aceite-de-coco.jpg";
import colagenoHidrolizadoMarinoImg from "@/assets/products/colageno.jpg";
import gerImg from "@/assets/products/germen-de-trigo.jpg";
import chiaImg from "@/assets/products/chia.jpg";
import linazaImg from "@/assets/products/linaza.jpg";
import ajonjoliImg from "@/assets/products/ajonjoli.jpg";
import semillasGirasolImg from "@/assets/products/semillas-de-girasol.jpg";
import almendrasImg from "@/assets/products/almendras.jpg";
import nuecesNogalImg from "@/assets/products/nueces-de-nogal.jpg";
import pistachosImg from "@/assets/products/pistachos.jpg";
import arandanosDeshidratadosImg from "@/assets/products/arandanos.jpg";
import curcumaImg from "@/assets/products/curcuma.jpg";
import levaduraImg from "@/assets/products/levadura-nutricional.jpg";




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

/* ── Tipo enriquecido con la categoría a la que pertenece ── */
interface ProductWithCategory extends Product {
  categoryEmoji: string;
  categoryTitle: string;
}

const allProducts: ProductWithCategory[] = categories.flatMap((cat) =>
  cat.products.map((p) => ({
    ...p,
    categoryEmoji: cat.emoji,
    categoryTitle: cat.title,
  }))
);

const ProductCatalog = () => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [open, setOpen] = useState(false);

  // Muestra spinner inmediato y abre el modal 3 s después de dejar de escribir
  useEffect(() => {
    if (query.trim().length < 2) {
      setDebouncedQuery("");
      setIsSearching(false);
      setOpen(false);
      return;
    }
    setIsSearching(true);
    const timer = setTimeout(() => {
      setDebouncedQuery(query);
      setIsSearching(false);
      setOpen(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [query]);

  const results = debouncedQuery.trim().length >= 2
    ? allProducts.filter((p) =>
        p.name.toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        (p.description ?? "").toLowerCase().includes(debouncedQuery.toLowerCase()) ||
        p.categoryTitle.toLowerCase().includes(debouncedQuery.toLowerCase())
      )
    : [];

  const handleQueryChange = (value: string) => {
    setQuery(value);
  };

  const handleClose = () => {
    setOpen(false);
    setQuery("");
    setDebouncedQuery("");
    setIsSearching(false);
  };

  return (
    <section id="productos" className="py-20 bg-background">
      <div className="container">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Catálogo completo</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Nuestros Productos
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Productos 100% naturales seleccionados para tu bienestar
          </p>
        </div>

        {/* Buscador */}
        <div className="relative max-w-lg mx-auto mb-16">
          {/* Lupa (izquierda) */}
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />

          <Input
            type="search"
            placeholder="Buscar producto… (ej: chía, jengibre, semillas)"
            value={query}
            onChange={(e) => handleQueryChange(e.target.value)}
            className="pl-12 pr-24 py-3 rounded-full border-border focus-visible:ring-primary text-base"
          />

          {/* Derecha: "Buscando..." mientras cuenta 3 s, o X para limpiar */}
          {isSearching ? (
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-xs font-medium pointer-events-none">
              Buscando...
            </span>
          ) : query ? (
            <button
              onClick={handleClose}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <X className="w-4 h-4" />
            </button>
          ) : null}
        </div>

        {/* Modal de resultados */}
        <Dialog open={open} onOpenChange={(v) => { if (!v) handleClose(); }}>
          <DialogContent className="max-w-3xl w-full max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-display text-xl">
                Resultados para &ldquo;{query}&rdquo;
              </DialogTitle>
            </DialogHeader>

            {results.length === 0 ? (
              <div className="py-12 text-center">
                <span className="text-5xl mb-4 block">🔍</span>
                <p className="text-muted-foreground">
                  No encontramos productos con ese nombre.
                </p>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground -mt-2 mb-4">
                  {results.length} {results.length === 1 ? "producto encontrado" : "productos encontrados"}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {results.map((product) => (
                    <ProductCard
                      key={product.name}
                      product={product}
                      categoryEmoji={product.categoryEmoji}
                    />
                  ))}
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Catálogo completo por categorías */}
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
