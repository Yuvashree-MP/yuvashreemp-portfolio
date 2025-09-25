import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground">
            Academic foundation in cutting-edge technology
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-500">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      B.Tech Artificial Intelligence and Data Science
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-3">
                      St. Joseph's Institute of Technology, Chennai
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-6 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>Chennai, India</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>Current Student</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-muted-foreground">CGPA</span>
                      <span className="text-sm font-bold text-primary">8.6 / 10.0</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: '86%' }}
                      ></div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    Comprehensive curriculum covering machine learning algorithms, deep learning architectures, 
                    statistical analysis, data mining, natural language processing, and computer vision. 
                    Strong emphasis on practical applications and industry-relevant projects.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;