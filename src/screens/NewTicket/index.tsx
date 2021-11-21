import React, { useState } from "react";
import { View, Text, ToastAndroid } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { styles } from "./styles";
import { firestore, auth, database } from "../../services/firebase";
import { useNavigation } from "@react-navigation/core";
import { Ticket } from "../../@types";

export default function NewTicket() {
  const [ticketTitle, setTicketTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [ticketDescription, setTicketDescription] = useState("");

  const navigation = useNavigation();

  async function handleSaveTicket() {
    if (ticketTitle === "" && ticketDescription === "") {
      ToastAndroid.show("Preencha todos os campos!", ToastAndroid.LONG);

      return;
    }

    setIsLoading(true);

    try {
      const databaseTicketsRef = database.ref("tickets");

      const RDBTiketkey = databaseTicketsRef.push({
        createdAt: new Date().toString(),
      }).key;

      const firestoreTicketsRef = firestore.collection("tickets");

      const ticket: Ticket = {
        title: ticketTitle,
        description: ticketDescription,
        userEmail: auth.currentUser.email,
        RDBKey: RDBTiketkey,
        status: "waiting",
      };

      await firestoreTicketsRef.add(ticket);
    } catch (err) {
      console.log(err);
      ToastAndroid.show("Houve um erro!", ToastAndroid.LONG);
      setIsLoading(false);

      return;
    }

    ToastAndroid.show("Ticket criado!", ToastAndroid.LONG);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Sobre o que é?"
        value={ticketTitle}
        onChangeText={setTicketTitle}
        style={styles.titleInputWrapper}
        inputStyle={styles.titleInput}
      />

      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionTitle}>Descreva Seu problema em detalhes:</Text>

        <Input
          multiline
          autoCapitalize="sentences"
          placeholder="Sobre o que é?"
          value={ticketDescription}
          onChangeText={setTicketDescription}
          style={{ ...styles.descriptionInputwrapper }}
          inputStyle={styles.descriptionInput}
        />
      </View>
      <Button
        text="Salvar"
        type="default"
        style={{ marginBottom: 20 }}
        isLoading={isLoading}
        onPress={handleSaveTicket}
      />
    </View>
  );
}
