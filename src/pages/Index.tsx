import { Navbar, Footer } from "@/components/Layout";
import Hero from "@/components/Hero";
import ProductCatalog from "@/components/ProductCatalog";
import HowToBuy from "@/components/HowToBuy";
import Testimonials from "@/components/Testimonials";
import WhatsAppButton from "@/components/WhatsAppButton";
import PWAInstallButton from "@/components/PWAInstallButton";
import { MessageCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductCatalog />
      <HowToBuy />
      <Testimonials />

      {/* CTA final */}
      <section className="py-20 bg-primary text-primary-foreground text-center">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            ¿Listo para nutrir tu cuerpo?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-md mx-auto">
            Escríbenos por WhatsApp y te asesoramos con tu pedido.
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=573126063529&text=Quiero%20hacer%20un%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:bg-background/90 transition-colors shadow-card"
          >
            <MessageCircle className="w-5 h-5" />
            Hacer mi pedido
          </a>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=573126063529&text=Hola%2C%20quiero%20información"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-card-hover hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </a>

      {/* Floating PWA Install */}
      <PWAInstallButton />
    </div>
  );
};

export default Index;
