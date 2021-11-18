import React, { useState } from "react";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type InputProps = TextInputProps & {
  iconName?: string;
  inputStyle?: Object;
};

export function Input({ iconName, style, inputStyle, ...rest }: InputProps) {
  const [text, setText] = useState("");

  return (
    <View style={{ ...styles.inputContainer, ...(style as {}) }}>
      <TextInput
        style={{ ...styles.input, ...inputStyle }}
        selectionColor={theme.colors.gray700}
        value={text}
        onChangeText={setText}
        autoCompleteType="email"
        autoCapitalize="none"
        {...rest}
      />
      {iconName && (
        <Feather
          style={styles.icon}
          name={iconName as any}
          size={18}
          color={theme.colors.gray700}
        />
      )}
    </View>
  );
}
