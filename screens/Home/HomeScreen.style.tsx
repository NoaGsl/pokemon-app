import { StyleSheet } from "react-native";

export const HomeScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    position: 'absolute',
  },
  buttons:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  }
});
