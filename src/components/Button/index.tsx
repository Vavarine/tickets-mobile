import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  text: string;
  isLoading?: boolean;
  type: "default" | "submit" | "cancel";
  iconName?: string;
};

export function Button({ text, type, iconName, style, isLoading, ...rest }: ButtonProps) {
  if (isLoading) {
    return (
      <TouchableOpacity
        style={{ ...styles[type], ...(style as {}) }}
        {...rest}
        activeOpacity={0.8}
      >
        <ActivityIndicator size="small" color={theme.colors.purple900} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={{ ...styles[type], ...(style as {}) }}
      {...rest}
      activeOpacity={0.8}
    >
      {iconName && <Icon style={styles.icon} name="eye" size={18} color="#fff" />}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
