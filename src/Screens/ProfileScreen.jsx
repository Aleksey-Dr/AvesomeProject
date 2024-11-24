import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TouchableOpacity,
    Image,
    FlatList,
} from "react-native";

import Background from "../components/Background";
import LogoutBtn from "../components/LogoutBtn";
import PostCard from "../components/PostCard";

import PlusIcon from "../icons/PlusIcon";
import CloseIcon from "../icons/CloseIcon";

import IMAGE from "../../assets/avatar.jpg";

import { posts } from "../data/data";

const ProfileScreen = () => {
    const [addedAvatar, setAddedAvatar] = useState(true);

    return (
        <Background>
            <View style={styles.containerProfile}>
                <View style={styles.containerAvatar}>
                    {addedAvatar &&
                        <Image
                            source={IMAGE}
                            style={styles.imageAvatar}
                        />
                    }
                    <Pressable
                        onPress={() => setAddedAvatar(!addedAvatar)}
                        style={[styles.btnAddAvatar, {borderColor: !addedAvatar ? "#FF6C00" : "#DBDBDB"}]}
                    >
                        {!addedAvatar ? <PlusIcon /> : <CloseIcon />}
                    </Pressable>
                </View>
                <LogoutBtn profileScreen={true} />
                <Text style={styles.title}>Natali Romanova</Text>
                <FlatList
                    data={posts}
                    renderItem={({ item }) => <PostCard card={item} />}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={{ height: 32 }}></View>}
                />
            </View>
        </Background>
    );
};

const styles = StyleSheet.create({
    containerProfile: {
        position: 'relative',

        width: '100%',
        height: 515,
        
        paddingTop: 92,
        paddingRight: 16,
        paddingLeft: 16,

        marginTop: 'auto',

        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: '#FFFFFF',

        textAlign: 'center',
    },
    containerAvatar: {
        position: 'absolute',
        left: "50%",
        transform: [
            { translateX: -40 },
            { translateY: -60 },
        ],

        width: 120,
        height: 120,

        borderRadius: 16,
        backgroundColor: "#F6F6F6",
    },
    imageAvatar: {
        borderRadius: 16,
    },
    btnAddAvatar: {
        position: 'absolute',
        top: "100%",
        left: "100%",
        transform: [
            { translateX: -12 },
            { translateY: -39 },
        ],

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        width: 25,
        height: 25,

        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#FF6C00",
        backgroundColor: "#FFFFFF",
    },
    title: {
        marginBottom: 32,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "500",
    },
    inputContainer: {
        gap: 16,
        marginBottom: 43,
    },
    input: {
        width: "100%",
        height: 50,

        paddingTop: 16,
        paddingBottom: 15,
        paddingLeft: 16,

        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: "#F6F6F6",

        fontSize: 16,
    },
    passwordContainer: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    toggleVisible: {
        position: 'absolute',
        right: 16,
    },
    btn: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        width: "100%",
        height: 51,

        marginBottom: 16,

        borderRadius: 100,
        backgroundColor: "#FF6C00",
    },
    btnText: {
        textAlign: "center",
        fontSize: 16,
        color: "#FFFFFF",
    },
    microText: {
        textAlign: "center",
        fontSize: 16,
        color: "#1B4371",
    },
});

export default ProfileScreen;