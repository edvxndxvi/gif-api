import { StyleSheet, ImageBackground, Text, View, Image, Linking, SafeAreaView, TouchableOpacity } from "react-native"
import { Ionicons } from 'react-native-vector-icons';

export default function Details({ route, navigation }) {
    const dados = route.params.item

    return (
        <ImageBackground
            source={require("../../assets/BG.png")}
            style={styles.container}
        >
            <SafeAreaView style={styles.header}>
                <Ionicons name="chevron-back" size={40} color="white" onPress={() => navigation.goBack()} />
                <Text style={{ fontSize: 30, color: "white" }}>Detalhes</Text>
            </SafeAreaView>

            <View style={styles.imageContainer}>
                <TouchableOpacity style={{ flex: 1 }} onPress={() => Linking.openURL(dados.images.original.url)}>
                    <Image
                        style={{ flex: 1 }}
                        source={{ url: dados.images.original.url }}
                    />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity onPress={() => Linking.openURL(dados.images.original.url)}>
                    <Ionicons name="globe" size={40} color="white" />
                </TouchableOpacity>
            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: "row",
        gap: 20,
        marginTop: 30,
        paddingInline: 8
    },
    imageContainer: {
        width: "100%",
        height: "50%",
        backgroundColor: 'grey'
    }
});