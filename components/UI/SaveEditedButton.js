import { View, Text, Pressable, StyleSheet } from "react-native";

function SaveEditedButton({ text, onPress }) {
    return (
        <Pressable onPress={onPress} style={({ pressed }) => pressed && styles.pressed}>
            <View style={styles.container}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </Pressable>
    )
}

export default SaveEditedButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#21B36A',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 80,
        paddingRight: 80,
        borderRadius: 6
    },
    pressed: {
        opacity: 0.75,
    },
    text: {
        fontSize: 20,
        fontWeight: '700',
        color: '#FFFFFF'
    }
})