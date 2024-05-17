import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/Home/HomeScreen';
import PokedexScreen from './screens/Pokedex/PokedexScreen';
import Details from './screens/Details/Details';
import CombatStats from './screens/CombatStats/CombatStats';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Pokedex" component={PokedexScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="CombatStats" component={CombatStats} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}