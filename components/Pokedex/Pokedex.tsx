import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { PokedexStyles } from "./Pokedex.style";
import Card from "./Card/Card";

interface PokedexpProps {
    navigation: any;
};

export default function Pokedex({navigation}: PokedexpProps) {
  const [pokemons, setPokemons] = useState<any>([]);
  const url = "https://tyradex.tech/api/v1/gen/1";
  useEffect(() => {
    (async () => {
        const data = await fetch(url);
        const json = await data.json();
        setPokemons(json);
      })();
  }, []);
  return (
    <View style={PokedexStyles.container}>
      <FlatList
        data={pokemons}
        renderItem={({ item }) => <Card pokemon={item} navigation={navigation}/>}
        keyExtractor={(item) => item.name.fr}
        numColumns={2}
      />
    </View>
  );
}
