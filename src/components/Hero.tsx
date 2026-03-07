import heroBg from "@/assets/hero-bg.jpg";
import WhatsAppButton from "@/components/WhatsAppButton";
import { CheckCircle, Truck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Productos naturales orgánicos" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-foreground text-sm font-semibold mb-6 backdrop-blur-sm">
            100% Orgánico & Natural
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Tu bienestar{" "}
            <em className="not-italic text-accent">comienza con lo natural</em>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-lg font-light leading-relaxed">
            Alimentación simple, consciente y real. Seleccionamos semillas, granos y frutos de alta calidad para nutrir tu cuerpo desde la raíz.
          </p>
          <WhatsAppButton text="Comprar por WhatsApp" />
          <div className="flex gap-6 mt-8">
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <CheckCircle className="w-4 h-4" />
              <span className="font-medium uppercase tracking-wide">Calidad Premium</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80 text-sm">
              <Truck className="w-4 h-4" />
              <span className="font-medium uppercase tracking-wide">Entregas en Pereira y Dosquebradas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
