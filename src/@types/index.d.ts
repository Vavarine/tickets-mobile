export interface User {
  company: string;
  email: string;
  name: string;
  password: string;
  type: "costumer" | "admin" | "dev";
}
