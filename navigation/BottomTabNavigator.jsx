import React from "react";
import { View, } from "react-native";
import {
    StyleSheet,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import RegistrationScreen from '../Screens/RegistrationScreen.jsx';
import LoginScreen from '../Screens/LoginScreen.jsx';
import PostsScreen from "../Screens/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen";

import LogoutBtn from "../components/LogoutBtn";
import PostsBtn from "../components/PostsBtn";
import CreatePostsBtn from "../components/CreatePostsBtn";
import ProfileBtn from "../components/ProfileBtn";

import ArrowLeftIcon from "../icons/ArrowLeftIcon.jsx";

const Tabs = createBottomTabNavigator();

export default BottomTabNavigator = () => {

    return (
        <Tabs.Navigator
            initialRouteName="Posts"
            screenOptions={{
                headerTitleAlign: "center",
                headerRightContainerStyle: { paddingRight: 16 },
                tabBarShowLabel: false,
            }}>
            <Tabs.Screen
                name="Registration"
                component={RegistrationScreen}
                options={{
                    headerShown: false,
                    tabBarStyle: { display: "none" },
                    tabBarItemStyle: { display: "none" }
                }}
            />
            <Tabs.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false,
                    tabBarStyle: { display: "none" },
                    tabBarItemStyle: { display: "none" }
                }}
            />
            <Tabs.Screen
                name="Posts"
                component={PostsScreen}
                options={{
                    title: "Публікації",
                    headerStatusBarHeight: 44,
                    headerRight: () => <LogoutBtn />,
                    tabBarIcon: () => <PostsBtn />,
                }}
            />
            <Tabs.Screen
                name="CreatePosts"
                component={CreatePostsScreen}
                options={{
                    headerRight: () => <ArrowLeftIcon />,
                    tabBarIcon: () => (
                        <View style={styles.tabBarItem}>
                            <CreatePostsBtn color="#FFFFFF" />
                        </View>
                    ),
                }}
            />
            <Tabs.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    headerRight: () => <ArrowLeftIcon />,
                    tabBarIcon: () => <ProfileBtn />,
                }}
            />
        </Tabs.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#FF6C00",
    }
});