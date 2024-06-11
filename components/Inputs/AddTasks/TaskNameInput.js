import { View, TextInput, StyleSheet } from "react-native";

import { Colors } from "../../../constants/styles";

function TaskNameInput(handleInput) {
    return (
        <View style={styles.inputWrapper}>
            <TextInput
                style={styles.input}
                onChange={handleInput}
                value=""
                placeholder="Task Name"
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