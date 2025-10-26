import { type MenuItem, type Reservation, type InsertReservation } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getMenuItems(): Promise<MenuItem[]>;
  createReservation(reservation: InsertReservation): Promise<Reservation>;
  getReservations(): Promise<Reservation[]>;
}

const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Dosa',
    description: 'Crispy lentil and rice crepe, traditionally served with coconut chutney and sambar',
    price: '₹150',
    category: 'Appetizer',
    imageId: 'dosa',
  },
  {
    id: '2',
    name: 'Idli with Sambar',
    description: 'Soft steamed rice and lentil cakes served with spicy sambar and coconut chutney',
    price: '₹180',
    category: 'Appetizer',
    imageId: 'idli',
  },
  {
    id: '3',
    name: 'Masala Dosa',
    description: 'Crispy dosa filled with spiced potato masala, served with coconut chutney',
    price: '₹220',
    category: 'Main',
    imageId: 'masaladosa',
  },
  {
    id: '4',
    name: 'Uttapam',
    description: 'Savory pancake topped with onions, tomatoes, and green chilies',
    price: '₹200',
    category: 'Main',
    imageId: 'uttapam',
  },
  {
    id: '5',
    name: 'Rava Dosa',
    description: 'Crispy semolina dosa with golden edges, served with coconut chutney',
    price: '₹250',
    category: 'Main',
    imageId: 'ravadosa',
  },
  {
    id: '6',
    name: 'Vada',
    description: 'Crispy fried lentil doughnuts, served with coconut chutney and sambar',
    price: '₹120',
    category: 'Snacks',
    imageId: 'vada',
  },
  {
    id: '7',
    name: 'Pongal',
    description: 'Creamy rice and lentil dish seasoned with black pepper, ginger, and curry leaves',
    price: '₹180',
    category: 'Main',
    imageId: 'pongal',
  },
  {
    id: '8',
    name: 'Veg Briyani',
    description: 'Fragrant basmati rice cooked with fresh vegetables and aromatic spices',
    price: '₹280',
    category: 'Main',
    imageId: 'briyani',
  },
  {
    id: '9',
    name: 'Chicken Curry',
    description: 'Tender chicken cooked in traditional South Indian spices and coconut gravy',
    price: '₹350',
    category: 'Main',
    imageId: 'chickencurry',
  },
  {
    id: '10',
    name: 'Payasam',
    description: 'Traditional South Indian dessert made with milk, vermicelli, and cardamom',
    price: '₹150',
    category: 'Dessert',
    imageId: 'payasam',
  },
  {
    id: '11',
    name: 'Gulab Jamun',
    description: 'Sweet fried milk dumplings soaked in rose-scented sugar syrup',
    price: '₹140',
    category: 'Dessert',
    imageId: 'gulabjamun',
  },
];

export class MemStorage implements IStorage {
  private reservations: Map<string, Reservation>;

  constructor() {
    this.reservations = new Map();
  }

  async getMenuItems(): Promise<MenuItem[]> {
    return menuItems;
  }

  async createReservation(insertReservation: InsertReservation): Promise<Reservation> {
    const id = randomUUID();
    const reservation: Reservation = {
      ...insertReservation,
      id,
      createdAt: new Date(),
    };
    this.reservations.set(id, reservation);
    return reservation;
  }

  async getReservations(): Promise<Reservation[]> {
    return Array.from(this.reservations.values());
  }
}

export const storage = new MemStorage();
