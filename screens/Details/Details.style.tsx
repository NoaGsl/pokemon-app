import { StyleSheet } from "react-native";

export const DetailsStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    },
    image: {
        top: -20,
        width: 200,
        height: 200,
        alignSelf: "center",
    },
    details: {
        fontSize: 20,
        color: "black",
        textAlign: "center",
        fontWeight: "bold",
    },
    cardBackground: {
        borderRadius: 20,
        margin: 20,
        padding: 20,
        width: "90%",
        alignSelf: "center",
        height: "85%",
    },
    detailsBox: {
    },
    preEvo: {
        width: 100,
        height: 100,
        alignSelf: "flex-start",
    },
    preEvoBox: {
        marginTop: 20,
        left: -20,
        width: "33%",
    },
    nextEvo: {
        width: 100,
        height: 100,
        alignSelf: "flex-end",
    },
    nextEvoBox: {
        marginTop: 20,
        right: 0,
        width: "33%",
    },
    EvolutionBox:{
        flexDirection: "row",
        justifyContent: "space-between",
    },
    EvoText:{
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        textAlign: "center",
    },
    CombatStatsButton:{
        backgroundColor: "black",
        padding: 10,
        borderRadius: 10,
        alignSelf: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
    },
});