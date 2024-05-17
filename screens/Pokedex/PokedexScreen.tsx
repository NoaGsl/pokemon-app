import { Text, TouchableOpacity, View } from "react-native";
import { PokedexScreenStyle } from "./PokedexScreen.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface PokedexScreenProps {
  navigation: any;
}

export default function PokedexScreen({ navigation }: PokedexScreenProps) {
  const Change = () => {
    navigation.navigate("Home");
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView style={PokedexScreenStyle.container}>
          <TouchableOpacity style={PokedexScreenStyle.HomeButton} onPress={Change}>
            <Text style={PokedexScreenStyle.text}>Home</Text>
          </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
