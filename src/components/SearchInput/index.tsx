import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

export function SearchInput() {
  const [text, setText] = useState("");

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
        <Feather name="search" size={20} color={theme.colors.white} />
      </TouchableOpacity>
    </View>
  );
}
