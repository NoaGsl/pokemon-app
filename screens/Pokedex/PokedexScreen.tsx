import { Text, TouchableOpacity, View } from "react-native";
import { PokedexScreenStyle } from "./PokedexScreen.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import HomeButton from "../../components/Navigation/HomeButton/HomeButton";
import Pokedex from "../../components/Pokedex/Pokedex";

interface PokedexScreenProps {
  navigation: any;
}

export default function PokedexScreen({ navigation }: PokedexScreenProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={PokedexScreenStyle.container}>
        <HomeButton navigation={navigation} />
        <Pokedex redirect="Details" navigation={navigation} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
