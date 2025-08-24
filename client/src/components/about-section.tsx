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
                AI/ML Engineer leveraging 15+ years of software engineering experience to build intelligent, scalable systems that solve real-world problems. After earning Developer of the Year twice at BlueCross Blue Shield, I transitioned into machine learning through professional certifications from <span className="text-red-800 font-semibold">MIT</span>, <span className="text-blue-800 font-semibold">Microsoft</span>, and the <span className="text-orange-600 font-semibold">University of Texas at Austin</span>—where I focused on applying AI to business-critical challenges.
              </p>
              <p>
                I specialize in NLP, Retrieval-Augmented Generation (RAG), MLOps, and cloud-native deployments. My recent work includes:
              </p>
              <div className="ml-4">
                <p>▪ A clinical decision support tool powered by Merck Medical Manuals</p>
                <p>▪ Predictive modeling that improved customer retention by 15%</p>
                <p>▪ A quarterly sales forecast model for a national retailer using XGBoost, improving accuracy by 18%</p>
              </div>
              <p>
                I bring engineering rigor, AI fluency, and a mission-driven mindset to every project—whether in healthcare, legal tech, or manufacturing. My goal is to architect intelligent systems that scale responsibly and deliver measurable impact.
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
