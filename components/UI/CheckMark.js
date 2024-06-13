import { View, StyleSheet } from "react-native";

import { Entypo } from '@expo/vector-icons';

function CheckMark({styleMark}) {
    return (
        <View style={[styles.checkMark, styleMark]}>
            <Entypo name="check" size={styleMark.size} color="white" />
        </View>
    )
}

export default CheckMark

const styles = StyleSheet.create({
    checkMark: {
        position: 'absolute',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7EB444',
        borderRadius: 100,
        borderColor: 'white',
        zIndex: 10,
    },
})