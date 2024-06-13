import { View, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../../constants/styles";

function TaskNameInput({ handleInput, value, name, disabledColor }) {

    return (
        <View style={styles.inputWrapper}>
            <TextInput
                style={styles.input}
                placeholder="Task Name *"
                placeholderTextColor={disabledColor}
                value={value}
                onChangeText={(text) => handleInput(name, text)}
            />
        </View>
    )
}

export default TaskNameInput;

const styles = StyleSheet.create({
    inputWrapper: {
        width: '94%',
        borderBottomWidth: 1,
        borderColor: Colors.primaryDarkWhite
    },
    input: {

    }
});