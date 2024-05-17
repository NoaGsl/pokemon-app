import { StyleSheet } from "react-native";

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  pokedexButton:{
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    width: "50%",
  },
  text:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    position: 'absolute',
    top: 30,
  },
  buttons:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }
});
