import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/darinjswilliams", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/darinjeswilliams/", label: "LinkedIn" },
    { icon: SiWhatsapp, href: "https://wa.me/19722613810?text=Hi%20Darin%2C%20I%27m%20interested%20in%20your%20work", label: "Twitter" },
    { icon: Mail, href: "mailto:darinjswilliams@icloud.com", label: "Email" },
  ];

  return (
    <footer className="bg-secondary text-white py-12" data-testid="footer">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold mb-4">Darin Williams</div>
          <p className="text-slate-300 mb-6">
            AI/ML Engineer | MIT-Certified in Graph Algorithms & Large Language Models | Building Scalable Solutions in Healthcare & Legal Tech | Azure AI Engineer | Microsoft Professional AI & ML Engineer passionate about creating amazing digital
            experiences
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  <IconComponent className="h-6 w-6" />
                </a>
              );
            })}
          </div>

          <div className="border-t border-slate-600 pt-8">
            <p className="text-slate-400">
              © 2025 Darin Williams. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
