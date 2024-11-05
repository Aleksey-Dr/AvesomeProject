import { TouchableOpacity } from "react-native";
import GreedIcon from "../icons/GreedIcon";
import { useNavigation } from '@react-navigation/native';

const PostsBtn = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
            <GreedIcon />
        </TouchableOpacity>
    );
};

export default PostsBtn;