import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Deep Learning for Depression Prediction",
      period: "Jan 2025 - Feb 2025",
      description: "Developed an AI model using LSTM and attention mechanisms to identify depression cues from large textual datasets. The model enhances user understanding and provides valuable insights for empathetic client communication and need-based outreach strategies.",
      technologies: ["Python", "LSTM", "NLP", "Deep Learning", "Attention Mechanisms"],
      type: "Research Project",
      status: "Completed"
    },
    {
      title: "EmoCare - Mental Health Chatbot",
      period: "July 2025 - Aug 2025", 
      description: "Collaborated on developing a user-focused chatbot utilizing multiple AI models to enhance emotional engagement. The solution emphasizes privacy, empathy, and adaptive support, making it valuable for building customer trust and retention.",
      technologies: ["AI Models", "Chatbot Development", "Emotional AI", "Privacy-First Design"],
      type: "Collaborative Project",
      status: "Completed"
    },
    {
      title: "GPS-Based Customer Intelligence System",
      period: "April 2025 - June 2025",
      description: "As an AI Research Intern at Sri Gurubhyo Technologies, developed a comprehensive data pipeline to identify and retrieve customer information using GPS data. Leveraged geolocation coordinates to map customer locations, filter region-specific data, and enhance service targeting capabilities.",
      technologies: ["GPS Data", "Data Pipeline", "Geolocation", "Python", "Data Analysis"],
      type: "Internship Project",
      status: "Completed",
      company: "Sri Gurubhyo Technologies, Hyderabad"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      case 'In Progress':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Research Project':
        return 'bg-purple-500/10 text-purple-400';
      case 'Collaborative Project':
        return 'bg-blue-500/10 text-blue-400';
      case 'Internship Project':
        return 'bg-orange-500/10 text-orange-400';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Projects & Experience
          </h2>
          <p className="text-lg text-muted-foreground">
            Innovative solutions in AI, machine learning, and data science
          </p>
        </div>
        
        <div className="grid gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-500 group"
            >
              <CardContent className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <Badge className={getTypeColor(project.type)}>
                        {project.type}
                      </Badge>
                      <Badge className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{project.period}</span>
                      {project.company && (
                        <>
                          <span className="text-sm">•</span>
                          <span className="text-sm font-medium text-primary">{project.company}</span>
                        </>
                      )}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="border-primary/20 text-primary hover:bg-primary/10 transition-colors duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                        <Github className="w-4 h-4" />
                        View Code
                      </button>
                      <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                        <ExternalLink className="w-4 h-4" />
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;