import React, { useState } from "react";
import { TextInput, TextInputProps, TouchableOpacityProps, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { globalStyles } from "../../styles/globalStyles";
import { styles } from "./styles";

type InputProps = TextInputProps & {
  iconName?: string;
};

export function Input({ iconName, style, ...rest }: InputProps) {
  const [text, setText] = useState("");

  return (
    <View style={{ ...styles.inputContainer, ...(style as {}) }}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        autoCompleteType="email"
        autoCapitalize="none"
        {...rest}
      />
      {iconName && (
        <Icon
          style={styles.icon}
          name={iconName}
          size={18}
          color={globalStyles.colors.gray700}
        />
      )}
    </View>
  );
}
