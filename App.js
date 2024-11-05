import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BottomTabNavigator from './navigation/BottomTabNavigator.jsx';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
};
