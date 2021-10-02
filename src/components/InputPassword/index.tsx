import React, { useState } from "react";
import { TextInput, TextInputProps, TouchableOpacityProps, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { globalStyles } from "../../styles/globalStyles";
import { styles } from "./styles";

type ButtonProps = TextInputProps & {
  text: string;
  iconName?: string;
};

export function InputPassword({ iconName, style, ...rest }: ButtonProps) {
  const [text, setText] = useState("");

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={setText}
        autoCompleteType="email"
        {...rest}
      />
      <Icon
        style={styles.icon}
        name="mail"
        size={18}
        color={globalStyles.colors.gray500}
      />
    </View>
  );
}
