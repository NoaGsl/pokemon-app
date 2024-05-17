import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { DetailsStyles } from "./Details.style";
import HomeButton from "../../components/Navigation/HomeButton/HomeButton";
import { getBackGroundColor } from "../../components/Color/Color_interpretation";
import Pokemon from "../../components/Pokemons/PokemonById";
import { useEffect,useState } from "react";

export default function Details({ route, navigation }: any) {
  const { pokemon } = route.params;
  const [preEvo, setpreEvo] = useState<any>(undefined);
  const [nextEvo, setNextEvo] = useState<any>(undefined);

  useEffect(() => {
    setpreEvo(undefined);
    setNextEvo(undefined);
    if(pokemon.evolution?.pre?.length > 0){
      setpreEvo(pokemon.evolution.pre[pokemon.evolution.pre.length - 1].pokedex_id);
    }
    if(pokemon.evolution?.next?.length > 0){
      setNextEvo(pokemon.evolution.next[0].pokedex_id);
    }
  }, [pokemon]);

  function NavigateToCombatStats() {
    navigation.navigate("CombatStats", { pokemon });
  }
  
  return (
    <SafeAreaProvider>
      <SafeAreaView style={DetailsStyles.container}>
        <HomeButton navigation={navigation} />
        <View
          style={[
            DetailsStyles.cardBackground,
            { backgroundColor: getBackGroundColor(pokemon) },
          ]}
        >
          <Text style={DetailsStyles.title}>{pokemon.name.fr}</Text>
          <Image
            style={DetailsStyles.image}
            source={{ uri: pokemon.sprites.regular }}
          />
          <View style={DetailsStyles.detailsBox}>
            <Text style={DetailsStyles.details}>
              Type 1: {pokemon.types[0].name}
            </Text>
            <Text style={DetailsStyles.details}>
              Type 2: {pokemon.types[1]?.name ?? "Aucun"}
            </Text>
            <Text style={DetailsStyles.details}>Height: {pokemon.height}</Text>
            <Text style={DetailsStyles.details}>Weight: {pokemon.weight}</Text>
            <Text style={DetailsStyles.details}>Catch rate: {pokemon.catch_rate}</Text>
            <TouchableOpacity onPress={NavigateToCombatStats}>
              <Text style={DetailsStyles.CombatStatsButton}>see combat stats</Text>
            </TouchableOpacity>
          </View>
          <View style={DetailsStyles.EvolutionBox}>
            <View style={DetailsStyles.preEvoBox}>
              {preEvo !== undefined ? (
                <Pokemon
                  key={preEvo}
                  style={DetailsStyles.preEvo}
                  pokemonId={preEvo}
                  navigation={navigation}
                />
              ) : <Text style={DetailsStyles.details}>Pas de sous évolution</Text>}
            </View>
            <View style={DetailsStyles.nextEvoBox}>
              {nextEvo !== undefined ? (
                <Pokemon
                  key={nextEvo}
                  style={DetailsStyles.nextEvo}
                  pokemonId={nextEvo}
                  navigation={navigation}
                />
              ) : <Text style={DetailsStyles.EvoText}>Pas d'évolution</Text>}
            </View>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
