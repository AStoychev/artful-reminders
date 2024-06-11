import { View, ImageBackground, StyleSheet } from "react-native";
import HomePageButtons from "../components/UI/HomePageButtons";

import { useNavigation } from "@react-navigation/native";

const image = '../assets/backgrounds/One.jpg';

function Home() {
    const navigation = useNavigation();

    function goToScreen(screen) {
        navigation.navigate(screen)
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require(image)} style={styles.background}>
                <View style={styles.buttonWrapper}>
                    <HomePageButtons
                        icon="add-task"
                        text="Add"
                        size={24}
                        color="green"
                        onPress={() => goToScreen('AddTask')}
                    />
                    <HomePageButtons
                        icon="format-list-bulleted-add"
                        text="Tasks"
                        size={24}
                        color="blue"
                        onPress={() => goToScreen('AllTasks')}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    buttonWrapper: {
        flexDirection: 'row',
        gap: 15,
        paddingBottom: 15
    }
})