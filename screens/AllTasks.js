import { useState, useEffect } from "react";

import { View, ScrollView, Text, FlatList, StyleSheet } from "react-native";

import GoBackButton from "../components/UI/GoBackButton";
import Card from "../components/Card/Card";

import { getAll } from "../services/taskServices";

import { Colors } from "../constants/styles";

function AllTasks() {
    const [tasks, setTastks] = useState();

    useEffect(() => {
        async function getTask() {
            try {
                const tasks = await getAll();
                setTastks(tasks);
            } catch (error) {
                console.error('Error')
            }
        }
        getTask()
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.innerContainerTop}>
                <GoBackButton screen="Home" />
                <Text style={styles.header}>Tasks</Text>
                <Text></Text>
            </View>
            <View style={styles.innerContainerBottom}>
                <ScrollView>
                    <View style={styles.scrolling}>
                        {tasks?.map((items) => (
                            <Card items={items} key={items.id} />
                        ))}
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}

export default AllTasks;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: Colors.purpleBackground,
        // backgroundColor: Colors.primaryDarkWhite,
        // backgroundColor: '#FFFFFF',
        flex: 1
    },
    innerContainerTop: {
        width: '100%',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: Colors.purpleBackground,
        // borderBottomLeftRadius: 100,
        // borderBottomRightRadius: 100,
        flex: 1,
    },
    header: {
        fontSize: 24,
        fontWeight: '700',
        color: '#FFFFFF',
    },
    innerContainerBottom: {
        position: 'relative',
        width: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 5,
    },
    scrolling: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})