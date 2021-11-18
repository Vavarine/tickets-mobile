export interface User {
  company: string;
  email: string;
  name: string;
  type: "costumer" | "admin" | "dev";
}

export interface Ticket {
  id: string;
  title: string;
  description: string;
  userEmail: string;
  RDBKey: string;
  status: "open" | "closed" | "waiting";
}
