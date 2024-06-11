import { Pressable, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function HomePageButtons({ icon, text, size, color, onPress }) {

    function handleButton() {
        
    }

    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <View style={styles.buttonContainer}>
                <Text style={[styles.buttonText, {color: color}]}>{text}</Text>
                <MaterialIcons name={icon} size={size} color={color} style={styles.button}/>
            </View>
        </Pressable>
    )

}

export default HomePageButtons;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    },
    buttonContainer: {
        width: 130,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#FFFFFF',
        // backgroundColor: '#F9EFED',
        flexDirection: 'row',
        borderRadius: 6,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 5,
        paddingRight: 5,
        
    },
    buttonText: {
        fontSize: 15,
        fontWeight: 'bold',
    }
})