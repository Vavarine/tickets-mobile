import React from "react";
import { Text, View } from "react-native";
import { User } from "../../@types";
import useAuth from "../../hooks/useAuth";

import { styles } from "./styles";

export function CostumerHome() {
  const { user } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, fontSize: 22 }}>Olá, {user.name}</Text>
    </View>
  );
}
