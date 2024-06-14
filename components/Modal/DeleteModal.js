import { View, Text, Pressable, StyleSheet } from "react-native";

import { Colors } from "../../constants/styles";


function DeleteModal({ title, onDelete }) {
    return (
        <View style={styles.deleteModal}>
            <Text style={styles.text}>Are you sure want to delete {title}!</Text>
            <View style={styles.buttonWrapper}>
                <Pressable style={styles.button} onPress={() => onDelete(true)}>
                    <Text style={styles.buttonText}>Yes</Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => onDelete(false)}>
                    <Text style={styles.buttonText}>No</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default DeleteModal;

const styles = StyleSheet.create({
    deleteModal: {
        position: 'absolute',
        width: '100%',
        backgroundColor: Colors.primaryDarkWhite,
        top: '39%',
        borderRadius: 6,
        padding: 50
    },
    text: {
        fontSize: 15,
        fontWeight: '700',
        flexDirection: 'row',
        textAlign: 'center',
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        paddingTop: 30
    },
    button: {
        padding: 10,
        borderRadius: 6,
        borderWidth: 1
    },
    buttonText: {
        fontWeight: '700'
    }
})