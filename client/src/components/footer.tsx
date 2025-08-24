import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:darin.williams@example.com", label: "Email" },
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
              © 2024 Darin Williams. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
