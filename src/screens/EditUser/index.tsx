import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useEffect, useRef, useState } from "react";
import { Text, View, Keyboard, ToastAndroid } from "react-native";
import { User } from "../../@types";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { InputPassword } from "../../components/InputPassword";
import { firestore } from "../../services/firebase";
import { theme } from "../../global/styles/theme";

import { styles } from "./styles";
import { RadioSelector } from "../../components/RadioSelector";

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
  const [type, setType] = useState<User["type"]>();

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
    setType(user.type);
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
    if (name === "" || company === "" || email === "") {
      ToastAndroid.show("Preencha todos os campos!", ToastAndroid.LONG);

      return;
    }

    if (!emailIsValid(email)) {
      ToastAndroid.show("Email não é valido!", ToastAndroid.LONG);

      return;
    }

    const data = {
      name: name.trim(),
      company: company.trim(),
      email: email.trim(),
      type: type,
    };

    const userRef = firestore.collection("users").doc(id);

    await userRef.update(data);

    ToastAndroid.show("Usuário editado!", ToastAndroid.LONG);
    navigation.goBack();
  }

  async function handleDelete() {
    const userRef = firestore.collection("users").doc(id);

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
      <View style={styles.inputsContainer}>
        <Input
          iconName="user"
          placeholder="Nome"
          value={name}
          onChangeText={setName}
          autoCompleteType="name"
          autoCapitalize="words"
          style={{ marginBottom: 20, width: theme.vw * 0.9 }}
          inputStyle={{ width: theme.vw * 0.9 }}
        />

        <Input
          iconName="briefcase"
          placeholder="Empresa"
          value={company}
          onChangeText={setCompany}
          autoCapitalize="words"
          style={{ marginBottom: 20, width: theme.vw * 0.9 }}
          inputStyle={{ width: theme.vw * 0.9 }}
        />

        <Input
          iconName="mail"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCompleteType="email"
          style={{ marginBottom: 40, width: theme.vw * 0.9 }}
          inputStyle={{ width: theme.vw * 0.9 }}
        />
        <RadioSelector
          onSelect={(value: User["type"]) => setType(value)}
          items={[
            { title: "Admin", value: "admin", selected: user.type === "admin" },
            { title: "Dev", value: "dev", selected: user.type === "dev" },
            { title: "Cliente", value: "costumer", selected: user.type === "costumer" },
          ]}
        />
      </View>

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
    </View>
  );
}
