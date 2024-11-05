import { TouchableOpacity } from "react-native";
import LogoutIcon from "../icons/LogoutIcon";
import { useNavigation } from '@react-navigation/native';

const LogoutBtn = () => {
    const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
      <LogoutIcon />
    </TouchableOpacity>
  );
};

export default LogoutBtn;