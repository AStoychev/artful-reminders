import { View, Text, TextInput, StyleSheet } from "react-native";

import { getDate } from "../../../functions/getData";

import { Colors } from "../../../constants/styles";
import { FontAwesome5 } from '@expo/vector-icons';

function DateInput(handleInput) {
    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>DATE</Text>
            <View style={styles.dateWrapper}>
                <TextInput
                    style={styles.input}
                    onChange={handleInput}
                    value={getDate()}
                />
                <FontAwesome5 name="calendar-alt" size={24} color="black" />
            </View>
        </View>
    )
}

export default DateInput;

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