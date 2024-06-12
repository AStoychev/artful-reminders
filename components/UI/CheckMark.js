import { View, StyleSheet } from "react-native";

import { Entypo } from '@expo/vector-icons';

function CheckMark() {
    return (
        <View style={styles.checkMark}>
            <Entypo name="check" size={11} color="white" />
        </View>
    )
}

export default CheckMark

const styles = StyleSheet.create({
    checkMark: {
        position: 'absolute',
        top: 0,
        right: -5,
        width: 23,
        height: 23,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#7EB444',
        borderRadius: 100,
        borderWidth: 3,
        borderColor: 'white',
        zIndex: 10,
    },
})