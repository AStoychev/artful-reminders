import { Pressable, View, Text, StyleSheet } from "react-native";

import { Colors } from "../../constants/styles";

function CreateEditButton({ text, onPress }) {

    function handleButton() {
        
    }

    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </Pressable>
    )

}

export default CreateEditButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        backgroundColor: Colors.purpleBackgeound,
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