import { useState } from "react";
import { View, Pressable, Text, StyleSheet } from "react-native";

import Details from "../../screens/Details";

function Card({ items }) {
    const [task, setTask] = useState();

    function handlePress(item) {
        setTask(item)
    };

    if (task) {
        return <Details task={task} />
    }

    return (
        <Pressable style={({ pressed }) => pressed && styles.press} onPress={() => handlePress(items)}>
            <View style={[styles.taskWrapper, styles.shadowProp]}>
                <Text>{items.title}</Text>
                <View style={styles.label}>
                    <Text style={styles.labelText}>{items?.complete}</Text>
                    <Text style={styles.labelText}>{items?.paid}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default Card

const styles = StyleSheet.create({
    press: {
        opacity: 0.7
    },
    taskWrapper: {
        width: '87%',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 10,
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
        elevation: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    label: {
        flexDirection: 'column',
        gap: 10
    },
    labelText: {
        textAlign: 'center',
        backgroundColor: 'red',
        color: 'white',
        borderRadius: 6,
    }
})