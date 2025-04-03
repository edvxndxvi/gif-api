import { TextInput, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { Ionicons } from 'react-native-vector-icons';

let textoPesquisado = ''
export default function Header({ navigation, text, setText, solicitarDados }) {
    return (
        <SafeAreaView>
            <View style={styles.header}>
                <Ionicons
                    name="chevron-back"
                    size={40}
                    color="white"
                    onPress={() => navigation.goBack()}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder='Digite sua pesquisa'
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={text}
                    onChangeText={(value) => setText(value)}
                    // executa a função ao apertar enter
                    onSubmitEditing={() => {
                        solicitarDados(text)
                        textoPesquisado = text
                    }}
                />
                <Ionicons
                    name="search"
                    size={40}
                    color='white'
                    onPress={() => {
                        solicitarDados(text)
                        textoPesquisado = text
                    }}
                />
            </View>
            {textoPesquisado !== "" ?<Text style={styles.white}>Mostrando resultado para:<Text style={styles.whiteBold}>{textoPesquisado}</Text></Text> : null}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        gap: 20,
        marginTop: 30,
        paddingInline: 8
    },
    textInput: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 10,
        paddingLeft: 10
    },
    white:{
        fontSize:16,
        color:"white",
        marginLeft:10,
        marginTop:15
    },
    whiteBold:{
        fontSize:16,
        color:"white",
        fontWeight:'bold'
    }
});