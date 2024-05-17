import { Text, TouchableOpacity, View } from "react-native";
import { HomeScreenStyles } from "./HomeScreen.style";

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const Change = () => {
    navigation.navigate("Pokedex");
  };
  return (
    <View style={HomeScreenStyles.container}>
      <Text style={HomeScreenStyles.title}>Welcome to the PokeApp</Text>
      <View style={HomeScreenStyles.buttons}>
        <TouchableOpacity
          style={HomeScreenStyles.pokedexButton}
          onPress={Change}
        >
          <Text style={HomeScreenStyles.text}>Pokedex</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
