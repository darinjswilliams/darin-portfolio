import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Laptop, Server, Database, Wrench } from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiJavascript,
  SiDocker,
  SiGit,
  SiTensorflow,
  SiOpencv,
  SiHuggingface,
  SiStreamlit,
  SiFlask,
  SiPytorch,
  SiKotlin,
} from "react-icons/si";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: typeof Laptop;
  color: string;
  skills: Skill[];
}

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: Laptop,
      color: "text-primary",
      skills: [
        { name: "ReactJS", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-accent",
      skills: [
        { name: "Java", level: 92 },
        { name: "Python", level: 88 },
        { name: "Flask", level: 90 },
      ],
    },
    {
      title: "Database",
      icon: Database,
      color: "text-green-500",
      skills: [
        { name: "ChromaDB", level: 87 },
        { name: "SQL", level: 82 },
        { name: "MongoDB", level: 75 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "text-purple-500",
      skills: [
        { name: "Azure", level: 95 },
        { name: "Docker", level: 80 },
        { name: "YOLO", level: 78 },
      ],
    },
  ];

  const technologies = [
    { icon: SiStreamlit, name: "Streamlit", color: "text-red-500" },
    { icon: SiHuggingface, name: "Hugging Face", color: "text-green-600" },
    { icon: SiKotlin, name: "Kotlin", color: "text-blue-400" },
    { icon: SiPytorch, name: "PyTorch", color: "text-yellow-500" },
    { icon: SiDocker, name: "Docker", color: "text-blue-600" },
    { icon: SiGit, name: "Git", color: "text-red-500" },
    { icon: SiTensorflow, name: "Tensorflow", color: "text-orange-500" },
    { icon: SiOpencv, name: "OpenCV", color: "text-green-600" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-muted/30"
      data-testid="skills-section"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
            Skills & Technologies
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            I work with a diverse set of technologies to build modern, scalable
            applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="hover:shadow-xl transition-shadow duration-300"
                data-testid={`skill-category-${category.title.toLowerCase()}`}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <IconComponent
                      className={`h-12 w-12 ${category.color} mb-4 mx-auto`}
                    />
                    <h3 className="text-xl font-bold text-secondary">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="skill-item">
                        <div className="flex justify-between mb-2">
                          <span className="text-slate-700 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-slate-600">{skill.level}%</span>
                        </div>
                        <div className="bg-muted rounded-full h-3">
                          <div
                            className={`h-3 rounded-full transition-all duration-1000 ease-out ${
                              category.title === "Frontend"
                                ? "bg-primary"
                                : category.title === "Backend"
                                  ? "bg-accent"
                                  : category.title === "Database"
                                    ? "bg-green-500"
                                    : "bg-purple-500"
                            }`}
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${
                                categoryIndex * 200 + skillIndex * 100
                              }ms`,
                            }}
                            data-testid={`skill-bar-${skill.name.toLowerCase()}`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technology Icons */}
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <Card
                key={tech.name}
                className="p-4 hover:shadow-lg transition-shadow duration-300 text-center"
                data-testid={`tech-icon-${tech.name.toLowerCase()}`}
              >
                <IconComponent
                  className={`h-12 w-12 ${tech.color} mb-2 mx-auto`}
                />
                <span className="text-sm font-medium text-slate-600">
                  {tech.name}
                </span>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
