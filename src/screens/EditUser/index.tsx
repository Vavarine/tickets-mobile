import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect, useRef, useState } from "react";
import { Text, View, Keyboard, ToastAndroid } from "react-native";
import { User } from "../../@types";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { database } from "../../services/firebase";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";

interface EditUserParams {
  user: User;
  id: string;
}

export function EditUser() {
  const [toEditUser, setToEditUser] = useState({} as User);
  const [toEditUserId, setToEditUserId] = useState("");

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [isKeyBoardUp, setIsKeyBoardUp] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const { user, id } = route.params as EditUserParams;

  useEffect(() => {
    setToEditUser(user);
    setToEditUserId(id);

    setName(user.name);
    setEmail(user.email);
    setCompany(user.company);
    // setPassword(user.password);

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
      type: "costumer",
    };

    const userRef = database.collection("users").doc(id);

    await userRef.update(data);

    ToastAndroid.show("Usuário editado!", ToastAndroid.LONG);
    navigation.goBack();
  }

  async function handleDelete() {
    const userRef = database.collection("users").doc(id);

    await userRef.delete();

    ToastAndroid.show("Usuário removido!", ToastAndroid.LONG);
    navigation.goBack();
  }

  function emailIsValid(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Editar Usuário</Text>

      <View style={styles.inputsContainer}>
        <Input
          iconName="user"
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          autoCompleteType="name"
          autoCapitalize="words"
          style={{ marginBottom: 20 }}
        />

        <Input
          iconName="briefcase"
          placeholder="Empresa"
          value={company}
          onChangeText={setCompany}
          autoCapitalize="words"
          style={{ marginBottom: 20 }}
        />

        <Input
          iconName="mail"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCompleteType="email"
          style={{ marginBottom: 20 }}
        />

        <InputPassword
          value={password}
          placeholder="Senha"
          onChangeText={setPassword}
          autoCompleteType="password"
          style={{ marginBottom: 20 }}
        />

        <InputPassword
          value={repeatPassword}
          placeholder="Repita a senha"
          onChangeText={setRepeatPassword}
          autoCompleteType="password"
        />
      </View>

      {!isKeyBoardUp && (
        <View style={styles.buttonsContainer}>
          <Button
            style={{ width: theme.vw * 0.38, marginRight: theme.vw * 0.04 }}
            type="submit"
            text="Salvar"
            onPress={handleSubmit}
          />
          <Button
            style={{ width: theme.vw * 0.38 }}
            type="cancel"
            text="Excluir"
            onPress={handleDelete}
          />
        </View>
      )}
    </View>
  );
}
