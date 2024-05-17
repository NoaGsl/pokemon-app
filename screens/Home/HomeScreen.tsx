import { Text, TouchableOpacity, View } from "react-native";
import { HomeScreenStyles } from "./HomeScreen.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import PokedexButton from "../../components/Navigation/PokedexButton/PokedexButton";

interface HomeScreenProps {
  navigation: any;
}

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={HomeScreenStyles.container}>
        <View style={HomeScreenStyles.container}>
          <Text style={HomeScreenStyles.title}>Welcome to the PokeApp</Text>
          <View style={HomeScreenStyles.buttons}>
            <PokedexButton navigation={navigation} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
