import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hiyuvashreemp@gmail.com",
      href: "mailto:hiyuvashreemp@gmail.com",
      color: "text-blue-400"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 90255 64678",
      href: "tel:+919025564678", 
      color: "text-green-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, India",
      href: "#",
      color: "text-red-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting AI and data science projects? 
            I'm always open to discussing new opportunities and innovative solutions.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Whether you're looking for a passionate AI engineer, want to discuss 
                  innovative projects, or explore collaboration opportunities, I'd love to hear from you.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-primary/5 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className={`w-6 h-6 ${info.color}`} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-semibold group-hover:text-primary transition-colors duration-300">
                          {info.value}
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
              
              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <h4 className="text-lg font-semibold mb-4">Connect Online</h4>
                <div className="flex gap-4">
                  <a 
                    href="#"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
                  >
                    <Linkedin className="w-6 h-6 text-blue-400" />
                  </a>
                  <a 
                    href="#"
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:shadow-glow"
                  >
                    <Github className="w-6 h-6 text-foreground" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors duration-200 resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;