import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { 
  Code2, 
  Palette, 
  Database, 
  Zap, 
  Globe, 
  Smartphone,
  Bot,
  Brain,
  Layers,
  GitBranch,
  Terminal,
  Cpu
} from 'lucide-react'

const Skills = () => {
  const skillsRef = useRef(null)
  const categoriesRef = useRef(null)

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'text-primary',
      skills: [
        { name: 'React.js', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 90, icon: '▲' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'JavaScript ES6+', level: 95, icon: '🟨' },
        { name: 'HTML5 & CSS3', level: 95, icon: '🎨' },
        { name: 'Tailwind CSS', level: 90, icon: '💨' }
      ]
    },
    {
      title: 'AI & Automation',
      icon: Brain,
      color: 'text-secondary',
      skills: [
        { name: 'OpenAI API', level: 90, icon: '🤖' },
        { name: 'Web Scraping', level: 85, icon: '🕷️' },
        { name: 'Automation Bots', level: 80, icon: '⚡' },
        { name: 'Data Processing', level: 85, icon: '📊' },
        { name: 'API Integration', level: 90, icon: '🔗' },
        { name: 'Python', level: 75, icon: '🐍' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: Terminal,
      color: 'text-accent',
      skills: [
        { name: 'Git & GitHub', level: 90, icon: '📚' },
        { name: 'Node.js', level: 80, icon: '💚' },
        { name: 'Webpack/Vite', level: 85, icon: '📦' },
        { name: 'GSAP Animations', level: 85, icon: '🎭' },
        { name: 'REST APIs', level: 90, icon: '🌐' },
        { name: 'MongoDB', level: 75, icon: '🍃' }
      ]
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate skill categories
            gsap.fromTo(categoriesRef.current.children,
              { opacity: 0, y: 50, rotationY: 45 },
              { 
                opacity: 1, 
                y: 0, 
                rotationY: 0,
                duration: 1,
                stagger: 0.3,
                ease: 'power3.out'
              }
            )

            // Animate skill bars
            setTimeout(() => {
              document.querySelectorAll('.skill-bar').forEach((bar, index) => {
                const level = bar.dataset.level
                gsap.fromTo(bar,
                  { width: '0%' },
                  { 
                    width: `${level}%`,
                    duration: 1.5,
                    delay: index * 0.1,
                    ease: 'power2.out'
                  }
                )
              })
            }, 500)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={skillsRef} className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="hero-gradient">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and AI-powered solutions
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Skills Categories */}
          <div ref={categoriesRef} className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon
              return (
                <div 
                  key={categoryIndex}
                  className="bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-8">
                    <div className={`p-3 rounded-xl bg-primary/10 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold ml-4">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <span className="text-lg mr-2">{skill.icon}</span>
                            <span className="font-medium text-foreground">{skill.name}</span>
                          </div>
                          <span className="text-sm text-muted-foreground font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Skill Bar */}
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className={`skill-bar h-full rounded-full bg-gradient-to-r ${
                              categoryIndex === 0 ? 'from-primary to-primary/70' :
                              categoryIndex === 1 ? 'from-secondary to-secondary/70' :
                              'from-accent to-accent/70'
                            } transition-all duration-300 group-hover/skill:shadow-lg`}
                            data-level={skill.level}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm constantly learning and adapting to new technologies. My passion for innovation 
              drives me to explore cutting-edge tools and frameworks that can enhance user experiences 
              and solve complex problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills

