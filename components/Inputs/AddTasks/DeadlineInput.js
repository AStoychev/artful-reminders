import { View, Text, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../../constants/styles";
import { FontAwesome } from '@expo/vector-icons';

function DeadlinInput({ handleInput, value, name }) {
    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>DEADLINE</Text>
            <View style={styles.dateWrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleInput(name, text)}
                    value={value}
                />
                <FontAwesome name="clock-o" size={24} color="black" />
            </View>
        </View>
    )
}

export default DeadlinInput

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