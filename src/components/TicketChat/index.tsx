import React, { useEffect, useRef, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import dateFormat, { masks } from "dateformat";

import useAuth from "../../hooks/useAuth";
import { database } from "../../services/firebase";
import { ChatInput } from "../ChatInput";

import { styles } from "./styles";

interface Message {
  name: string;
  email: string;
  text: string;
  createdAt: string;
}

interface TicketChatProps {
  chatKey: string;
}

export function TicketChat({ chatKey }: TicketChatProps) {
  const scrollViewRef = useRef<any>();
  const [messages, setMessages] = useState<Message[]>([]);

  const { user } = useAuth();

  useEffect(() => {
    getMessages();
  }, []);

  useEffect(() => {
    console.log(messages);
  }, [messages]);

  async function getMessages() {
    const messagesRef = database.ref("tickets/" + chatKey + "/messages");
    // const snapShot = await messagesRef.get();

    messagesRef.on(
      "value",
      (snapshot) => {
        let message = [];

        snapshot.forEach((item) => {
          message.push(item.toJSON());
        });

        setMessages(message);
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.name);
      }
    );
  }

  async function handleSendMessage(message: string) {
    if (message == "") return;

    const messagesRef = database.ref("tickets/" + chatKey + "/messages");
    messagesRef.push({
      text: message,
      name: user.name,
      email: user.email,
      createdAt: new Date().toString(),
    });
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        {messages.map((message) => {
          const date = new Date(message.createdAt);
          const formatedDate = dateFormat(date, "ddd, HH:MM");

          return (
            <View key={message.createdAt} style={styles.messageContainer}>
              <View
                style={
                  message.email === user.email
                    ? styles.messageSended
                    : styles.messageRecived
                }
              >
                <Text>{message.text}</Text>
                <Text style={styles.sender}>
                  {message.name} - {formatedDate}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
      <ChatInput onSendPress={handleSendMessage} />
    </View>
  );
}
