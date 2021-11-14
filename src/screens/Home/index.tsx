import React, { useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { Text, View, ToastAndroid } from "react-native";

import { CostumerHome } from "./CostumerHome";
import { AdminHome } from "./AdminHome";

import { styles } from "./styles";
import { User } from "../../@types";
import useAuth from "../../hooks/useAuth";

export function Home() {
  const { user } = useAuth();

  if (user.type === "admin") {
    return <AdminHome />;
  }

  return <CostumerHome />;
}
