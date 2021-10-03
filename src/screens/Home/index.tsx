import React from "react";
import { useRoute } from "@react-navigation/native";
import { Text, View, ToastAndroid } from "react-native";

import { CostumerHome } from "./CostumerHome";
import { AdminHome } from "./AdminHome";

import { styles } from "./styles";
import { User } from "../../@types";

export function Home() {
  const route = useRoute();

  const user = route.params as User;

  if (user.type === "admin") {
    return <AdminHome logedUser={user as User} />;
  }

  return <CostumerHome user={user as User} />;
}
