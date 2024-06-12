import { useState } from "react";

import { View, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import TaskNameInput from "../components/Inputs/AddTasks/TaskNameInput";
import DateInput from "../components/Inputs/AddTasks/DateInput";
import DeadlinInput from "../components/Inputs/AddTasks/DeadlineInput";
import DescriptionInput from "../components/Inputs/AddTasks/DescriptionInput";
import StatusInput from "../components/Inputs/AddTasks/StatusInput";
import PaymentInput from "../components/Inputs/AddTasks/PaymentInput";
import CreateEditButton from "../components/UI/CreateEditButton";
import GoBackButton from "../components/UI/GoBackButton";

import { createTask } from "../services/taskServices";

import { constructor } from "../constants/constructor";
import { Colors } from "../constants/styles";

function AddTask() {
    const [values, setValues] = useState(constructor);
    const [send, setSend] = useState(false);

    const navigation = useNavigation();

    function handleInput(name, value) {
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    async function onHandleCreateNewTask() {
        try {
            await createTask(values);
            setValues(constructor);
            setSend(true);
        } catch (error) {
            Alert.alert(
                'Create Task Failed!',
                'Could not create task, please check you inputs and try again later!'
            )
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <GoBackButton />
                <Text style={styles.headerText}>Add Task</Text>
            </View>
            <View style={styles.main}>
                <TaskNameInput handleInput={handleInput} value={values.title} name='title' />
                <DateInput handleInput={handleInput} value={values.date} name='date' />
                <DeadlinInput handleInput={handleInput} value={values.deadline} name='deadline' />
                <DescriptionInput handleInput={handleInput} value={values.description} name='description' />
                <StatusInput handleInput={handleInput} name='complete' />
                <PaymentInput handleInput={handleInput} name='paid' />
                <View style={styles.createButtonWrapper}>
                    <CreateEditButton
                        text="CREATE"
                        onPress={onHandleCreateNewTask}
                    />
                </View>
            </View>
        </View>
    )
}

export default AddTask

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: Colors.purpleBackgeound,
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
    createButtonWrapper: {

    }
})