import { TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native";

import MessageIcon from "../icons/MessageIcon";

const CommentsBtn = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
            <MessageIcon />
        </TouchableOpacity>
    );
};

export default CommentsBtn;