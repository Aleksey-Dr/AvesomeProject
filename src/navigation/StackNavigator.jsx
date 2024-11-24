import React, { useState } from 'react';
import 'react-native-gesture-handler';

import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from '@react-navigation/native';

import RegistrationScreen from '../Screens/RegistrationScreen.jsx';
import LoginScreen from '../Screens/LoginScreen.jsx';
import PostsScreen from '../Screens/PostsScreen.jsx';
import BottomTabNavigator from './BottomTabNavigator.jsx';

const MainStack = createStackNavigator();

const StackNavigator = () => {
    const [showTabs, setShowTabs] = useState(false);

    const navigation = useNavigation();
    const currentRoute = navigation.getCurrentRoute();

    currentRoute !== undefined && currentRoute.name === "Posts" && setShowTabs(true);
    
    return (
        showTabs ? (<MainStack.Navigator
            initialRouteName="Registration"
            screenOptions={{
                headerShown: false,
            }}
        >
            <MainStack.Screen name="Registration" component={RegistrationScreen} />
            <MainStack.Screen name="Login" component={LoginScreen} />
            <MainStack.Screen name="Posts" component={PostsScreen} />
        </MainStack.Navigator>)
        : <BottomTabNavigator />
    );
};

export default StackNavigator;