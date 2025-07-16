import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Categories routes
  app.get("/api/categories", async (req, res) => {
    try {
      const categories = await storage.getAllCategories();
      res.json(categories);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch categories" });
    }
  });

  app.get("/api/categories/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const category = await storage.getCategoryById(id);
      if (!category) {
        return res.status(404).json({ message: "Category not found" });
      }
      res.json(category);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch category" });
    }
  });

  // AI Tools routes
  app.get("/api/tools", async (req, res) => {
    try {
      const { search, category } = req.query;
      
      let tools;
      if (search) {
        tools = await storage.searchTools(search as string);
      } else if (category) {
        tools = await storage.getToolsByCategory(parseInt(category as string));
      } else {
        tools = await storage.getAllTools();
      }
      
      res.json(tools);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tools" });
    }
  });

  app.get("/api/tools/featured", async (req, res) => {
    try {
      const tools = await storage.getFeaturedTools();
      res.json(tools);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured tools" });
    }
  });

  app.get("/api/tools/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const tool = await storage.getToolById(id);
      if (!tool) {
        return res.status(404).json({ message: "Tool not found" });
      }
      res.json(tool);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tool" });
    }
  });

  app.get("/api/categories/:id/tools", async (req, res) => {
    try {
      const categoryId = parseInt(req.params.id);
      const tools = await storage.getToolsByCategory(categoryId);
      res.json(tools);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch tools for category" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
