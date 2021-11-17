import React from "react";
import { Input } from "../../components/Input";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import useAuth from "../../hooks/useAuth";
import { User } from "../../@types";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { SearchInput } from "../../components/SearchInput";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/core";

export function CostumerHome() {
  const { user } = useAuth();
  const navigation = useNavigation();

  function handleNewTicketPress() {
    navigation.navigate("NewTicket");
  }

  return (
    <View style={styles.container}>
      <SearchInput />
      <Button
        text="Novo ticket"
        type="default"
        iconName="plus-circle"
        onPress={handleNewTicketPress}
      />
    </View>
  );
}
