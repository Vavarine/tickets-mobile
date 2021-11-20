import React from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { ChatInput } from "../ChatInput";

interface TicketChatProps {
  chatKey: string;
}

export function TicketChat({ chatKey }: TicketChatProps) {
  return (
    <View>
      <ScrollView>
        <Text>{chatKey}</Text>
      </ScrollView>
      <ChatInput />
    </View>
  );
}
