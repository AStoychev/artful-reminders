import { View, Text, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import TaskNameInput from "../components/Inputs/AddTasks/TaskNameInput";
import DateInput from "../components/Inputs/AddTasks/DateInput";
import DeadlinInput from "../components/Inputs/AddTasks/DeadlineInput";
import DescriptionInput from "../components/Inputs/AddTasks/DescriptionInput";
import StatusInput from "../components/Inputs/AddTasks/StatusInput";
import GoBackButton from "../components/UI/GoBackButton";

import { getDate } from "../functions/getData";

import { Colors } from "../constants/styles";

function AddTask() {
    const navigation = useNavigation();

    const handleInput = () => {
        console.log('Hello')
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <GoBackButton />
                <Text style={styles.headerText}>Add Task</Text>
            </View>
            <View style={styles.main}>
                <TaskNameInput handleInput={handleInput}/>
                <DateInput handleInput={handleInput}/>
                <DeadlinInput handleInput={handleInput}/>
                <DescriptionInput handleInput={handleInput}/>
                <StatusInput handleInput={handleInput}/>
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
    inputWrapper: {
        width: '94%',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: Colors.primaryDarkWhite
    }
})