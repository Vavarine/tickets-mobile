import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ActivityIndicator, Keyboard } from "react-native";
import { Feather } from "@expo/vector-icons";

import useAuth from "../../hooks/useAuth";
import { Ticket, User } from "../../@types";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import { database, firestore } from "../../services/firebase";
import { ScrollView } from "react-native-gesture-handler";
import { TicketChat } from "../../components/TicketChat";
import { Button } from "../../components/Button";

interface TicketParams {
  ticket: Ticket;
}

export function TicketScreen() {
  const [isControlLoading, setIsControlLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [ticketUser, setTicketUser] = useState<User>();
  const { user } = useAuth();

  const navigation = useNavigation();
  const route = useRoute();
  const { ticket } = route.params as TicketParams;

  useEffect(() => {
    getTicketUser();
  }, []);

  async function getTicketUser() {
    const usersRef = firestore.collection("users").where("email", "==", ticket.userEmail);

    const snapshot = await usersRef.get();

    snapshot.forEach((user) => {
      setTicketUser(user.data() as User);
    });
  }

  async function handleDelete() {
    setDeleteLoading(true);
    const ticketRef = firestore.collection("tickets");
    await ticketRef.doc(ticket.id).delete();

    navigation.goBack();
  }

  async function handleOpenPress() {
    setIsControlLoading(true);

    const ticketRef = firestore.collection("tickets");
    await ticketRef.doc(ticket.id).update({
      status: "open",
    });

    navigation.goBack();
  }

  async function handleClosePress() {
    setIsControlLoading(true);

    const ticketRef = firestore.collection("tickets");
    await ticketRef.doc(ticket.id).update({
      status: "closed",
    });

    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{ticketUser?.company}</Text>
        {user.type === "admin" && (
          <TouchableOpacity onPress={handleDelete} disabled={deleteLoading}>
            {deleteLoading ? (
              <ActivityIndicator size="small" color={theme.colors.purple900} />
            ) : (
              <Feather name="trash-2" color={theme.colors.red500} size={20} />
            )}
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.title}>{ticket.title}</Text>
      <ScrollView
        style={styles.description}
        contentContainerStyle={styles.descriptionContainer}
      >
        <Text>{ticket.description}</Text>
      </ScrollView>
      {user.type === "admin" && ticket.status === "waiting" && (
        <Button
          text="Aprovar"
          type="submit"
          onPress={handleOpenPress}
          style={styles.aproveButton}
          isLoading={isControlLoading}
        />
      )}
      {user.type === "admin" && ticket.status === "closed" && (
        <Button
          text="Reabrir"
          type="submit"
          onPress={handleOpenPress}
          style={styles.aproveButton}
          isLoading={isControlLoading}
        />
      )}
      {ticket.status === "open" && (
        <Button
          text="Marcar como feito"
          type="submit"
          onPress={handleClosePress}
          style={styles.aproveButton}
          isLoading={isControlLoading}
        />
      )}
      <TicketChat chatKey={ticket.RDBKey} />
    </View>
  );
}
