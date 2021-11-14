import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { User } from "../../@types";
import { UserCard } from "../../components/UserCard";
import { database } from "../../services/firebase";
import { Input } from "../../components/Input";

import { styles } from "./styles";
import { globalStyles } from "../../styles/globalStyles";
import useAuth from "../../hooks/useAuth";

export function AdminHome() {
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
    const usersRef = database.collection("users");
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
      <View
        style={{
          marginTop: 30,
          marginBottom: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <Input iconName="search" value={searchTerm} onChangeText={setSearchTerm} />
      </View>

      <View>
        {users.map((user) => {
          return <UserCard key={user.id} user={user} id={user.id} />;
        })}
      </View>
    </View>
  );
}