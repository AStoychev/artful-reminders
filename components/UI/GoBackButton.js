import { View, Text, Pressable, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import { Colors } from "../../constants/styles";

function GoBackButton({screen}) {
    const navigation = useNavigation();

    function handlePress() {
        if(screen === 'Home') {
            navigation.navigate('Home')
        } else {
            navigation.goBack()
        }
    }

    return (
        <Pressable style={styles.container} onPress={handlePress}>
            <Ionicons name="arrow-back-outline" size={24} color={Colors.primaryDarkWhite} />
        </Pressable>
    )
}

export default GoBackButton;

const styles = StyleSheet.create({
    container: {
        
    },
})