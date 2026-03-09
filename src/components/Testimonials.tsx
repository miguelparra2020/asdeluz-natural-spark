import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María López",
    location: "Pereira",
    text: "Los productos de As de Luz son increíbles. La quinoa y la chía son de excelente calidad. ¡Se nota la diferencia!",
    rating: 5,
  },
  {
    name: "Carlos Gómez",
    location: "Dosquebradas",
    text: "Pedí colágeno marino y miel pura. Me llegó súper rápido y el servicio por WhatsApp fue muy amable.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    location: "Pereira",
    text: "La levadura nutricional y el aceite de coco son mis favoritos. Productos frescos y 100% naturales.",
    rating: 5,
  },
  {
    name: "Jorge Ramírez",
    location: "Dosquebradas",
    text: "Excelente variedad de semillas y frutos secos. Los precios son muy justos y la atención es de primera.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Testimonios
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            La satisfacción de quienes confían en nosotros es nuestra mayor motivación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating
                        ? "fill-accent text-accent"
                        : "text-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed flex-1 mb-4">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground text-sm">
                  {t.name}
                </p>
                <p className="text-muted-foreground text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
