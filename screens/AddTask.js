import { useState, useEffect } from "react";

import { View, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useDispatch, useSelector } from "react-redux";
import { useRoute } from "@react-navigation/native";
import { goToRef } from "../redux/slices/imageSlice";

import TaskNameInput from "../components/Inputs/AddTasks/TaskNameInput";
import DateInput from "../components/Inputs/AddTasks/DateInput";
import DeadlinInput from "../components/Inputs/AddTasks/DeadlineInput";
import DescriptionInput from "../components/Inputs/AddTasks/DescriptionInput";
import StatusInput from "../components/Inputs/AddTasks/StatusInput";
import PaymentInput from "../components/Inputs/AddTasks/PaymentInput";
import CreateEditButton from "../components/UI/CreateEditButton";
import DisabledCreateEditButton from "../components/UI/DisabledCreateEditButton";
import GoBackButton from "../components/UI/GoBackButton";

import { createTask, editTask } from "../services/taskServices";
import { getDate } from "../functions/getData";

import { validateValues } from "../functions/validateValues";

import { Colors } from "../constants/styles";

function AddTask() {
    const task = useSelector((state) => state.refToTalkWithMe.refToContact);
    const route = useRoute();
    const { newValue } = route.params || {};

    const [values, setValues] = useState({
        title: newValue === 'edit' ? task.title : '',
        date: newValue === 'edit' ? task.date : getDate(),
        deadline: newValue === 'edit' ? task.deadline : getDate(),
        description: newValue === 'edit' ? task.description : '',
        complete: newValue === 'edit' ? task.complete : null,
        paid: newValue === 'edit' ? task.paid : null,
    });
    const [disabledColor, setDisabledColor] = useState('');

    const navigation = useNavigation();
    const dispatch = useDispatch();

    function handleInput(name, value) {
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    async function onHandleCreateNewTask() {
        try {
            await createTask(values);
            navigation.navigate('Success');
        } catch (error) {
            Alert.alert(
                'Create Task Failed!',
                'Could not create task, please check you inputs and try again later!'
            )
        }
    };

    async function onHandleEditTask() {
        try {
            await editTask(task.id, values);
            navigation.navigate('Success');
        } catch (error) {
            Alert.alert(
                'Edit Task Failed!',
                'Could not edit task, please check you inputs and try again later!'
            )
        }
    };

    function onHandleDisabledButton() {
        setDisabledColor('#FD9E9E')
    }

    useEffect(() => {
        if (newValue === 'add') {
            dispatch(goToRef([]));
        }
    }, [newValue]);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <GoBackButton />
                <Text style={styles.headerText}>{newValue === 'edit' ? 'Edit' : 'Add'} Task</Text>
            </View>
            <View style={styles.main}>
                <TaskNameInput
                    handleInput={handleInput}
                    value={values.title}
                    name='title'
                    disabledColor={disabledColor}
                />
                <DateInput
                    handleInput={handleInput}
                    value={values.date}
                    name='date'
                />
                <DeadlinInput
                    handleInput={handleInput}
                    value={values.deadline}
                    name='deadline'
                />
                <DescriptionInput
                    handleInput={handleInput}
                    value={values.description}
                    name='description'
                />
                <StatusInput
                    handleInput={handleInput}
                    value={values.complete}
                    newValue={newValue}
                    name='complete'
                />
                <PaymentInput
                    handleInput={handleInput}
                    value={values.paid}
                    newValue={newValue}
                    name='paid'
                />
                <View>
                    {validateValues(values) ?
                        <CreateEditButton
                            text={newValue === 'edit' ? 'EDIT' : 'CREATE'}
                            onPress={newValue === 'edit' ? onHandleEditTask : onHandleCreateNewTask}
                        />
                        :
                        <DisabledCreateEditButton
                            text={newValue === 'edit' ? 'EDIT' : 'CREATE'}
                            onPress={onHandleDisabledButton}
                        />
                    }
                </View>
            </View>
        </View>
    )
}

export default AddTask

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: Colors.purpleBackground,
        flex: 1,
    },
    header: {
        paddingLeft: 10,
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'start',
        justifyContent: "space-evenly",
        flex: 1
    },
    headerText: {
        color: Colors.primaryDarkWhite,
        fontSize: 30,
        fontWeight: '700',
    },
    main: {
        paddingTop: 35,
        backgroundColor: 'white',
        flex: 3,
        alignItems: 'center',
        gap: 30,
        borderTopLeftRadius: 50,
        borderTopEndRadius: 50,
    },
})