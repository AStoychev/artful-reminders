import { View, Text, Modal, Button, StyleSheet } from "react-native";

function DeleteModalLight({ deleteModal, onDelete, closeModal }) {
    return (
        <Modal
            transparent={true}
            animationType="slide"
            visible={deleteModal}
            onRequestClose={onDelete}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>Delete Item</Text>
                    <Text style={styles.modalMessage}>Are you sure you want to delete this item?</Text>
                    <View style={styles.modalButtons}>
                        <Button title="Cancel" onPress={closeModal} />
                        <Button title="Delete" onPress={() => onDelete()} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default DeleteModalLight;

export const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        width: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalMessage: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
})