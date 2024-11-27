import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import CommentsBtn from "./CommentsBtn";

import MapPinIcon from "../icons/MapPinIcon";
import LikeIcon from "../icons/LikeIcon";

const PostCard = (
    {card: { id, img, title, comments, likes, location, }}
) => {
    const navigation = useNavigation();
    
    return (
        <View>
            <Image source={img} style={styles.cardImg} />
            <Text style={styles.cardTitle}>{title}</Text>
            <View style={styles.cardDescription}>
                <View style={styles.cardComments}>
                    <CommentsBtn id={id} />
                    <Text style={styles.cardText}>{comments}</Text>
                </View>
                <View style={styles.cardComments}>
                    <LikeIcon />
                    <Text style={styles.cardText}>{likes}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Map")}
                    style={styles.cardLocation}
                >
                    <MapPinIcon />
                    <Text style={styles.cardLocationText}>{location}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardImg: {
        width: "100%",
        marginBottom: 8,
        borderRadius: 8,
    },
    cardTitle: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: "500",
    },
    cardDescription: {
        display: "flex",
        flexDirection: "row",
    },
    cardComments: {
        display: "flex",
        flexDirection: "row",
        marginRight: 24,
    },
    cardText: {
        marginLeft: 6,
        fontSize: 16,
    },
    cardLocation: {
        display: "flex",
        flexDirection: "row",
        marginLeft: 'auto',
    },
    cardLocationText: {
        marginLeft: 4,
        textDecorationLine: "underline",
        fontSize: 16,
    },
});

export default PostCard;