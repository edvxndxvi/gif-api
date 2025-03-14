import { ImageBackground, StyleSheet, Text, View } from 'react-native';

export default function Result({route}){
    const escolha = route.params.escolha;
    const link = `api.giphy.com/v1/${escolha}/search`;
    console.log(link)
    return (
        <ImageBackground
            source={require('../../assets/BG.png')}
            style={styles.container}
        >
            <Text style={styles.textoPrincipal}>{link}</Text>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textoPrincipal: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },
});
