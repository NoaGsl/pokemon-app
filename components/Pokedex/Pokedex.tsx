import { useEffect, useState } from "react";
import { View, FlatList, TextInput } from "react-native";
import { PokedexStyles } from "./Pokedex.style";
import Card from "./Card/Card";

interface PokedexpProps {
  navigation: any;
  redirect: string;
}

export default function Pokedex({ navigation, redirect }: PokedexpProps) {
  const [pokemons, setPokemons] = useState<any>([]);
  const [filteredPokemons, setFilteredPokemons] = useState<any>([]);

  const FilterPokemons = (text: string) => {
    const filteredPokemons = pokemons.filter((pokemon: any) => {
      return pokemon.name.fr.toLowerCase().includes(text.toLowerCase());
    });
    setFilteredPokemons(filteredPokemons);
  };

  const url = "https://tyradex.tech/api/v1/gen/1";
  useEffect(() => {
    (async () => {
      const data = await fetch(url);
      const json = await data.json();
      setPokemons(json);
      setFilteredPokemons(json);
    })();
  }, []);
  return (
    <View style={PokedexStyles.container}>
      <TextInput
        onChangeText={FilterPokemons}
        placeholder="Rechercher un pokemon"
      />
      <View style={PokedexStyles.list}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={filteredPokemons}
          renderItem={({ item }) => (
            <Card redirect={redirect} pokemon={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.name.fr}
          numColumns={2}
        />
      </View>
    </View>
  );
}
