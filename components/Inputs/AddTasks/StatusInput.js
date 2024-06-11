import { View,Text, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../../constants/styles";

import { FontAwesome5 } from '@expo/vector-icons';

function StatusInput(handleInput) {
    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>STATUS</Text>
            <View style={styles.dateWrapper}>
                <TextInput
                    style={styles.input}
                    onChange={handleInput}
                    value=''
                />
                <FontAwesome5 name="list-alt" size={24} color="black" />
            </View>
        </View>
    )
}

export default StatusInput;

const styles = StyleSheet.create({
    inputWrapper: {
        width: '94%',
        borderBottomWidth: 1,
        borderColor: Colors.primaryDarkWhite,
    },
    label: {
        color: Colors.primaryLabelWhite,
    },
    dateWrapper: {
        flexDirection: 'row',
    },
    input: {
        flex: 1
    }
});