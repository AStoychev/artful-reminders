import { useState } from "react";

import { View, Text, StyleSheet } from "react-native";

import CheckButton from "../../UI/CheckButton";

import { Colors } from "../../../constants/styles";

const RED = { backgroundColor: '#FF2D2D', color: '#FFFFFF' }
const BLUE = { backgroundColor: '#E1E4F8', color: '#8885DA' };

function StatusInput({ handleInput, name, value, newValue }) {
    const [status, setStatus] = useState(null || value);

    function handleStatus(data) {
        setStatus(data)
        handleInput(name, data)
    };

    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>STATUS</Text>
            <View style={styles.buttonWrapper}>
                <CheckButton status={status} title="COMPLETED" backgroundColor={BLUE.backgroundColor} color={BLUE.color} handleStatus={handleStatus} />
                <CheckButton status={status} title="IN PROGRESS" backgroundColor={RED.backgroundColor} color={RED.color} handleStatus={handleStatus} />
            </View>
        </View>
    )
}

export default StatusInput;

const styles = StyleSheet.create({
    inputWrapper: {
        width: '94%',
    },
    label: {
        color: Colors.primaryLabelWhite,
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10
    }
});