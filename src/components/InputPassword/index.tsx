import React, { useState } from "react";
import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type InputPasswordProps = TextInputProps;

export function InputPassword({ style, ...rest }: InputPasswordProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  return (
    <View style={{ ...styles.inputContainer, ...(style as {}) }}>
      <TextInput
        style={styles.input}
        selectionColor={theme.colors.gray700}
        {...rest}
        secureTextEntry={isPasswordVisible}
      />
      <View style={styles.icon}>
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          activeOpacity={0.4}
        >
          {isPasswordVisible ? (
            <Icon name="eye" size={18} color={theme.colors.gray500} />
          ) : (
            <Icon name="eye-off" size={18} color={theme.colors.gray500} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
