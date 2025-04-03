import {Text,StyleSheet} from 'react-native'
 
 export default function Error({showError}){
    return showError?<Text style={styles.texto}>Estamos com problemas para carregar os dados.</Text>:null
 
}
 
const styles = StyleSheet.create({
    texto:{
        fontSize:16,
        margin:20,
        color:"white",
        width:"80%",
        textAlign:"center",
        alignSelf:"center"
    }
})