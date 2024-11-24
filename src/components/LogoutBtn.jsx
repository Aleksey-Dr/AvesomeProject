import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

import LogoutIcon from "../icons/LogoutIcon";

const LogoutBtn = ({ profileScreen }) => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Login")}
      style={profileScreen && {
        position: 'absolute',
        right: 16,
        top: 22,
      }}
    >
      <LogoutIcon />
    </TouchableOpacity>
  );
};

export default LogoutBtn;