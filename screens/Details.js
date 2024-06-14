import { useState } from "react";

import { View, Pressable, ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import DeleteModal from "../components/Modal/DeleteModal";
import GoBackButton from "../components/UI/GoBackButton";

import { deleteTask } from "../services/taskServices";

import { AntDesign } from '@expo/vector-icons';
import { Colors } from "../constants/styles";

const Details = () => {
    const [deleteModal, setDeleteModal] = useState(false);

    const task = useSelector((state) => state.refToTalkWithMe.refToContact);
    const navigation = useNavigation();

    function onHandleEdit() {
        navigation.navigate('AddTask', { newValue: 'edit' });
    };

    function onHandleDelete() {
        setDeleteModal(true);
    };

    function onDelete(state) {
        if (state) {
            deleteTask(task.id);
            navigation.navigate('AllTasks', { newValue: task });
        } else {
            setDeleteModal(false);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainerTop}>
                <GoBackButton />
                <Text style={styles.header}>{task.title}</Text>
                <Text></Text>
            </View>

            {
                deleteModal ? <DeleteModal title={task.title} onDelete={onDelete} />
                    :
                    <View style={styles.innerContainerBottom}>
                        <View>
                            <ScrollView>
                                <View style={styles.scrolling}>
                                    <Text style={styles.text}>Date:
                                        <Text style={styles.textInfo}>{task.date}</Text>
                                    </Text>
                                    <Text style={styles.text}>Deadline:
                                        <Text style={styles.textInfo}>{task.deadline}</Text>
                                    </Text>
                                    <Text style={styles.text}>Description:
                                        <Text style={styles.textInfo}>{task.description}</Text>
                                    </Text>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={styles.footer}>
                            <Pressable onPress={onHandleEdit}>
                                <AntDesign name="edit" size={30} color="black" />
                            </Pressable>
                            <Pressable onPress={onHandleDelete}>
                                <AntDesign name="delete" size={30} color="black" />
                            </Pressable>
                        </View>
                    </View>
            }
        </View>
    )
}

export default Details;

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flexDirection: 'column',
        backgroundColor: Colors.purpleBackground,
        flex: 1,
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
    press: {
        position: 'relative',
        borderWidth: 3,
        borderColor: 'red',
    },
    innerContainerBottom: {
        position: 'relative',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        flex: 5,
    },
    scrolling: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'left',
        gap: 20,
        paddingTop: 30,
    },
    text: {
        width: '94%',
        justifyContent: 'center',
        flexDirection: 'row',
        color: '#000000',
        fontSize: 15,
        fontWeight: '700',
        borderWidth: 1,

        borderRadius: 10,
        padding: 15,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#FFFFFF',
    },
    textInfo: {
        color: 'green',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: Colors.primaryDarkWhite,
        padding: 5,
    }
})