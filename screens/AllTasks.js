import { useState, useEffect } from "react";

import { View, ScrollView, Text, StyleSheet } from "react-native";

import { useRoute } from "@react-navigation/native";

import GoBackButton from "../components/UI/GoBackButton";
import Card from "../components/Card/Card";

import { getAll } from "../services/taskServices";

import { Colors } from "../constants/styles";

function AllTasks() {
    const [tasks, setTastks] = useState();

    const route = useRoute();
    const { newValue } = route.params || {};

    useEffect(() => {
        async function getTask() {
            try {
                const task = await getAll();
                setTastks(task);
            } catch (error) {
                console.error('Error')
            }
        }
        getTask()
    }, [newValue]);

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
                        {!tasks?.length &&
                            <Text style={styles.emptyTask}>No tasks yet!</Text>
                        }
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
        flex: 1
    },
    innerContainerTop: {
        width: '100%',
        flexDirection: 'row',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: Colors.purpleBackground,
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
    },
    emptyTask: {
        fontSize: 15,
        fontWeight: '700',
        paddingTop: 10
    }
})