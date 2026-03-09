import WhatsAppButton from "@/components/WhatsAppButton";
import comercyoLogo from "@/assets/comercyo-logo.png";
import asDeLuzLogo from "@/assets/as-de-luz-logo.png";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
    <div className="container flex items-center justify-between h-16">
      <div className="flex items-center gap-2">
        <img src={asDeLuzLogo} alt="As de luz" className="h-10 w-10 rounded-full object-cover" />
        <span className="font-display font-bold text-lg text-foreground">As de luz</span>
      </div>
      <div className="hidden md:flex items-center gap-8">
        <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">Inicio</a>
        <a href="#productos" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">Productos</a>
      </div>
      <WhatsAppButton text="WhatsApp" />
    </div>
  </nav>
);

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <img src={asDeLuzLogo} alt="As de luz" className="h-8 w-auto" />
          <span className="font-display font-bold text-lg">As de luz</span>
        </div>
        <div className="text-center md:text-right">
          <p className="text-primary-foreground/60 text-sm">
            © 2026 As de luz. Productos naturales en Pereira y Dosquebradas.
          </p>
          <a
            href="https://comercyo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors text-xs mt-2"
          >
            By
            <img src={comercyoLogo} alt="Comercyo" className="w-4 h-4 rounded-full" />
            Comercyo.com
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export { Navbar, Footer };
