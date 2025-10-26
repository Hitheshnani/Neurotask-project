import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReservationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all menu items
  app.get("/api/menu", async (_req, res) => {
    try {
      const menuItems = await storage.getMenuItems();
      res.json(menuItems);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch menu items" });
    }
  });

  // Create a new reservation
  app.post("/api/reservations", async (req, res) => {
    try {
      const validatedData = insertReservationSchema.parse(req.body);
      const reservation = await storage.createReservation(validatedData);
      res.status(201).json(reservation);
    } catch (error) {
      if (error instanceof Error && 'issues' in error) {
        res.status(400).json({ error: "Validation failed", details: error });
      } else {
        res.status(500).json({ error: "Failed to create reservation" });
      }
    }
  });

  // Get all reservations (for admin purposes)
  app.get("/api/reservations", async (_req, res) => {
    try {
      const reservations = await storage.getReservations();
      res.json(reservations);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch reservations" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
