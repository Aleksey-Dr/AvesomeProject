import React from "react";
import {
    StyleSheet,
    Text,
    FlatList,
    View,
    Image,
    TextInput,
} from "react-native";

import SendMessageBtn  from "../components/SendMessageBtn";

import SUNSET from "../../assets/sunset.jpg";

import { comments } from "../data/comments";

const CommentsScreen = () => {
    return (
        <View style={styles.containerComments}>
            <Image
                source={SUNSET}
                style={styles.commentImg}
            />
            <FlatList
                data={comments}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.commentItem}>
                        <View style={styles.commentText}>
                            <Text style={styles.commentTextMessage}>{item.message}</Text>
                            <Text style={styles.commentTextDatetime}>{item.datetime}</Text>
                        </View>
                        <Image source={item.avatar} style={styles.commentAvatar} />
                    </View>
                )}
                contentContainerStyle={styles.commentsList}
            />
            <View style={styles.commentInputContainer}>
                <TextInput
                    placeholder="Коментувати..."
                    placeholderTextColor="#BDBDBD"
                    style={styles.commentInput}
                />
                <SendMessageBtn />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    containerComments: {
        flex: 1,
        paddingTop: 32,
        paddingRight: 16,
        paddingLeft: 16,
        backgroundColor: "#FFFFFF",
    },
    commentImg: {
        width: "100%",
        marginBottom: 32,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    commentsList: {
        gap: 24,
    },
    commentItem: {
        flexDirection: 'row',
        gap: 16,
    },
    commentAvatar: {
        width: 28,
        height: 28,
        marginLeft: 16,
        borderRadius: 14,
    },
    commentText: {
        flex: 1,
        padding: 16,
        borderRadius: 6,
        borderTopRightRadius: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
    commentTextMessage: {
        marginBottom: 8,
        fontSize: 14,
        fontWeight: "normal",
        lineHeight: 18,
        color: "#212121",
    },
    commentTextDatetime: {
        fontSize: 10,
        fontWeight: "normal",
        textAlign: 'right',
        color: "#BDBDBD",
    },
    commentInputContainer: {
        position: 'relative',
        marginTop: 16,
        marginBottom: 16,
    },
    commentInput: {
        width: "100%",
        height: 50,
        padding: 16,
        backgroundColor: "#F6F6F6",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#E8E8E8",
        fontSize: 16,
        fontWeight: "normal",
    },
});

export default CommentsScreen;