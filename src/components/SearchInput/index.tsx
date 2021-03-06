import React, { useEffect, useState } from "react";
import { ActivityIndicator, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

interface SearchInputProps {
  onSearchPress?: (searchTerm: string) => void;
  isLoading?: boolean;
}

export function SearchInput({ onSearchPress, isLoading = false }: SearchInputProps) {
  const [text, setText] = useState("");

  useEffect(() => {
    if (text === "") onSearchPress?.("");
  }, [text]);

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        autoCapitalize="none"
        selectionColor={theme.colors.gray700}
      />
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.4}
        onPress={() => onSearchPress(text)}
      >
        {isLoading ? (
          <ActivityIndicator size="small" color={theme.colors.purple900} />
        ) : (
          <Feather name="search" size={20} color={theme.colors.purple900} />
        )}
      </TouchableOpacity>
    </View>
  );
}
