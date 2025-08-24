import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Code, Zap, Users, Award } from "lucide-react";

const About = () => {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);

  const stats = [
    { icon: Code, label: "Projects Completed", value: "50+" },
    { icon: Zap, label: "Web Automation Tools Built", value: "40+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: Award, label: "Years Experience", value: "3+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate stats counter
            gsap.fromTo(
              statsRef.current.children,
              { opacity: 0, y: 30, scale: 0.8 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "back.out(1.7)",
              },
            );
          }
        });
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="hero-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Passionate Frontend Engineer | Web Automation | Data Scraper &
                AI Workflows
              </h3>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I’m a frontend engineer specializing in React.js and Next.js,
                focused on creating responsive, scalable, and user-friendly web
                applications.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                In addition to frontend development, I design AI-powered tools,
                automation bots, and custom workflows that streamline real-world
                processes from data scraping and processing to smart content
                generation and business automation.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach is straightforward: write clean, maintainable code,
                solve real problems, and deliver web experiences and AI
                workflows that actually work for people.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  "React.js",
                  "Next.js",
                  "TypeScript",
                  "Node.js",
                  "GSAP",
                  "Tailwind CSS",
                  "OpenAI API",
                  "Web Scraping",
                  "Selenium",
                  "Puppetter",
                  "scrapy",
                  "playwright",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
