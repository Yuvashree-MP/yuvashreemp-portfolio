import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Depression Detection — BiLSTM + Attention + Sentiment Fusion",
      period: "Nov 2024 - Dec 2024",
      description: "Designed a hybrid BiLSTM + attention + sentiment-polarity model to detect depressive content in ~20,000 Reddit posts. Achieved 90.2% accuracy, 91.8% F1-score, and 0.955 AUC-ROC, outperforming a baseline LSTM (F1 85.4%, AUC 0.891).",
      technologies: ["Python", "TensorFlow/Keras", "BiLSTM", "Attention Mechanisms", "TextBlob"],
      type: "Research Project",
      status: "Completed",
      github: "https://github.com/Yuvashree-MP/depression-detection-biLSTM"
    },
    {
      title: "EmoCare — Multi-LLM Mental Health Chatbot",
      period: "July 2025 - Aug 2025", 
      description: "Built an emotion-aware chatbot routing across 4 LLMs (Mistral-7B, LLaMA 3.3, DeepSeek-R1, Cohere Command) with rule-based crisis/emotion detection and escalation logic. Achieved 97% response-completion rate, 4.6/5 empathy score, and deployed on-device via Streamlit for privacy.",
      technologies: ["Python", "Streamlit", "LangChain", "Multi-LLM APIs", "NLP"],
      type: "Research Project",
      status: "Completed",
      github: "https://github.com/Yuvashree-MP/EmoCare-AI-Mental-Health-Chatbot"
    },
    {
      title: "Cyberbullying Detection on Twitter — Final Year Project",
      period: "Jan 2026 - Apr 2026",
      description: "Built an ML pipeline on 47,000 balanced tweets using TF-IDF features, testing multiple classifiers (Random Forest, XGBoost, Gradient Boosting, AdaBoost, Logistic Regression); selected an ensemble model combining Random Forest, XGBoost, and Logistic Regression for the best accuracy. Extended the system with real-time tweets and deployed it as a multilingual (English/Arabic/Bengali/French) Streamlit app.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Streamlit", "TF-IDF"],
      type: "Research Project",
      status: "In Progress"
    },
    {
      title: "Customer Location-Based Notification System",
      period: "April 2025 - June 2025",
      description: "As an AI Research Intern, contributed research and system design input for a team-built, geospatially-aware notification system (FastAPI + MongoDB). Worked on the MongoDB data layer including geospatial (2dsphere) indexing used for real-time proximity-based detection. Served as the primary point of communication with project stakeholders.",
      technologies: ["FastAPI", "MongoDB", "Geospatial Indexing", "Python"],
      type: "Internship Project",
      status: "Completed",
      company: "Sri Gurubhyo Technologies, Hyderabad"
    },
    {
      title: "Customer Behavioral Trends — End-to-End Retail Analytics",
      period: "Jul 2025 - Aug 2025",
      description: "Cleaned and explored a retail customer dataset in Python (Pandas), handling missing values and running EDA on shopping patterns. Analyzed customer segments and revenue trends using SQL to answer key business questions, and built an interactive Power BI dashboard to visualize sales and customer behavior insights.",
      technologies: ["Python", "Pandas", "SQL", "Power BI"],
      type: "Analytics Project",
      status: "Completed"
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
      case 'Analytics Project':
        return 'bg-cyan-500/10 text-cyan-400';
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
                    
                    {project.github && (
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </a>
                      </div>
                    )}
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