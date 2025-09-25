import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, BarChart3, Cloud, Palette, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: ["Python", "SQL", "Java"],
      color: "text-blue-400"
    },
    {
      icon: Database,
      title: "Data Science & ML",
      skills: ["NumPy", "Pandas", "TensorFlow", "Statistics", "Machine Learning"],
      color: "text-green-400"
    },
    {
      icon: BarChart3,
      title: "Analytics & Visualization",
      skills: ["Microsoft Excel", "Power BI", "Data Visualization", "PowerPoint"],
      color: "text-purple-400"
    },
    {
      icon: Cloud,
      title: "Cloud & Tools",
      skills: ["AWS", "Google Workspace", "CRM Systems", "Notion"],
      color: "text-orange-400"
    },
    {
      icon: Palette,
      title: "Design Tools",
      skills: ["Figma", "Canva"],
      color: "text-pink-400"
    },
    {
      icon: Settings,
      title: "Development",
      skills: ["Version Control", "Data Pipeline", "API Integration"],
      color: "text-cyan-400"
    }
  ];

  const certifications = [
    "Statistics 101 - Cognitive Class.ai (IBM)",
    "Data Science Methodology - Cognitive Class.ai (IBM)", 
    "Data Analysis with Python - Cognitive Class.ai (IBM)",
    "AWS Cloud Practitioner Essentials - Coursera",
    "Data Visualization with Python - Cognitive Class.ai (IBM)",
    "Python For Data Science (Elite) - NPTEL",
    "Data Mining (Elite) - NPTEL"
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground">
            Technical proficiency across the full data science and AI development stack
          </p>
        </div>
        
        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-6 h-6 ${category.color}`} />
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Certifications */}
        <Card className="bg-gradient-card border-0 shadow-card">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Certifications & Training
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors duration-200"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;