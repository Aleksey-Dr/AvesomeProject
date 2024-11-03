import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen.jsx';

import IMAGE from "./assets/photo_BG.jpg"

export default function App() {
  return (
    
      <ImageBackground
        source={IMAGE}
        resizeMode="cover"
        style={styles.container}
      >
        <RegistrationScreen />
        <StatusBar style="auto" />
      </ImageBackground>
      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBG: {
    height: "100%",
  },
});
