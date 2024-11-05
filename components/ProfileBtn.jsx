import { TouchableOpacity } from "react-native";
import UserIcon from "../icons/UserIcon";
import { useNavigation } from '@react-navigation/native';

const ProfileBtn = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <UserIcon />
        </TouchableOpacity>
    );
};

export default ProfileBtn;