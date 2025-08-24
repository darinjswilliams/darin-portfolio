import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter, Mail, Code, Rocket } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center hero-gradient pt-20"
      data-testid="hero-section"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-secondary mb-6 leading-tight">
              Hi, I'm <span className="text-primary">Alex</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-4 font-medium">
              Full Stack Developer
            </p>
            <p className="text-lg text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0">
              I build scalable web applications and create exceptional digital
              experiences using modern technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-white px-8 py-6 text-lg font-medium hover:bg-primary/90 transition-colors duration-300"
                data-testid="button-view-work"
              >
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary text-primary px-8 py-6 text-lg font-medium hover:bg-primary hover:text-white transition-all duration-300"
                data-testid="button-contact"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary transition-colors duration-300"
                data-testid="link-github"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary transition-colors duration-300"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary transition-colors duration-300"
                data-testid="link-twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:alex.johnson@example.com"
                className="text-slate-600 hover:text-primary transition-colors duration-300"
                data-testid="link-email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Professional developer workspace"
                className="rounded-2xl shadow-2xl w-full max-w-md"
                data-testid="hero-image"
              />

              {/* Floating Elements */}
              <div
                className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 animate-bounce-slow"
                style={{ animationDelay: "0.5s" }}
              >
                <Code className="text-primary h-8 w-8" />
              </div>
              <div
                className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-bounce-slow"
                style={{ animationDelay: "1s" }}
              >
                <Rocket className="text-accent h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
