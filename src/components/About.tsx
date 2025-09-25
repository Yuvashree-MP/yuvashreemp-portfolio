import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Award, Users } from "lucide-react";
const About = () => {
  const strengths = [{
    icon: User,
    title: "Effective Communicator",
    description: "Strong presentation skills and public speaking abilities"
  }, {
    icon: Users,
    title: "Team Leadership",
    description: "Proven leadership as symposium head and project lead"
  }, {
    icon: Target,
    title: "Adaptable & Growth-Oriented",
    description: "Quick to learn new technologies and adapt to challenges"
  }, {
    icon: Award,
    title: "Time Management",
    description: "Excellent at managing multiple projects and deadlines"
  }];
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Passionate about leveraging AI and data science to solve real-world problems 
            and create meaningful impact through innovative solutions.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a B.Tech student in Artificial Intelligence and Data Science at St. Joseph's Institute 
                  of Technology, Chennai, I've maintained a strong academic record with an 8.6 CGPA while 
                  actively pursuing hands-on experience in the field.
                </p>
                <p className="text-muted-foreground leading-relaxed">My passion lies in transforming complex data into actionable insights, with particular expertise in Machine learning, deep learning, and data Science. Through various projects and competitions, I've developed a comprehensive skill set that bridges technical expertise with effective communication.</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {strengths.map((strength, index) => {
            const Icon = strength.icon;
            return <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{strength.title}</h3>
                    <p className="text-sm text-muted-foreground">{strength.description}</p>
                  </CardContent>
                </Card>;
          })}
          </div>
        </div>
      </div>
    </section>;
};
export default About;