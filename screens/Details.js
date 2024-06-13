import { View, Text, StyleSheet } from "react-native"

const Details = ({ task }) => {
    return (
        <View style={styles.container}>
            <Text>Hello {task?.title}</Text>
        </View>
    )
}

export default Details;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})