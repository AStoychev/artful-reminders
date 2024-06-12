import { View, Text, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../../constants/styles";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

function DescriptionInput({ handleInput, value, name }) {
    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>DESCRIPTION</Text>
            <View style={styles.dateWrapper}>
                <TextInput
                    style={styles.input}
                    onChangeText={(text) => handleInput(name, text)}
                    value={value}
                />
                <MaterialCommunityIcons name="tag-text-outline" size={24} color="black" />
            </View>
        </View>
    )
}

export default DescriptionInput;

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