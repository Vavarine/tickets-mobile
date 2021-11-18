import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../global/styles/theme";
import { styles } from "./styles";

type ButtonProps = TouchableOpacityProps & {
  text: string;
  isLoading?: boolean;
  type: "default" | "submit" | "cancel";
  iconName?: string;
};

export function Button({
  text,
  type,
  iconName,
  style,
  isLoading = false,
  ...rest
}: ButtonProps) {
  if (isLoading) {
    return (
      <TouchableOpacity
        style={{ ...styles[type], ...(style as {}) }}
        {...rest}
        activeOpacity={0.8}
      >
        <ActivityIndicator size="small" color={theme.colors.white} />
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={{ ...styles[type], ...(style as {}) }}
      {...rest}
      activeOpacity={0.8}
    >
      {iconName && (
        <Feather style={styles.icon} name={iconName as any} size={18} color="#fff" />
      )}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
