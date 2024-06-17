import { View, Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useDispatch } from "react-redux";
import { goToRef } from "../../redux/slices/imageSlice";

const RED = { backgroundColor: '#FF2D2D', color: '#FFFFFF' };
const BLUE = { backgroundColor: '#E1E4F8', color: '#8885DA' };
const ORANGE = { backgroundColor: '#F0E6EC', color: '#FA6A00' };
const GREEN = { backgroundColor: '#2CC09C', color: '#FFFFFF' };
const WHITE = { backgroundColor: '#FFFFFF', color: '#FFFFFF' };

function Card({ items }) {
    const navigate = useNavigation();

    const dispatch = useDispatch();

    function handlePress(item) {
        dispatch(goToRef(item))
        navigate.navigate('Details')
    };

    return (
        <Pressable style={({ pressed }) => pressed && styles.press} onPress={() => handlePress(items)}>
            <View style={[styles.taskWrapper, styles.shadowProp]}>
                <Text>{items.title}</Text>
                <View style={styles.label}>
                    <Text style={[styles.labelText, items?.complete === 'COMPLETED' ? BLUE : RED, !items?.complete && WHITE]}>{items?.complete}</Text>
                    <Text style={[styles.labelText, items?.paid === 'PAID' ? ORANGE : GREEN, !items?.paid && WHITE]}>{items?.paid}</Text>
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
        padding: 3
    }
})