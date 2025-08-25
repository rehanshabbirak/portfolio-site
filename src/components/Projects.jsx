import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  Zap,
  Bot,
  Globe,
  Smartphone,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  const projectsRef = useRef(null);
  const cardsRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "AI Content Generator",
      description:
        "A powerful content generation platform using OpenAI GPT-4 API. Features include blog post generation, social media content, and SEO optimization with real-time preview.",
      image: "/Tabby-Banner-Hero-Banner-scaled.jpg",
      tech: ["React.js", "Next.js", "OpenAI API", "Tailwind CSS", "MongoDB"],
      category: "AI Tool",
      icon: Bot,
      color: "from-purple-500 to-pink-500",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "E-commerce Analytics Dashboard",
      description:
        "Real-time analytics dashboard for e-commerce businesses with advanced data visualization, sales tracking, and automated reporting features.",
      image: "/Tabby-Banner-Hero-Banner-scaled.jpg",
      tech: ["React.js", "TypeScript", "Chart.js", "Node.js", "PostgreSQL"],
      category: "Web App",
      icon: Globe,
      color: "from-blue-500 to-cyan-500",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Web Scraping Automation Bot",
      description:
        "Intelligent web scraping bot that automatically extracts product data, prices, and reviews from multiple e-commerce sites with anti-detection features.",
      image: "/Tabby-Banner-Hero-Banner-scaled.jpg",
      tech: ["Python", "Selenium", "BeautifulSoup", "React.js", "Express.js"],
      category: "Automation",
      icon: Zap,
      color: "from-green-500 to-emerald-500",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Mobile-First Portfolio Site",
      description:
        "Responsive portfolio website with advanced GSAP animations, dark mode toggle, and optimized performance for mobile devices.",
      image: "/Tabby-Banner-Hero-Banner-scaled.jpg",
      tech: ["Next.js", "GSAP", "Tailwind CSS", "Framer Motion", "Vercel"],
      category: "Website",
      icon: Smartphone,
      color: "from-orange-500 to-red-500",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "AI-Powered Chat Assistant",
      description:
        "Intelligent chat assistant with natural language processing, context awareness, and integration with multiple business APIs for customer support.",
      image: "/Tabby-Banner-Hero-Banner-scaled.jpg",
      tech: ["React.js", "OpenAI API", "Socket.io", "Node.js", "Redis"],
      category: "AI Tool",
      icon: Bot,
      color: "from-indigo-500 to-purple-500",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Real-time Collaboration Tool",
      description:
        "Team collaboration platform with real-time editing, video calls, file sharing, and project management features built with modern web technologies.",
      image: "/Tabby-Banner-Hero-Banner-scaled.jpg",
      tech: ["React.js", "WebRTC", "Socket.io", "MongoDB", "AWS"],
      category: "Web App",
      icon: Globe,
      color: "from-teal-500 to-blue-500",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              cardsRef.current.children,
              { opacity: 0, y: 50, scale: 0.9 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
              }
            );
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={projectsRef} className="section-padding bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="hero-gradient">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A showcase of my latest work in AI-powered applications, web
              automation, and modern frontend development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
          </div>

          {/* Projects Grid */}
          <div
            ref={cardsRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  className="project-card bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 group"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <IconComponent className="h-16 w-16 text-white" />
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-md hover:bg-primary/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/30 hover:border-primary hover:bg-primary/10"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image Slider */}

          <div className="mt-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              What Clients Say About{" "}
              <span className="hero-gradient">My Work</span>
            </h2>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 10000 }}
              className="rounded-2xl shadow-lg"
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div className="relative w-full h-72 md:h-96">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl">
                      <h3 className="text-white text-2xl md:text-3xl font-bold">
                        {project.title}
                      </h3>
                    </div> */}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Interested in working together on your next project?
            </p>
            <Button
              size="lg"
              className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Let's Collaborate
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
