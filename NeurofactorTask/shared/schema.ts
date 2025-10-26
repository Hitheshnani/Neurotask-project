import { z } from "zod";

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  imageId: string;
}

export interface Reservation {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  message?: string;
  createdAt: Date;
}

export const insertReservationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits" }),
  date: z.string().min(1, { message: "Please select a date" }),
  time: z.string().min(1, { message: "Please select a time" }),
  guests: z.number().min(1).max(20),
  message: z.string().optional(),
});

export type InsertReservation = z.infer<typeof insertReservationSchema>;
