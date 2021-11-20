import React from "react";

import useAuth from "../../hooks/useAuth";
import { AdminTickets } from "./AdminTickets";

export function Tickets() {
  const { user } = useAuth();

  if (user.type === "admin") {
    return <AdminTickets />;
  }
  return <AdminTickets />;
}
