import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from 'react-native-vector-icons';

export default function Header({ navigation, text, setText, solicitarDados }) {
    return (
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
            />
            <Ionicons
                name="search"
                size={40}
                color='white'
                onPress={() => solicitarDados(text)}
            />
        </View>
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
    }
});