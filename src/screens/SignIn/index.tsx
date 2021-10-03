import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useRef, useState } from "react";
import { Text, View, Keyboard, ToastAndroid } from "react-native";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { database } from "../../services/firebase";

import { styles } from "./styles";

export function SignIn() {
  const [name, setName] = useState("");
  const [company, setcompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [isKeyBoardUp, setIsKeyBoardUp] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", () => {
      setIsKeyBoardUp(true);
    });
    const hideSubscription = Keyboard.addListener("keyboardDidHide", () => {
      setIsKeyBoardUp(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  async function handleSubmit() {
    if (
      name === "" ||
      company === "" ||
      email === "" ||
      password === "" ||
      repeatPassword === ""
    ) {
      ToastAndroid.show("Preencha todos os campos!", ToastAndroid.LONG);

      return;
    }

    if (!emailIsValid(email)) {
      ToastAndroid.show("Email não é valido!", ToastAndroid.LONG);

      return;
    }

    if (password !== repeatPassword) {
      ToastAndroid.show("Senhas não coincidem!", ToastAndroid.LONG);

      return;
    }

    const data = {
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      password: password.trim(),
    };

    const userRef = database.collection("users");

    const user = await userRef.where("email", "==", email).get();

    if (user.empty) {
      await userRef.add(data);

      ToastAndroid.show("Cadastrado!", ToastAndroid.LONG);
      navigation.navigate("LogIn" as any);
    } else {
      ToastAndroid.show("Usuário já existe", ToastAndroid.LONG);
    }
  }

  function emailIsValid(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>

      <View style={styles.inputsContainer}>
        <Input
          iconName="user"
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
          autoCompleteType="name"
          style={{ marginBottom: 20 }}
        />

        <Input
          iconName="briefcase"
          placeholder="Digite o nome da empresa"
          value={company}
          onChangeText={setcompany}
          style={{ marginBottom: 20 }}
        />

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
          style={{ marginBottom: 20 }}
        />

        <InputPassword
          value={repeatPassword}
          placeholder="Repita sua senha"
          onChangeText={setRepeatPassword}
          autoCompleteType="password"
        />
      </View>

      {!isKeyBoardUp && (
        <View style={styles.buttonsContainer}>
          <Button type="default" text="Cadastrar" onPress={handleSubmit} />
        </View>
      )}
    </View>
  );
}
