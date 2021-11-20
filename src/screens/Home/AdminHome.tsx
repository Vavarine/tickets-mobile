import React from "react";
import { theme } from "../../global/styles/theme";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";

import { Tickets } from "../tickets";
import { Users } from "../Users/Index";

const Tab = createBottomTabNavigator();

export function AdminHome() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string | any;

          if (route.name === "Tickets") {
            iconName = "layers";
          } else if (route.name === "Users") {
            iconName = "users";
          }

          return <Feather name={iconName} color={color} size={22} />;
        },
        tabBarActiveTintColor: theme.colors.purple900,
        tabBarInactiveTintColor: theme.colors.gray400,
      })}
    >
      <Tab.Screen name="Tickets" component={Tickets} options={{ headerShown: false }} />
      <Tab.Screen name="Users" component={Users} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
