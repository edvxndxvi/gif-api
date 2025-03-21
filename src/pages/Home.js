import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={require('../../assets/HomePage.png')}
      style={styles.container}
    >
      <Text style={styles.textoPrincipal}>Pesquisar por...</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.btn}
          // Estruturando um objeto na função que passará um valor para a outra tela
          onPress={() => navigation.navigate('Result', { escolha: 'gifs' })}
        >
          <Text style={styles.btnText}>GIFS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Result', { escolha: 'stickers' })}
        >
          <Text style={styles.btnText}>STICKERS</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style='light' />
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
  buttonsContainer: {
    paddingBlock: 32,
    flexDirection: 'row',
    gap: 20,
  },
  btn: {
    paddingBlock: 8,
    paddingInline: 16,
    backgroundColor: '#058ED9',
    borderRadius: 24
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
