import React, { useEffect } from "react";

import useAuth from "../../hooks/useAuth";
import { AdminTickets } from "./AdminTickets";
import { DevTickets } from "./DevTickets";

export function Tickets() {
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
  }, []);

  if (user.type === "admin") {
    return <AdminTickets />;
  }

  if (user.type === "dev") {
    return <DevTickets />;
  }

  return <AdminTickets />;
}
