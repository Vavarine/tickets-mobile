import React from "react";
import { Text, View } from "react-native";
import { User } from "../../@types";

import { styles } from "./styles";

interface CostumerHomeProps {
  user: User;
}

export function CostumerHome({ user }: CostumerHomeProps) {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.title, fontSize: 22 }}>Olá, {user.name}</Text>
    </View>
  );
}
