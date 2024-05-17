import { Text, TouchableOpacity, View } from "react-native";
import { DetailButtonStyles } from "./DetailButton.style";

export default function DetailButton({ pokemon,navigation }: any) {
  const Change = () => {
    console.log(pokemon);
    navigation.navigate("Details", { pokemon });
  };
  return (
    <View>
      <TouchableOpacity
        style={DetailButtonStyles.button}
        onPress={Change}
      >
        <Text style={DetailButtonStyles.text}>Details</Text>
      </TouchableOpacity>
    </View>
  );
}
