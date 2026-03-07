import { MessageCircle, Package, ShoppingBag } from "lucide-react";

const steps = [
  {
    icon: <ShoppingBag className="w-8 h-8" />,
    title: "Elige tus productos",
    description: "Explora nuestro catálogo y selecciona lo que necesitas.",
  },
  {
    icon: <MessageCircle className="w-8 h-8" />,
    title: "Escríbenos por WhatsApp",
    description: "Envíanos tu pedido y te confirmamos disponibilidad y precio.",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Recibe tu pedido",
    description: "Entregamos en Pereira y Dosquebradas. ¡Rápido y fresco!",
  },
];

const HowToBuy = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            ¿Cómo comprar?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {step.icon}
              </div>
              <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center mx-auto mb-3 text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowToBuy;
