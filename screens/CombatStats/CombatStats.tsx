import { Image, Text, TouchableOpacity, View } from "react-native";
import { CombatStatsStyles } from "./CombatStats.style";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { getBackGroundColor } from "../../components/Color/Color_interpretation";
import { DetailsStyles } from "../Details/Details.style";
import HomeButton from "../../components/Navigation/HomeButton/HomeButton";
import DetailButton from "../../components/Navigation/DetailButton/DetailButton";

interface CombatStatsProps {
  route: any;
  navigation: any;
}

export default function CombatStats({ route, navigation }: CombatStatsProps) {
  const { pokemon } = route.params;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={CombatStatsStyles.container}>
      <HomeButton navigation={navigation} />
        <View
          style={[
            DetailsStyles.cardBackground,
            { backgroundColor: getBackGroundColor(pokemon) },
          ]}
        >
          <View style={CombatStatsStyles.statsContainer}>
            <Text style={DetailsStyles.title}>{pokemon.name.fr}</Text>
            <Image style={DetailsStyles.image} source={{ uri: pokemon.sprites.regular }} />
            <Text style={DetailsStyles.details}>Combat Stats</Text>
            <Text style={DetailsStyles.details}>HP : {pokemon.stats.hp}</Text>
            <Text style={DetailsStyles.details}>Attack : {pokemon.stats.atk}</Text>
            <Text style={DetailsStyles.details}>Defense : {pokemon.stats.def}</Text>
            <Text style={DetailsStyles.details}>Special Attack : {pokemon.stats.spe_atk}</Text>
            <Text style={DetailsStyles.details}>Special Defense : {pokemon.stats.spe_def}</Text>
            <Text style={DetailsStyles.details}>Speed : {pokemon.stats.vit}</Text>
          </View>
          <DetailButton navigation={navigation} pokemon={pokemon}/>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
