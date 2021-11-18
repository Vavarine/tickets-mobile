import React, { useEffect, useState } from "react";
import { Input } from "../../components/Input";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import useAuth from "../../hooks/useAuth";
import { Ticket, User } from "../../@types";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { SearchInput } from "../../components/SearchInput";
import { Button } from "../../components/Button";
import { useNavigation } from "@react-navigation/core";
import { TicketsList } from "../../components/TicketsList";
import { firestore } from "../../services/firebase";
import { TicketCard } from "../../components/TicketCard";
import { ScrollView } from "react-native-gesture-handler";

export function CostumerHome() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [waitingTickets, setWaitingTickets] = useState<Ticket[]>([]);
  const [openTickets, setOpenTickets] = useState<Ticket[]>([]);
  const [closedTickets, setClosedTickets] = useState<Ticket[]>([]);

  const { user } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    getTickets();
  }, []);

  useEffect(() => {
    setWaitingTickets(tickets.filter((ticket) => ticket.status === "waiting"));
    setOpenTickets(tickets.filter((ticket) => ticket.status === "open"));
    setClosedTickets(tickets.filter((ticket) => ticket.status === "closed"));
  }, [tickets]);

  async function getTickets() {
    const ticketsRef = firestore
      .collection("tickets")
      .where("userEmail", "==", user.email);

    const snapshot = await ticketsRef.get();

    const ticketsList = [];

    snapshot.forEach((ticket) => {
      ticketsList.push({ ...ticket.data(), id: ticket.id });
    });

    setTickets(ticketsList);
  }

  function handleNewTicketPress() {
    navigation.navigate("NewTicket");
  }

  return (
    <View style={styles.container}>
      <SearchInput />
      <ScrollView
        style={styles.listsContainer}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <TicketsList title="Ainda não abertos" tickets={waitingTickets} />
        <TicketsList title="Abertos" tickets={openTickets} />
        <TicketsList title="Fechados" tickets={closedTickets} />
      </ScrollView>
      <Button
        text="Novo ticket"
        type="default"
        iconName="plus-circle"
        onPress={handleNewTicketPress}
      />
    </View>
  );
}
