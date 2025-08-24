import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function AboutSection() {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "5+", label: "Years Experience" },
    { value: "20+", label: "Happy Clients" },
  ];

  return (
    <section id="about" className="py-20 bg-white" data-testid="about-section">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Modern tech office collaborative workspace"
              className="rounded-2xl shadow-lg w-full"
              data-testid="about-image"
            />
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-slate-600">
              <p>
                I'm a passionate full-stack developer with over 5 years of
                experience building scalable web applications. I specialize in
                modern JavaScript frameworks and have a strong background in
                both frontend and backend development.
              </p>
              <p>
                My journey in tech started with a Computer Science degree, but
                my real learning happened through building real-world projects
                and staying up-to-date with the latest technologies. I love
                solving complex problems and creating user-friendly solutions.
              </p>
              <p>
                When I'm not coding, you can find me contributing to open-source
                projects, writing technical blogs, or exploring new
                technologies. I'm always excited to work on innovative projects
                that make a difference.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center" data-testid={`stat-${index}`}>
                  <div className="text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download Resume Button */}
            <div className="mt-8">
              <Button
                className="bg-primary text-white px-8 py-3 font-medium hover:bg-primary/90 transition-colors duration-300"
                data-testid="button-download-resume"
              >
                <Download className="mr-3 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
