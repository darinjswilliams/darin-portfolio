import {
  type Contact,
  type InsertContact,
  type Project,
  type InsertProject,
} from "@shared/schema";
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
        title: "Helmet Detection via Computer Vision",
        description:
          "Designed, trained, and deployed a CNN‑based Sequential model for automated PPE compliance, leveraging Computer Vision to detect protective helmets in workplace imagery. Built a custom preprocessing pipeline (resize, normalize, augment) and fine‑tuned convolutional layers to achieve high accuracy, with real-time detection",
        imageUrl:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["CNN", "OpenCV", "Keras", "SHAP", "EDA"],
        liveUrl:
          "https://huggingface.co/spaces/darinjswilliams/superkartfrontend",
        githubUrl: "https://github.com/darinjswilliams/helmet-on",
        category: "computer-vision",
      },
      {
        id: "2",
        title: "Easy Visa Approval App",
        description:
          "Designed, trained, and deployed a CNN‑based Sequential model for automated PPE compliance, leveraging Computer Vision to detect protective helmets in workplace imagery. Built a custom preprocessing pipeline (resize, normalize, augment) and fine‑tuned convolutional layers to achieve precision performance, with real-time detection",
        imageUrl:
          "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["Stacking Classifier", "Tensorflow", "HP Tuning", "EDA"],
        liveUrl: "https://apps.apple.com/app/task-manager",
        githubUrl: "https://github.com/darinjswilliams/visa-approvals",
        category: "predictive",
      },
      {
        id: "3",
        title: "Time Series Forecasting",
        description:
          "Delivered high‑accuracy quarterly revenue forecasts for a multi‑tier retail network by designing and implementing XGBoost and Gradient Boost Regressor models, integrating feature engineering on seasonal trends and promotions. Achieved double‑digit gains in forecast precision, reducing overstock risk, and optimizing procurement cycles",
        imageUrl:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["XGBoost", "Python", "Streamlit", "FlaskApi", "EDA"],
        liveUrl:
          "https://huggingface.co/spaces/darinjswilliams/superkartfrontend",
        githubUrl: "https://github.com/darinjswilliams/revenue-forecasting",
        category: "forecasting",
      },
      {
        id: "4",
        title: "Personal Loan Campaign",
        description:
          "Built a predictive model to identify high‑propensity loan customers, uncovering key drivers and actionable patterns that boosted conversion rates by ~18% and lead prioritization efficiency by 25%",
        imageUrl:
          "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["Decision Tree", "MPE", "EDA", "Logistic Regression"],
        liveUrl: "https://social-demo.com",
        githubUrl: "https://github.com/example/social",
        category: "churn",
      },
      {
        id: "5",
        title: "Online Food Ordering Analysis App",
        description:
          "Conducted EDA on food order data to uncover demand trends across restaurants and cuisines, delivering insights that enhanced customer experience and informed strategic business decisions.",
        imageUrl:
          "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: [
          "Seaborn",
          "EDA",
          "Multivariate Analysis",
          "Bivariate Analysis",
        ],
        liveUrl: "https://crypto-trader.com",
        githubUrl: "https://github.com/darinjswilliams/food-hub-aggregator",
        category: "forecasting",
      },
      {
        id: "6",
        title: "Medical Assistant RAG",
        description:
          "Engineered RAG-based AI integrating authoritative medical manuals to reduce cognitive load, enabling rapid, evidence-based diagnostics and standardized treatment workflows that improve patient care quality.",
        imageUrl:
          "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["LLM", "Prompt Engineering", "RAG", "Fine Tuning RAG"],
        liveUrl: "https://fitness-tracker.com",
        githubUrl: "https://github.com/darinjswilliams/medical-rag",
        category: "rag",
      },
    ];

    sampleProjects.forEach((project) => {
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
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime(),
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
      githubUrl: insertProject.githubUrl || null,
    };
    this.projects.set(id, project);
    return project;
  }
}

export const storage = new MemStorage();
