import { View, Text, Pressable, StyleSheet } from "react-native";

import { Colors } from "../../constants/styles";

function DisabledCreateEditButton({ text, onPress }) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </Pressable>
    )
}

export default DisabledCreateEditButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: Colors.disabledButton,
        flexDirection: 'row',
        borderRadius: 6,
        paddingTop: 10,
        paddingBottom: 10,
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})