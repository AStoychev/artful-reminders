import { useState, useEffect } from "react";
import { View, Button, ImageBackground, StyleSheet } from "react-native";
import HomePageButtons from "../components/UI/HomePageButtons";
import * as Notifications from 'expo-notifications';

import { useNavigation } from "@react-navigation/native";

const image = '../assets/backgrounds/One.jpg';

// NOTIFICATIONS
Notifications.setNotificationHandler({
    handleNotification: async () => {
        return {
            shouldPlaySound: false,
            shouldSetBadge: false,
            shouldShowAlert: true
        }
    }
});
// NOTIFICATIONS

function Home() {
    const navigation = useNavigation();

    // NOTIFICATIONS
    useEffect(() => {
        const subscription = Notifications.addNotificationReceivedListener((notification) => {
            console.log('NOTIFICATION RECEIVED');
            console.log(notification);
            const userName = notification.request.content.data.userName;
            console.log(userName);
        });
        return () => {
            subscription.remove();
        }
    }, [])
    function scheduleNotificationHandler() {
        Notifications.scheduleNotificationAsync({
            content: {
                title: 'My first local notification',
                body: 'This is the body of the notification.',
                data: { userName: 'Max' }
            },
            trigger: {
                seconds: 5
            }
        })
    }
    // NOTIFICATIONS

    function goToScreen(screen) {
        navigation.navigate(screen, { newValue: 'add' })
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
                {/* NOTIFICATION */}

                <Button title="Schedule Notification" onPress={scheduleNotificationHandler} />

                {/* NOTIFICATION */}
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