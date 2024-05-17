import { TouchableOpacity, Text, View } from "react-native";
import { HomeButtonStyles } from "./HomeButton.style";

export default function HomeButton({ navigation }: any) {
  const Change = () => {
    navigation.navigate("Home");
  };

  return (
    <View>
      <TouchableOpacity style={HomeButtonStyles.HomeButton} onPress={Change}>
        <Text style={HomeButtonStyles.text}>Home</Text>
      </TouchableOpacity>
    </View>
  );
}
