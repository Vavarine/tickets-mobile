import React from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { Ticket } from "../../@types";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";

interface TicketCardProps {
  ticket: Ticket;
}

function TicketCard({ ticket }: TicketCardProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.container}>
      <Text style={styles.id}>#{ticket.id}</Text>
      <Text style={styles.title}>{ticket.title}</Text>
      <Feather
        style={styles.arrow}
        name="arrow-right"
        color={theme.colors.purple900}
        size={24}
      />
    </TouchableOpacity>
  );
}

export { TicketCard };
