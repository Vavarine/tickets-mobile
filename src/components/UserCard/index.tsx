import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/Feather";

import { User } from "../../@types";

import { styles } from "./styles";

interface userCardProps {
  user: User;
  id: string;
}

export function UserCard({ user, id }: userCardProps) {
  const navigation = useNavigation();

  function handlePress() {
    navigation.navigate("EditUser" as never, { user, id } as never);
  }

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={handlePress}>
      <Text>{user.email}</Text>
      <Icon name="arrow-right" size={18} />
    </TouchableOpacity>
  );
}
