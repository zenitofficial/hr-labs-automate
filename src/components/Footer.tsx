import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoBlack from "@/assets/logo-black.jpg";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img src={logoBlack} alt="HR Labs" className="h-8 w-auto mb-4" />
            <p className="text-muted-foreground text-sm max-w-md">
              Automação inteligente para restaurantes. Transformamos conversas em resultados, 24 horas por dia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Soluções
                </Link>
              </li>
              <li>
                <Link to="/results" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Resultados
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:comercial@hrlabs.com.br" className="hover:text-primary transition-colors">
                  comercial@hrlabs.com.br
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="https://wa.me/5511999999999" className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 HR Labs. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              CNPJ: 00.000.000/0001-00
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
