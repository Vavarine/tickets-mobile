import React from "react";
import { Feather } from "@expo/vector-icons";
import { FlatList, ListRenderItem, Text, View } from "react-native";
import { Ticket } from "../../@types";
import { TicketCard } from "../TicketCard";

import { styles } from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import { theme } from "../../global/styles/theme";
import { useNavigation } from "@react-navigation/core";

interface TicketsListProps {
  title: string;
  tickets?: Ticket[];
}

function TicketsList({ title, tickets }: TicketsListProps) {
  const navigation = useNavigation();

  return (
    <View style={{ ...styles.container }}>
      <Text style={styles.title}>
        {title} ({tickets.length})
      </Text>
      {tickets.length > 0 && (
        <ScrollView
          horizontal
          style={styles.list}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding: 5, paddingRight: 40 }}
        >
          {tickets.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

export { TicketsList };
