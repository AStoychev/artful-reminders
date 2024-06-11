import { View, Text, Pressable, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import { Colors } from "../../constants/styles";

function GoBackButton() {
    const navigation = useNavigation();

    return (
        <Pressable style={styles.container} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color={Colors.primaryDarkWhite} />
        </Pressable>
    )
}

export default GoBackButton;

const styles = StyleSheet.create({
    container: {
        
    },
})