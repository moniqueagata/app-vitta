import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Splash from "./src/Screens/Splash";
import Welcome from "./src/Screens/Welcome";
import Login from "./src/Screens/Login";
import Cadastro from "./src/Screens/Cadastro";

import Home from "./src/Screens/Home";
import Glicemia from "./src/Screens/Glicemia";
import Vacinas from "./src/Screens/Vacinas";
import Nutrientes from "./src/Screens/Nutrientes";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Splash" component={Splash}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Welcome" component={Welcome}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Login" component={Login}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Cadastro" component={Cadastro}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Glicemia" component={Glicemia}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Vacinas" component={Vacinas}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="Nutrientes" component={Nutrientes}
        options={{
          headerShown: false
        }}
      />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}



