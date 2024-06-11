import 'react-native-gesture-handler';

import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import AllTasks from "./screens/AllTasks";
import AddTask from "./screens/AddTask";

const Stack = createStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                        // headerStyle: { backgroundColor: 'none' },
                        // headerTintColor: 'green',
                        // contentStyle: { backgroundColor: 'blue' },
                    }}
                    initialRouteName="Home">
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="AllTasks" component={AllTasks} />
                    <Stack.Screen name="AddTask" component={AddTask} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}