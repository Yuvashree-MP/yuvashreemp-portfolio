import { Card, CardContent } from "@/components/ui/card";
import { User, Target, Award, Users, Brain, Heart, Code, Coffee, BookOpen, Globe } from "lucide-react";
const About = () => {
  const strengths = [{
    icon: User,
    title: "Effective Communicator",
    description: "Strong presentation skills and public speaking abilities with experience leading symposiums"
  }, {
    icon: Users,
    title: "Team Leadership",
    description: "Proven leadership as symposium head, project lead, and collaborative team player"
  }, {
    icon: Target,
    title: "Adaptable & Growth-Oriented",
    description: "Quick to learn new technologies and adapt to challenges with a growth mindset"
  }, {
    icon: Award,
    title: "Time Management",
    description: "Excellent at managing multiple projects, deadlines, and academic responsibilities"
  }];

  const passions = [{
    icon: Brain,
    title: "AI Innovation",
    description: "Fascinated by the potential of artificial intelligence to solve complex real-world problems"
  }, {
    icon: Code,
    title: "Problem Solving",
    description: "Love breaking down complex challenges into elegant, data-driven solutions"
  }, {
    icon: Globe,
    title: "Impact Creation",
    description: "Driven to create technology that makes a meaningful difference in people's lives"
  }, {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies, methodologies, and industry best practices"
  }];

  const stats = [{
    number: "8.6",
    label: "CGPA",
    description: "Academic Excellence"
  }, {
    number: "3+",
    label: "Projects",
    description: "Completed Successfully"
  }, {
    number: "10+",
    label: "Technologies",
    description: "Mastered"
  }, {
    number: "100%",
    label: "Passion",
    description: "For Innovation"
  }];
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            I am an AI & Data Science graduate with a strong foundation across the field, having built projects spanning
            core AI, machine learning, data science, NLP, deep learning, and real-world analytics. I am deeply passionate
            about AI, ML, and data science, and I bring both curiosity and a purpose-driven mindset to every problem I
            tackle. I believe technology is at its best when it helps people, and I am always eager to explore, learn, and
            create intelligent solutions that make a meaningful difference in people's lives.
          </p>
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-card border-0 shadow-card text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Heart className="w-6 h-6 text-primary" />
                  My Journey
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    As a B.Tech student in Artificial Intelligence and Data Science at St. Joseph's Institute 
                    of Technology, Chennai, I've maintained a stellar academic record with an 8.6 CGPA while 
                    actively immersing myself in the fascinating world of data and artificial intelligence.
                  </p>
                  <p>
                    My journey began with a curiosity about how machines could learn and make decisions. 
                    This curiosity evolved into a deep passion for creating intelligent systems that can 
                    understand, learn from, and act upon complex data patterns to solve meaningful problems.
                  </p>
                  <p>
                    From developing machine learning models to leading symposiums, I've discovered that 
                    the most rewarding aspect of this field isn't just the technical challenge—it's the 
                    potential to create solutions that genuinely improve people's lives and drive positive change.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
                  <Coffee className="w-6 h-6 text-primary" />
                  Beyond the Code
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    When I'm not diving deep into datasets or training neural networks, you'll find me 
                    exploring the latest AI research papers, participating in hackathons, or mentoring 
                    fellow students who share the same passion for technology.
                  </p>
                  <p>
                    I believe that the best innovations come from diverse perspectives and collaborative 
                    thinking. That's why I actively engage in community events, tech meetups, and 
                    academic conferences—always eager to learn from others and share my own insights.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Core Strengths */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Core Strengths</h3>
            <div className="grid gap-4">
              {strengths.map((strength, index) => {
                const Icon = strength.icon;
                return (
                  <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold mb-2">{strength.title}</h4>
                          <p className="text-sm text-muted-foreground">{strength.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* What Drives Me */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">What Drives Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {passions.map((passion, index) => {
              const Icon = passion.icon;
              return (
                <Card key={index} className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 group text-center">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-3">{passion.title}</h4>
                    <p className="text-sm text-muted-foreground">{passion.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Vision Statement */}
        <Card className="bg-gradient-primary/5 border-primary/20 shadow-glow">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">My Vision</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              "I envision a future where AI and data science are not just technological tools, but catalysts 
              for positive social change. My goal is to contribute to this future by developing intelligent 
              systems that are ethical, inclusive, and genuinely beneficial to humanity. Every line of code 
              I write, every model I train, and every insight I uncover is a step toward making this vision a reality."
            </p>
          </CardContent>
        </Card>
      </div>
    </section>;
};
export default About;