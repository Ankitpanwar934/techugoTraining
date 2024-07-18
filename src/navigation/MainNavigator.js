import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login';
import DrawerNavigator from './DrawerNavigator';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();


const MainNavigator = () => {
    const {token, user} = useSelector(state => state.auth)

    console.log(token)

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!token ?
                <Stack.Screen name="Login" component={Login} /> :
                <Stack.Screen name="Main" component={DrawerNavigator} initialParams={{user}} />
            }
        </Stack.Navigator>

    )
};

export default MainNavigator;
