import { useState } from "react";

import { View, Text, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import SavedEditedScreen from "./SavedEditedScreen";
import TaskNameInput from "../components/Inputs/AddTasks/TaskNameInput";
import DateInput from "../components/Inputs/AddTasks/DateInput";
import DeadlinInput from "../components/Inputs/AddTasks/DeadlineInput";
import DescriptionInput from "../components/Inputs/AddTasks/DescriptionInput";
import StatusInput from "../components/Inputs/AddTasks/StatusInput";
import PaymentInput from "../components/Inputs/AddTasks/PaymentInput";
import CreateEditButton from "../components/UI/CreateEditButton";
import DisabledCreateEditButton from "../components/UI/DisabledCreateEditButton";
import GoBackButton from "../components/UI/GoBackButton";

import { createTask } from "../services/taskServices";

import { validateValues } from "../functions/validateValues";

import { constructor } from "../constants/constructor";
import { Colors } from "../constants/styles";

function AddTask() {
    const [values, setValues] = useState(constructor);
    const [send, setSend] = useState(false);
    const [disabledColor, setDisabledColor] = useState('');

    const navigation = useNavigation();

    function handleInput(name, value) {
        setValues(prevValues => ({
            ...prevValues,
            [name]: value
        }));
    };

    function handleSetSend() {
        setSend(false);
        navigation.navigate('AllTasks')
    }

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

    function onHandleDisabledButton() {
        setDisabledColor('#FD9E9E')
    }

    if (send) {
        return <SavedEditedScreen handleSetSend={handleSetSend} />
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <GoBackButton />
                <Text style={styles.headerText}>Add Task</Text>
            </View>
            <View style={styles.main}>
                <TaskNameInput handleInput={handleInput} value={values.title} name='title' disabledColor={disabledColor} />
                <DateInput handleInput={handleInput} value={values.date} name='date' />
                <DeadlinInput handleInput={handleInput} value={values.deadline} name='deadline' />
                <DescriptionInput handleInput={handleInput} value={values.description} name='description' />
                <StatusInput handleInput={handleInput} name='complete' />
                <PaymentInput handleInput={handleInput} name='paid' />
                <View style={styles.createButtonWrapper}>
                    {validateValues(values) ?
                        <CreateEditButton
                            text="CREATE"
                            onPress={onHandleCreateNewTask}
                        />
                        :
                        <DisabledCreateEditButton
                            text='CREATE'
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
    createButtonWrapper: {

    }
})