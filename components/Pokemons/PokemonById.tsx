import { useEffect,useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { evolutionStyles } from "./PokemonById.style";

export default function Pokemon({ pokemonId, navigation }: any) {
    const [pokemon, setPokemon] = useState<any>();

  const url = `https://tyradex.tech/api/v1/pokemon/${pokemonId}`;

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setPokemon(data);
    })();
  }, []);

  function SeePokemonDetails() {
    navigation.navigate("Details", { pokemon });
  }

  return (
    <View>
      <TouchableOpacity onPress={SeePokemonDetails}>
        <Image
            style={evolutionStyles.image}
          source={{
            uri: pokemon?.sprites.regular,
          }}
        />
        <Text style={evolutionStyles.title}>{pokemon?.name.fr}</Text>
      </TouchableOpacity>
    </View>
  );
}
