import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Text, View, ToastAndroid, ActivityIndicator } from "react-native";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { TouchableOpacity } from "react-native-gesture-handler";

import { styles } from "./styles";
import useAuth from "../../hooks/useAuth";

export function LogIn() {
  const [isLoading, setIsLoading] = useState(false);
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

    setIsLoading(true);

    try {
      await login(email, password);
    } catch (err) {
      setIsLoading(false);
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
        <Button
          type="default"
          text="Entrar"
          onPress={handleSubmit}
          isLoading={isLoading}
        />
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => {
            navigation.navigate("SignIn" as any);
          }}
        >
          <Text style={styles.signInText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
