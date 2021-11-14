import React, { createContext, useState, useEffect } from "react";
import { ToastAndroid } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { auth, database } from "../services/firebase";
import storage from "../services/storage";

import { User } from "../@types";

interface AuthContextInterface {
  user?: User;
  signedIn: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  signIn: (userData: User, password: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextInterface);

const AuthContextProvider: React.FC = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User>(null);
  const [signedIn, setSignedIn] = useState(false);

  useEffect(() => {
    async function getUserFromStorage() {
      try {
        const user: User = await storage.load({
          key: "@TMAuth:user",
        });

        setUser(user);
      } catch (err) {}

      setIsLoading(false);
    }

    getUserFromStorage();
  }, []);

  useEffect(() => {
    if (!user) return;

    setSignedIn(true);
  }, [user]);

  async function login(email: string, password: string) {
    try {
      const authData = await auth.signInWithEmailAndPassword(email, password);

      const usersRef = database.collection("users");
      const snapshot = await usersRef.where("email", "==", authData.user.email).get();

      let loggedUser: User;
      snapshot.forEach((user) => (loggedUser = user.data() as User));

      setUser(loggedUser);

      await storage.save({
        key: "@TMAuth:user",
        data: loggedUser,
      });

      ToastAndroid.show("Logado!", ToastAndroid.LONG);
    } catch (err) {
      const { code } = err;

      const errMap = {
        "auth/wrong-password": () => {
          ToastAndroid.show("Senha incorreta", ToastAndroid.LONG);
        },
        "auth/user-not-found": () => {
          ToastAndroid.show("Usuário não encontrado", ToastAndroid.LONG);
        },
      };

      errMap[code]?.() && ToastAndroid.show("Erro ao logar", ToastAndroid.LONG);

      throw new Error(code);
    }
  }

  async function signIn(userData: User, password: string) {
    const { email } = userData;

    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        ToastAndroid.show("Usuário já existe", ToastAndroid.LONG);
      } else {
        ToastAndroid.show("Não foi possivel te cadastrar", ToastAndroid.LONG);
      }

      throw new Error(err.code);
    }

    const userRef = database.collection("users");
    await userRef.add(userData);

    ToastAndroid.show("Cadastrado!", ToastAndroid.LONG);
  }

  async function logOut() {
    await auth.signOut();

    await storage.remove({
      key: "@TMAuth:user",
    });

    setSignedIn(false);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, signedIn, isLoading, login, logOut, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
