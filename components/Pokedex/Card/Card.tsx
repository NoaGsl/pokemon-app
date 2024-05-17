import { View, Text, Image, TouchableOpacity } from "react-native";
import { CardStyles } from "./Card.style";
import { getBackGroundColor } from "../../Color/Color_interpretation";

interface CardProps {
  pokemon: any;
  navigation: any;
  redirect: string;
}

export default function Card({ pokemon, navigation, redirect }: CardProps) {
  function DetailsRedirect() {
    navigation.navigate(redirect, { pokemon });
  }

  return (
    <View
      style={[
        CardStyles.Card,
        { backgroundColor: getBackGroundColor(pokemon) },
      ]}
    >
      <TouchableOpacity onPress={DetailsRedirect}>
        <Text style={CardStyles.text}>{pokemon.name.fr}</Text>
        <Image
          style={CardStyles.image}
          source={{
            uri: pokemon.sprites.regular,
          }}
        />
      </TouchableOpacity>
    </View>
  );
}
