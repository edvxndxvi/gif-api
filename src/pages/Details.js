import { StyleSheet, ImageBackground, Text, View, Image } from "react-native"
import { Ionicons } from 'react-native-vector-icons';

export default function Details({ route, navigation }) {
    const dados = route.params.item;

    return (
        <ImageBackground
            source={require("../../assets/BG.png")}
            style={styles.container}
        >
            <View style={styles.header}>
                <Ionicons name="chevron-back" size={40} color="white" onPress={() => navigation.goBack()} />
                <Text style={{ fontSize: 30, color: "white" }}>Detalhes</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    style={{ flex: 1 }}
                    source={{ url: dados.images.original.url }}
                />
            </View>

            <View>
                <Text style={{fontSize: 16, color: "white"}}>{dados.title}</Text>
                <Ionicons name="globe" size={40} color="white"/>
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
        height: "50%"
    }
});