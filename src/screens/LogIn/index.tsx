import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Button } from "../../components/Button";
import { globalStyles } from "../../styles/globalStyles";

import { styles } from "./styles";

export function LogIn() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            autoCompleteType="email"
          />
          <Icon
            style={styles.icon}
            name="mail"
            size={18}
            color={globalStyles.colors.gray500}
          />
        </View>

        <View style={{ ...styles.inputContainer, ...styles.inputContainerPassword }}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            autoCompleteType="password"
            secureTextEntry={isPasswordVisible}
          />
          <View style={styles.icon}>
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
              activeOpacity={0.4}
            >
              {isPasswordVisible ? (
                <Icon name="eye" size={18} color={globalStyles.colors.gray500} />
              ) : (
                <Icon name="eye-off" size={18} color={globalStyles.colors.gray500} />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.buttonsContainer}>
        <Button type="default" text="Entrar" />
        <Button type="default" text="Cadastrar" style={{ marginTop: 10 }} />
      </View>
    </View>
  );
}
