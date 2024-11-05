import { TouchableOpacity } from "react-native"
import { useNavigation, useRoute } from "@react-navigation/native";

import ArrowLeftIcon from "../../icons/ArrowLeftIcon";

const BackBtn = ({ onPress }) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <TouchableOpacity onPress={onPress}>
      <ArrowLeftIcon />
    </TouchableOpacity>
  );
};

export default BackBtn;