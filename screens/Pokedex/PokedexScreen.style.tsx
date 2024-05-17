import { StyleSheet } from 'react-native';

export const PokedexScreenStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text:{
        padding: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    HomeButton:{
        margin: 10,
        backgroundColor: 'blue',
        padding: 5,
        borderRadius: 10,
        width: '33%',
    }
});