import { View, Text, Pressable, StyleSheet } from "react-native";

import CheckMark from "./CheckMark";

function CheckButton({ status, title, backgroundColor, color, handleStatus }) {

    function onPressHandle(data) {
        handleStatus(data)
    }
    
    return (
        <View style={styles.container}>
            {status === title && <CheckMark />}
            <Pressable style={[styles.press, { backgroundColor: backgroundColor }]} onPress={() => onPressHandle(title)}>
                <Text style={[styles.text, { color: color }]}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default CheckButton

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        paddingTop: 10
    },
    press: {
        width: 130,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 6,
        paddingRight: 6,
        borderRadius: 6,
        // borderWidth: 3,
    },
    paid: {

    },
    text: {
        fontSize: 15,
        fontWeight: 700,
        color: 'black',
        textAlign: 'center'
    }
})