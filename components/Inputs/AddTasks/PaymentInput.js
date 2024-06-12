import { useState } from "react";

import { View, Text, StyleSheet } from "react-native";

import CheckButton from "../../UI/CheckButton";

import { Colors } from "../../../constants/styles";

const ORANGE = { backgroundColor: '#F0E6EC', color: '#FA6A00' };
const GREEN = { backgroundColor: '#2CC09C', color: '#FFFFFF' };

function PaymentInput({ handleInput, name }) {
    const [status, setStatus] = useState(null);

    function handleStatus(data) {
        setStatus(data)
        handleInput(name, data)
    }

    return (
        <View style={styles.inputWrapper}>
            <Text style={styles.label}>PAYMENT</Text>
            <View style={styles.buttonWrapper}>
                <CheckButton status={status} title="PAID" backgroundColor={ORANGE.backgroundColor} color={ORANGE.color} handleStatus={handleStatus} />
                <CheckButton status={status} title="UNPAID" backgroundColor={GREEN.backgroundColor} color={GREEN.color} handleStatus={handleStatus} />
            </View>
        </View>
    )
}

export default PaymentInput;

const styles = StyleSheet.create({
    inputWrapper: {
        width: '94%',
        // borderBottomWidth: 1,
        // borderColor: Colors.primaryDarkWhite,
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