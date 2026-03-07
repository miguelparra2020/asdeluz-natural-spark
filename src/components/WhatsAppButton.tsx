import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573126063529&text=Quiero%20m%C3%A1s%20informaci%C3%B3n";

const WhatsAppButton = ({ text = "Pedir por WhatsApp", productName }: { text?: string; productName?: string }) => {
  const url = productName
    ? `https://api.whatsapp.com/send?phone=573126063529&text=Hola%2C%20me%20interesa%20${encodeURIComponent(productName)}`
    : WHATSAPP_URL;

  return (
    <Button variant="whatsapp" size="lg" asChild>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <MessageCircle className="w-5 h-5" />
        {text}
      </a>
    </Button>
  );
};

export default WhatsAppButton;
