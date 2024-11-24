import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    TouchableOpacity,
    Alert,
    TouchableWithoutFeedback,
    KeyboardAvoidingView,
    Keyboard,
    Platform,
} from "react-native";

import CameraIcon from "../icons/CameraIcon";
import TrashIcon from "../icons/TrashIcon.jsx";

const CreatePosts = () => {
    return (
        <View style={styles.containerCreatePosts}>
            <Pressable style={styles.downloadPhotoBtn}>
                <View style={styles.containerCameraIcon}>
                    <CameraIcon />
                </View>
            </Pressable>
            <Text style={styles.descriptionDownloadPhoto}>Завантажте фото</Text>
            <TextInput
                placeholder="Назва..."
                placeholderTextColor="#BDBDBD"
                maxLength={40}
                style={styles.input}
            />
            <TextInput
                placeholder="Місцевість..."
                placeholderTextColor="#BDBDBD"
                maxLength={40}
                style={styles.input}
            />
            <View style={styles.trashBtn}>
                <TrashIcon />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerCreatePosts: {
        flex: 1,
        paddingTop: 32,
        paddingRight: 16,
        paddingLeft: 16,
        backgroundColor: "#FFFFFF",
    },
    downloadPhotoBtn: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 240,
        marginBottom: 8,
        backgroundColor: "#E8E8E8",
        borderRadius: 8,
    },
    containerCameraIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60,
        backgroundColor: "#FFFFFF",
        borderRadius: 30,
    },
    descriptionDownloadPhoto: {
        marginBottom: 32,
        fontSize: 16,
        fontWeight: "normal",
        color: "#BDBDBD",
    },
    input: {
        width: "100%",
        height: 50,
        marginBottom: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#E8E8E8",
    },
    trashBtn: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        width: 70,
        height: 40,
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 8,
        borderRadius: 20,
        backgroundColor: "#F6F6F6",
    },
});

export default CreatePosts;