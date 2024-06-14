import 'react-native-gesture-handler';

import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux';
import store from './redux/store'

import Home from './screens/Home';
import AllTasks from "./screens/AllTasks";
import AddTask from "./screens/AddTask";
import Details from './screens/Details';
import SavedEditedScreen from './screens/SavedEditedScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                        initialRouteName="Home">
                        <Stack.Screen name="Home" component={Home} />
                        <Stack.Screen name="AllTasks" component={AllTasks} />
                        <Stack.Screen name="AddTask" component={AddTask} />
                        <Stack.Screen name="Details" component={Details} />
                        <Stack.Screen name='Success' component={SavedEditedScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        </>
    )
}