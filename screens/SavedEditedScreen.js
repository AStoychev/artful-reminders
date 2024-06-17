import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SaveEditedButton from "../components/UI/SaveEditedButton";

import CheckMark from "../components/UI/CheckMark";

import { Colors } from "../constants/styles";

function SavedEditedScreen() {
    const navigation = useNavigation();

    function navigateToAllTask() {
        navigation.navigate('AllTasks')
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainerTop}>
                <Text style={styles.textTop}>SUCCESS!</Text>
            </View>
            <View style={styles.checkMarkWrapper}>
                <CheckMark styleMark={{
                    size: 50,
                    width: 70,
                    height: 70,
                    borderWidth: 0,
                }}
                />
            </View>
            <View style={styles.innerContainetBottom}>
                <Text style={styles.text}>Your task has been saved!</Text>
                <SaveEditedButton
                    text='OK'
                    onPress={navigateToAllTask}
                />
            </View>
        </View>
    )
}

export default SavedEditedScreen

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: Colors.purpleBackground,
        flex: 1
    },
    innerContainerTop: {
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        borderBottomLeftRadius: 200,
        borderBottomRightRadius: 200,
        flex: 1
    },
    textTop: {
        fontSize: 30,
        fontWeight: '700',
        color: '#21B36A',
    },
    checkMarkWrapper: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerContainetBottom: {
        width: '100%',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 50,
        backgroundColor: Colors.purpleBackground,
        flex: 1,
    },
    text: {
        fontSize: 16,
        color: '#FFFFFF'
    }
})