import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { EditUser } from "../screens/EditUser";
import NewTicket from "../screens/NewTicket";
import useAuth from "../hooks/useAuth";
import Header from "../components/header";
import { TicketScreen } from "../screens/Ticket";
import { theme } from "../global/styles/theme";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  const { user } = useAuth();

  return (
    <Navigator
      screenOptions={{
        headerStyle: { backgroundColor: theme.colors.gray400 },
        headerTitleStyle: {
          color: theme.colors.purple900,
          fontFamily: theme.fonts.text400,
        },
        headerTintColor: theme.colors.purple900,
      }}
    >
      <Screen name="Home" component={Home} options={{ headerTitle: Header }} />
      <Screen
        name="EditUser"
        component={EditUser}
        options={{ title: "Editar usuario" }}
      />
      <Screen
        name="Ticket"
        component={TicketScreen}
        options={({ route }: any) => ({ title: "Ticket #" + route.params.ticket.id })}
      />
      <Screen name="NewTicket" component={NewTicket} options={{ title: "Novo Ticket" }} />
    </Navigator>
  );
}
