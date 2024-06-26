import { View, Text, Pressable, StyleSheet } from "react-native";

import CheckMark from "./CheckMark";

function CheckButton({ status, title, backgroundColor, color, handleStatus }) {

    function onPressHandle(data) {
        handleStatus(data)
    }

    return (
        <View style={styles.container}>
            {status === title && <CheckMark styleMark={{
                size: 11,
                top: 0,
                right: -5,
                width: 23,
                height: 23,
                borderWidth: 3,
            }}
            />}
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