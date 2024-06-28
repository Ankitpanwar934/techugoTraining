import { View, Text } from 'react-native'
import React from 'react'
import BottomNavigator from './BottomNavigator'
import { createDrawerNavigator } from '@react-navigation/drawer'


const Drawer = createDrawerNavigator()

const MainNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{}}>
            <Drawer.Screen name="Home" component={BottomNavigator} />
        </Drawer.Navigator>
    )
}

export default MainNavigator
