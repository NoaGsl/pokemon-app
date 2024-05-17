import { Text, TouchableOpacity, View } from "react-native";
import { PokedexButtonStyles } from "./PokedexButton.style";

export default function PokedexButton({ navigation }: any) {
  const Change = () => {
    navigation.navigate("Pokedex");
  };
  return (
    <View>
      <TouchableOpacity
        style={PokedexButtonStyles.pokedexButton}
        onPress={Change}
      >
        <Text style={PokedexButtonStyles.text}>Pokedex</Text>
      </TouchableOpacity>
    </View>
  );
}
