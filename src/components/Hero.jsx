import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Animate headline
    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power3.out" },
    )
      // Animate subtitle
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5",
      )
      // Animate CTA buttons
      .fromTo(
        ctaRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
        "-=0.3",
      )
      // Animate social links
      .fromTo(
        socialRef.current.children,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        "-=0.2",
      );

    // Floating animation for the entire hero content
    gsap.to(heroRef.current, {
      y: -10,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power3.inOut",
      });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      gsap.to(window, {
        duration: 1.5,
        scrollTo: { y: element, offsetY: 80 },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div
        ref={heroRef}
        className="hero-content container mx-auto px-6 text-center relative z-10"
      >
        {/* Main headline */}
        <h1
          ref={headlineRef}
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight"
        >
          Hi, I'm <span className="hero-gradient">Rehan</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl font-light">
            Turning ideas into{" "}
            <span className="hero-gradient font-bold">websites</span>,{" "}
            <span className="hero-gradient font-bold">bots</span>, and{" "}
            <span className="hero-gradient font-bold">AI Automations</span>.{" "}
            that work smarter for you.
          </span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Frontend Engineer | React & Next.js specialist building AI Automations
          tools, data scraping automation bots, and seamless user experiences.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <Button
            size="lg"
            className="px-8 py-4 text-lg font-semibold bg-primary hover:bg-primary/90 transform hover:scale-105 transition-all duration-300"
            onClick={scrollToProjects}
          >
            View My Work
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-semibold border-2 hover:bg-accent hover:text-accent-foreground transform hover:scale-105 transition-all duration-300"
            onClick={scrollToContact}
          >
            Let's Connect
            <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Social Links */}
        <div ref={socialRef} className="flex justify-center space-x-6">
          <a
            href="https://github.com/rehanshabbirak/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/rehan-shabbir-ak/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 transform hover:scale-110"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:rehanshabbir.ak@gmail.com"
            className="p-3 rounded-full bg-card hover:bg-accent hover:text-accent-foreground transition-all duration-300 transform hover:scale-110"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </div>
  );
};

export default Hero;
