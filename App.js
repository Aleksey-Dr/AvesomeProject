import React, { useEffect } from "react";
import 'react-native-gesture-handler';
import { Text, } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import store from "./src/redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import { Provider, useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config";
import { loginUser, logoutUser } from "./src/redux/authSlice.js";

import StackNavigator from './src/navigation/StackNavigator.jsx';

const AuthListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      if (user) {
        const uid = user.uid;
        const email = user.email;
        const displayName = user.displayName;
        dispatch(loginUser({ uid, email, displayName }));
      } else {
        dispatch(logoutUser());
      }
    });
  }, [dispatch]);

  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default function App() {
  console.log(process.env.GOOGLE_API_KEY);
  
  return (
    <Provider store={store.store}>
      <PersistGate
        loading={<Text>Loading...</Text>}
        persistor={store.persistor}
      >
        <AuthListener />
      </PersistGate>
    </Provider>
  );
};
