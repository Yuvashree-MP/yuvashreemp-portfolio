import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6 animate-fadeInUp">
              <div>
                <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
                  MP YUVASHREE
                </h1>
                <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">AI & Data Science Student</h2>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">Driven AI & Data Science undergraduate with fundamentals in machine learning, deep learning, and data visualization. Transforming data into actionable insights with strong communication and leadership skills.</p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300" onClick={() => scrollToSection('projects')}>
                  View My Work
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
                  Get In Touch
                </Button>
              </div>
              
              {/* Contact links */}
              <div className="flex gap-6 justify-center lg:justify-start">
                <a href="mailto:hiyuvashreemp@gmail.com" className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:shadow-glow">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="tel:9025564678" className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:shadow-glow">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:shadow-glow">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover:shadow-glow">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fadeInUp" style={{
          animationDelay: '0.3s'
        }}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-glow"></div>
              <img src={profilePhoto} alt="MP Yuvashree" className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary/20 shadow-card" />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>;
};
export default Hero;