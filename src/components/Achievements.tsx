import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, Presentation, Award } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "AI ZYPHER'24 Competition",
      subtitle: "Second Runner-up",
      description: "Won Second Runner-up position in AI ZYPHER'24 Fest at AI TOOLS TECHNOZ Event conducted by SRM Institute of Science and Technology, Ramapuram.",
      category: "Competition",
      color: "text-yellow-400"
    },
    {
      icon: Users,
      title: "AIZEN'25 Symposium",
      subtitle: "Overall Head Coordinator",
      description: "Successfully organized and coordinated AIZEN'25, a National Level Technical Symposium from the Department of Artificial Intelligence and Data Science.",
      category: "Leadership",
      color: "text-blue-400"
    },
    {
      icon: Presentation,
      title: "ICESC 2025 Publication",
      subtitle: "Scopus-Indexed IEEE Conference",
      description: "\"EmoCare: A Lightweight Emotion-Aware Chatbot for Mental Health Support Using Multi-LLM Context Escalation\" — 6th International Conference on Electronics and Sustainable Communication Systems (ICESC 2025).",
      category: "Publication",
      color: "text-green-400"
    },
    {
      icon: Award,
      title: "ICIDCA 2025 Publication",
      subtitle: "Scopus-Indexed IEEE Conference",
      description: "\"Sentiment-Aware BiLSTM–Attention Model for Depression Detection\" — 7th International Conference on Innovative Data Communication Technologies and Application (ICIDCA 2025).",
      category: "Publication",
      color: "text-purple-400"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground">
            Celebrating milestones in academic excellence and leadership
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={index}
                className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-500 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Icon className={`w-8 h-8 ${achievement.color}`} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="mb-3">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                            {achievement.title}
                          </h3>
                          <span className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full">
                            {achievement.category}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-accent mb-2">
                          {achievement.subtitle}
                        </h4>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              8.6
            </div>
            <div className="text-sm text-muted-foreground">CGPA</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              2
            </div>
            <div className="text-sm text-muted-foreground">IEEE Publications</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              4+
            </div>
            <div className="text-sm text-muted-foreground">Major Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              5+
            </div>
            <div className="text-sm text-muted-foreground">Certifications</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;