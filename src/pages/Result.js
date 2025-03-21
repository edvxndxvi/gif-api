import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text } from 'react-native';
import API_KEY from '../API_KEY';
import axios from 'axios';


export default function Result({ route }) {
  const escolha = route.params.escolha;
  const [textoPesquisa, setTextoPesquisa] = useState("")
  const link = `api.giphy.com/v1/${escolha}/search?api_key=${API_KEY}&q=${textoPesquisa ? textoPesquisa : "?"}&limit=10&offset=0&rating=g&lang=pt&bundle=messaging_noclips`;
  const [gifUrls, setGifUrls] = useState([]);

  const pesquisar = async () => {
    try{
      const response = await axios.get(link);
      const urls = response.data.data.map(gif => gif.images.original.url);
      setGifUrls(urls);
    }catch(erro){
      console.error('Erro ao busca GIF: ', erro);
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/BG.png')}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <View style={{width:'100%', flexDirection:'row', justifyContent:'space-between', padding:5}}>
          <Ionicons name='chevron-back' size={40} color='white' onPress={ () => { navigation.goBack() } } />
          <TextInput 
            placeholder='Digite sua pesquisa' 
            style={styles.input} 
            autoCapitalize='none'
            value={textoPesquisa}
            onChangeText={setTextoPesquisa}
            returnKeyType="done"
          />
          <Ionicons name='search' size={40} color='white' onPress={pesquisar}/>
        </View>

        <ScrollView 
          contentContainerStyle={styles.scrollContainer} 
          showsVerticalScrollIndicator={false}
        >
          {gifUrls.map((url, index) => (
            <Image
              key={index}
              source={{ uri: url }}
              style={styles.gif}
              resizeMode='contain'
            />
          ))}

          <StatusBar style="light" />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
  },
  gif: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  input: {
    backgroundColor: 'white',
    width: '70%',
    borderRadius: 15
  }
});
