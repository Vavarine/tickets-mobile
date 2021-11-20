import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { User } from "../../@types";
import { UserCard } from "../../components/UserCard";
import { firestore } from "../../services/firebase";
import { Input } from "../../components/Input";

import { styles } from "./styles";
import { theme } from "../../global/styles/theme";
import useAuth from "../../hooks/useAuth";
import { ScrollView } from "react-native-gesture-handler";

export function Users() {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);

  const { user } = useAuth();

  const isFocused = useIsFocused();

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getUsers();
  }, [isFocused]);

  useEffect(() => {
    getUsers(searchTerm);
  }, [searchTerm]);

  async function getUsers(searchString?: string) {
    const usersRef = firestore.collection("users");
    if (!searchString || searchString === "") {
      const snapshot = await usersRef.get();

      const usersList = [];

      snapshot.forEach((user) => {
        usersList.push({ ...user.data(), id: user.id });
      });

      setUsers(usersList);

      return;
    }

    const snapshot = await usersRef
      .orderBy("email")
      .startAt(searchString)
      .endAt(searchString + "\uf8ff")
      .get();

    const usersList = [];

    snapshot.forEach((user) => {
      usersList.push({ ...user.data(), id: user.id });
    });

    setUsers(usersList);
  }

  return (
    <View style={{ ...styles.container, justifyContent: "flex-start" }}>
      <View style={styles.seachContainer}>
        <Input
          iconName="search"
          value={searchTerm}
          onChangeText={setSearchTerm}
          style={{ width: theme.vw * 0.9 }}
          inputStyle={{ width: theme.vw * 0.9 }}
        />
      </View>
      <ScrollView contentContainerStyle={styles.list}>
        {users.map((curUser) => {
          if (curUser.email === user.email) return;

          return <UserCard key={curUser.id} user={curUser} id={curUser.id} />;
        })}
      </ScrollView>
    </View>
  );
}
