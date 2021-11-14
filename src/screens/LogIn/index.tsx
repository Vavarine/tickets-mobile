import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ToastAndroid } from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";

import { styles } from "./styles";
import { database } from "../../services/firebase";
import useAuth from "../../hooks/useAuth";

export function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigation = useNavigation();

  async function handleSubmit() {
    if (email === "" || password === "") {
      ToastAndroid.show("Preencha todos os campos!", ToastAndroid.LONG);

      return;
    }

    if (!emailIsValid(email)) {
      ToastAndroid.show("Email não é valido!", ToastAndroid.LONG);

      return;
    }

    try {
      await login(email, password);
    } catch (err) {
      return;
    }

    navigation.navigate("Home" as any);
  }

  function emailIsValid(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputsContainer}>
        <Input
          iconName="mail"
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          autoCompleteType="email"
          style={{ marginBottom: 20 }}
        />

        <InputPassword
          value={password}
          placeholder="Digite sua senha"
          onChangeText={setPassword}
          autoCompleteType="password"
        />
      </View>

      <View style={styles.buttonsContainer}>
        <Button type="default" text="Entrar" onPress={handleSubmit} />
        <Button
          type="default"
          text="Cadastrar"
          style={{ marginTop: 10 }}
          onPress={() => {
            navigation.navigate("SignIn" as any);
          }}
        />
      </View>
    </View>
  );
}
