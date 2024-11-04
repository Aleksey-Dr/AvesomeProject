import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import RegistrationScreen from './Screens/RegistrationScreen.jsx';
import LoginScreen from './Screens/LoginScreen.jsx';

const MainStack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <MainStack.Navigator initialRouteName="RegistrationScreen">
          <MainStack.Screen name="Registration" component={RegistrationScreen} />
          <MainStack.Screen name="Login" component={LoginScreen} />
        </MainStack.Navigator>
      </NavigationContainer>
  );
};
