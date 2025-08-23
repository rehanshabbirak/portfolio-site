import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Code, Zap, Users, Award } from 'lucide-react'

const About = () => {
  const sectionRef = useRef(null)
  const statsRef = useRef(null)

  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Zap, label: 'AI Tools Built', value: '15+' },
    { icon: Users, label: 'Happy Clients', value: '30+' },
    { icon: Award, label: 'Years Experience', value: '5+' }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate stats counter
            gsap.fromTo(statsRef.current.children,
              { opacity: 0, y: 30, scale: 0.8 },
              { 
                opacity: 1, 
                y: 0, 
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'back.out(1.7)'
              }
            )
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

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
                Passionate Frontend Engineer & AI Enthusiast
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a dedicated frontend developer with a deep passion for creating exceptional 
                digital experiences. My expertise lies in React.js and Next.js, where I craft 
                pixel-perfect, responsive, and highly interactive user interfaces.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                What sets me apart is my specialization in AI-powered tools and web automation. 
                I leverage OpenAI APIs to build intelligent applications that solve real-world 
                problems, from automated data processing to smart content generation systems.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines technical excellence with creative problem-solving, 
                ensuring that every project not only functions flawlessly but also delivers 
                an engaging and memorable user experience.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['React.js', 'Next.js', 'TypeScript', 'Node.js', 'OpenAI API', 'Web Scraping', 'GSAP', 'Tailwind CSS'].map((tech) => (
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
                const IconComponent = stat.icon
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
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

