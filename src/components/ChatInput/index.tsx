import React, { useEffect, useState } from "react";
import { ActivityIndicator, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface ChatInputProps {
  onSendPress?: (searchTerm: string) => void;
  isLoading?: boolean;
}

export function ChatInput({ onSendPress, isLoading = false }: ChatInputProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (text === "") onSendPress?.("");
  }, [text]);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        autoCompleteType="email"
        autoCapitalize="none"
        selectionColor={theme.colors.gray700}
      />
      <TouchableOpacity style={styles.button} activeOpacity={0.4}>
        {isLoading ? (
          <ActivityIndicator size="small" color={theme.colors.purple900} />
        ) : (
          <Feather
            name="send"
            size={20}
            color={theme.colors.purple900}
            onPress={() => onSendPress(text)}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}
