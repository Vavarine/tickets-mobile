import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import useAuth from "../../hooks/useAuth";

import { globalStyles } from "../../styles/globalStyles";
import { styles } from "./styles";

export default function Header() {
  const { user, logOut } = useAuth();

  function handleIconPress() {
    logOut();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{user.company}</Text>
      <Text>
        <Icon
          name="log-out"
          size={24}
          color={globalStyles.colors.purple900}
          onPress={handleIconPress}
        />
      </Text>
    </View>
  );
}
