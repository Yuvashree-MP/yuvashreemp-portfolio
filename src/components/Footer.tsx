import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MP YUVASHREE
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI & Data Science Engineer passionate about transforming data into 
              actionable insights and creating innovative solutions for real-world challenges.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:hiyuvashreemp@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                hiyuvashreemp@gmail.com
              </a>
              <a 
                href="tel:+919025564678"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                +91 90255 64678
              </a>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Chennai, India
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} MP Yuvashree. Made with 
            <Heart className="w-4 h-4 text-red-400" /> 
            for innovation in AI & Data Science.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;