
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Pressable,
    TouchableOpacity,
    Alert,
    Image,
    FlatList,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";

import IMAGE from "../assets/avatar.jpg";

export default PostsScreen = () => {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.postsContainer}>
                <View style={styles.profileContainer}>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={IMAGE}
                            style={[styles.avatarContainer,
                                mageStyle={
                                    width: 60,
                                    height: 60,
                                }
                            ]}
                        />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.nameContainer}>Natali Romanova</Text>
                        <Text style={styles.emailContainer}>email@example.com</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    postsContainer: {
        flex: 1,

        paddingTop: 32,
        paddingRight: 16,
        paddingLeft: 16,

        backgroundColor: "#FFFFFF",
    },
    profileContainer: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
    },
    avatarContainer: {
        width: 60,
        height: 60,
    },
    textContainer: {
        marginLeft: 8,
    },
    nameContainer: {
        fontSize: 13,
        fontWeight: "bold",
    },
    emailContainer: {
        fontSize: 11,
    },
});