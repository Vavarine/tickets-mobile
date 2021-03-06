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
import { useNavigation, useIsFocused } from "@react-navigation/core";
import { TicketsList } from "../../components/TicketsList";
import { firestore } from "../../services/firebase";
import { TicketCard } from "../../components/TicketCard";

import { ScrollView } from "react-native-gesture-handler";

export function CostumerHome() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [searchedTickets, setSearchedTickets] = useState<Ticket[]>([]);
  const [waitingTickets, setWaitingTickets] = useState<Ticket[]>([]);
  const [openTickets, setOpenTickets] = useState<Ticket[]>([]);
  const [closedTickets, setClosedTickets] = useState<Ticket[]>([]);

  const { user } = useAuth();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    getTickets();
  }, [isFocused]);

  useEffect(() => {
    if (!searchTerm || searchTerm === "") setSearchedTickets(tickets);

    setSearchedTickets(
      tickets.filter(
        (ticket) =>
          ticket.title.includes(searchTerm) || ticket.description.includes(searchTerm)
      )
    );
  }, [searchTerm, tickets]);

  useEffect(() => {
    setWaitingTickets(searchedTickets.filter((ticket) => ticket.status === "waiting"));
    setOpenTickets(searchedTickets.filter((ticket) => ticket.status === "open"));
    setClosedTickets(searchedTickets.filter((ticket) => ticket.status === "closed"));
  }, [searchedTickets]);

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
      <SearchInput isLoading={isLoading} onSearchPress={setSearchTerm} />
      <ScrollView
        style={styles.listsContainer}
        contentContainerStyle={{ paddingBottom: 40 }}
      >
        <TicketsList title="Ainda n??o abertos" tickets={waitingTickets} />
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
