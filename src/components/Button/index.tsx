import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  text: string;
  type: "default" | "submit" | "cancel";
  iconName?: string;
};

export function Button({ text, type, iconName, style, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity style={{ ...styles[type], ...(style as {}) }} {...rest}>
      {iconName && <Icon style={styles.icon} name="eye" size={18} color="#fff" />}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
