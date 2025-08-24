import { type Contact, type InsertContact, type Project, type InsertProject } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Project methods
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private projects: Map<string, Project>;

  constructor() {
    this.contacts = new Map();
    this.projects = new Map();
    this.seedProjects();
  }

  private seedProjects() {
    const sampleProjects: Project[] = [
      {
        id: "1",
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        liveUrl: "https://example-ecommerce.com",
        githubUrl: "https://github.com/example/ecommerce",
        category: "fullstack"
      },
      {
        id: "2",
        title: "Task Management App",
        description: "A React Native mobile application for task management with real-time synchronization, offline capabilities, and intuitive user interface.",
        imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["React Native", "Firebase", "Redux"],
        liveUrl: "https://apps.apple.com/app/task-manager",
        githubUrl: "https://github.com/example/task-app",
        category: "mobile"
      },
      {
        id: "3",
        title: "Analytics Dashboard",
        description: "A comprehensive analytics platform with real-time data visualization, custom reports, and interactive charts built with D3.js and Python backend.",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["D3.js", "Python", "Django", "PostgreSQL"],
        liveUrl: "https://analytics-demo.com",
        githubUrl: "https://github.com/example/analytics",
        category: "fullstack"
      },
      {
        id: "4",
        title: "Social Media Platform",
        description: "A modern social media application with real-time messaging, image sharing, and social features built with React and Socket.io.",
        imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["React", "Socket.io", "Express", "MongoDB"],
        liveUrl: "https://social-demo.com",
        githubUrl: "https://github.com/example/social",
        category: "react"
      },
      {
        id: "5",
        title: "Crypto Trading Platform",
        description: "A cryptocurrency trading platform with real-time price tracking, portfolio management, and advanced charting capabilities.",
        imageUrl: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["Vue.js", "FastAPI", "PostgreSQL", "WebSocket"],
        liveUrl: "https://crypto-trader.com",
        githubUrl: "https://github.com/example/crypto",
        category: "fullstack"
      },
      {
        id: "6",
        title: "Fitness Tracking App",
        description: "A comprehensive fitness tracking application with workout plans, progress monitoring, and social features for fitness enthusiasts.",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["Flutter", "Dart", "Firebase"],
        liveUrl: "https://fitness-tracker.com",
        githubUrl: "https://github.com/example/fitness",
        category: "mobile"
      }
    ];

    sampleProjects.forEach(project => {
      this.projects.set(project.id, project);
    });
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { 
      ...insertProject, 
      id,
      liveUrl: insertProject.liveUrl || null,
      githubUrl: insertProject.githubUrl || null
    };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
