// server/index.ts
import express2 from "express";

// server/routes.ts
import { createServer } from "http";

// server/storage.ts
import { randomUUID } from "crypto";
var MemStorage = class {
  contacts;
  projects;
  constructor() {
    this.contacts = /* @__PURE__ */ new Map();
    this.projects = /* @__PURE__ */ new Map();
    this.seedProjects();
  }
  seedProjects() {
    const sampleProjects = [
      {
        id: "1",
        title: "Helmet Detection via Computer Vision",
        description: "Designed, trained, and deployed a CNN\u2011based Sequential model for automated PPE compliance, leveraging Computer Vision to detect protective helmets in workplace imagery. Built a custom preprocessing pipeline (resize, normalize, augment) and fine\u2011tuned convolutional layers to achieve high accuracy, with real-time detection",
        imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["CNN", "OpenCV", "Keras", "SHAP", "EDA"],
        liveUrl: "https://huggingface.co/spaces/darinjswilliams/superkartfrontend",
        githubUrl: "https://github.com/darinjswilliams/helmet-on",
        category: "computer-vision"
      },
      {
        id: "2",
        title: "Easy Visa Approval App",
        description: "Designed, trained, and deployed a CNN\u2011based Sequential model for automated PPE compliance, leveraging Computer Vision to detect protective helmets in workplace imagery. Built a custom preprocessing pipeline (resize, normalize, augment) and fine\u2011tuned convolutional layers to achieve precision performance, with real-time detection",
        imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["Stacking Classifier", "Tensorflow", "HP Tuning", "EDA"],
        liveUrl: "https://apps.apple.com/app/task-manager",
        githubUrl: "https://github.com/darinjswilliams/visa-approvals",
        category: "predictive"
      },
      {
        id: "3",
        title: "Time Series Forecasting",
        description: "Delivered high\u2011accuracy quarterly revenue forecasts for a multi\u2011tier retail network by designing and implementing XGBoost and Gradient Boost Regressor models, integrating feature engineering on seasonal trends and promotions. Achieved double\u2011digit gains in forecast precision, reducing overstock risk, and optimizing procurement cycles",
        imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["XGBoost", "Python", "Streamlit", "FlaskApi", "EDA"],
        liveUrl: "https://huggingface.co/spaces/darinjswilliams/superkartfrontend",
        githubUrl: "https://github.com/darinjswilliams/revenue-forecasting",
        category: "forecasting"
      },
      {
        id: "4",
        title: "Personal Loan Campaign",
        description: "Built a predictive model to identify high\u2011propensity loan customers, uncovering key drivers and actionable patterns that boosted conversion rates by ~18% and lead prioritization efficiency by 25%",
        imageUrl: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["Decision Tree", "MPE", "EDA", "Logistic Regression"],
        liveUrl: "https://social-demo.com",
        githubUrl: "https://github.com/example/social",
        category: "churn"
      },
      {
        id: "5",
        title: "Online Food Ordering Analysis App",
        description: "Conducted EDA on food order data to uncover demand trends across restaurants and cuisines, delivering insights that enhanced customer experience and informed strategic business decisions.",
        imageUrl: "https://images.unsplash.com/photo-1559526324-593bc073d938?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: [
          "Seaborn",
          "EDA",
          "Multivariate Analysis",
          "Bivariate Analysis"
        ],
        liveUrl: "https://crypto-trader.com",
        githubUrl: "https://github.com/darinjswilliams/food-hub-aggregator",
        category: "forecasting"
      },
      {
        id: "6",
        title: "Medical Assistant RAG",
        description: "Engineered RAG-based AI integrating authoritative medical manuals to reduce cognitive load, enabling rapid, evidence-based diagnostics and standardized treatment workflows that improve patient care quality.",
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500",
        technologies: ["LLM", "Prompt Engineering", "RAG", "Fine Tuning RAG"],
        liveUrl: "https://fitness-tracker.com",
        githubUrl: "https://github.com/darinjswilliams/medical-rag",
        category: "rag"
      }
    ];
    sampleProjects.forEach((project) => {
      this.projects.set(project.id, project);
    });
  }
  async createContact(insertContact) {
    const id = randomUUID();
    const contact = {
      ...insertContact,
      id,
      createdAt: /* @__PURE__ */ new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }
  async getContacts() {
    return Array.from(this.contacts.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }
  async getProjects() {
    return Array.from(this.projects.values());
  }
  async createProject(insertProject) {
    const id = randomUUID();
    const project = {
      ...insertProject,
      id,
      liveUrl: insertProject.liveUrl || null,
      githubUrl: insertProject.githubUrl || null
    };
    this.projects.set(id, project);
    return project;
  }
};
var storage = new MemStorage();

// shared/schema.ts
import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
var contacts = pgTable("contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull()
});
var projects = pgTable("projects", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  title: text("title").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  technologies: text("technologies").array().notNull(),
  liveUrl: text("live_url"),
  githubUrl: text("github_url"),
  category: text("category").notNull()
  // react, fullstack, mobile
});
var insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  message: true
});
var insertProjectSchema = createInsertSchema(projects).omit({
  id: true
});

// server/routes.ts
import { z } from "zod";
async function registerRoutes(app2) {
  app2.get("/api/projects", async (_req, res) => {
    try {
      const projects2 = await storage.getProjects();
      res.json(projects2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch projects" });
    }
  });
  app2.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      res.status(201).json({ message: "Message sent successfully", contact });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
      } else {
        res.status(500).json({ message: "Failed to send message" });
      }
    }
  });
  app2.get("/api/contacts", async (_req, res) => {
    try {
      const contacts2 = await storage.getContacts();
      res.json(contacts2);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch contacts" });
    }
  });
  const httpServer = createServer(app2);
  return httpServer;
}

// server/vite.ts
import express from "express";
import fs from "fs";
import path2 from "path";
import { createServer as createViteServer, createLogger } from "vite";

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...process.env.NODE_ENV !== "production" && process.env.REPL_ID !== void 0 ? [
      await import("@replit/vite-plugin-cartographer").then(
        (m) => m.cartographer()
      )
    ] : []
  ],
  base: "/darin-portfolio",
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"]
    }
  }
});

// server/vite.ts
import { nanoid } from "nanoid";
var viteLogger = createLogger();
function log(message, source = "express") {
  const formattedTime = (/* @__PURE__ */ new Date()).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });
  console.log(`${formattedTime} [${source}] ${message}`);
}
async function setupVite(app2, server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true
  };
  const vite = await createViteServer({
    ...vite_config_default,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      }
    },
    server: serverOptions,
    appType: "custom"
  });
  app2.use(vite.middlewares);
  app2.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path2.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e);
      next(e);
    }
  });
}
function serveStatic(app2) {
  const distPath = path2.resolve(import.meta.dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }
  app2.use(express.static(distPath));
  app2.use("*", (_req, res) => {
    res.sendFile(path2.resolve(distPath, "index.html"));
  });
}

// server/index.ts
var app = express2();
app.use(express2.json());
app.use(express2.urlencoded({ extended: false }));
app.use((req, res, next) => {
  const start = Date.now();
  const path3 = req.path;
  let capturedJsonResponse = void 0;
  const originalResJson = res.json;
  res.json = function(bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path3.startsWith("/api")) {
      let logLine = `${req.method} ${path3} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "\u2026";
      }
      log(logLine);
    }
  });
  next();
});
(async () => {
  const server = await registerRoutes(app);
  app.use((err, _req, res, _next) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ message });
    throw err;
  });
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }
  const port = parseInt(process.env.PORT || "5000", 10);
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true
  }, () => {
    log(`serving on port ${port}`);
  });
})();
