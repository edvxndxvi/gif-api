import { useState } from 'react';

import { StyleSheet, ImageBackground,FlatList, Dimensions, TouchableOpacity, View, Text, Keyboard} from 'react-native';
import { Image } from 'expo-image';
import TextInfo from '../components/TextInfo';
import Loading from '../components/Loading';
import Error from '../components/Error';

import API_KEY from '../API_KEY';
import axios from 'axios';
import Header from '../components/Header';

const{width}=Dimensions.get("window")
const image_width = width;


export default function Result({ route, navigation }) {
  const escolha = route.params.escolha;
  const link = `http://api.giphy.com/v1/${escolha}/search`;

  const [text, setText] = useState('');
  const [dados, setDados] = useState([]);
  const [showMessage,setShowMessage] = useState(true)
  const [isLoading,setIsLoading] = useState(false)
  const [showError,setShowError] = useState(false)

  const solicitarDados = async (text) => {
    Keyboard.dismiss()
    setIsLoading(true)
    try {
      const resultado = await axios.get(link, {
        params: {
          api_key: API_KEY,
          q: text
        }
      })
      setShowMessage(false)     
      setIsLoading(false) 
      setDados(resultado.data.data)
    } catch (err) {
      console.log(err);
      setIsLoading(false)
      setShowMessage(false)
      setShowError(true)
    }
  }

  return (
    <ImageBackground
      source={require('../../assets/BG.png')}
      style={styles.container}
    >

      <Header
        navigation={navigation}
        text={text}
        setText={setText}
        solicitarDados={solicitarDados}
        setShowMessage={setShowMessage}
      />

      <FlatList
        data={dados}
        numColumns={2}
        ListHeaderComponent={
          <>
            <TextInfo showMessage={showMessage}/>
            <Loading isLoading={isLoading}/>
            <Error showError={showError}/>
          </>
        }
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Details", {item:item})}>
              <Image
                style={styles.image}
                source={{ uri: item.images.preview_gif.url }}
              />
            </TouchableOpacity>
          )
        }}
      />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    width: image_width/2.3,
    height: image_width/2.3,
    margin:image_width*0.03,
    borderRadius:15
  }
});
