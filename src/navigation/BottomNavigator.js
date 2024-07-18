import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Sports from '../screens/Sports'
import Scan from '../screens/Scan'
import Notification from '../screens/Notification'
import Account from '../screens/Account'

const Tab = createBottomTabNavigator()

const BottomNavigator = ({ focused }) => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused }) => {
                let iconName;
                if (route.name === 'Homee') {
                    iconName = focused ? require('../assets/images/homee.png') : require('../assets/images/homee.png')
                } else if (route.name === 'Sports') {
                    iconName = focused ? require('../assets/images/tennis.png') : require('../assets/images/tennis.png')
                } else if (route.name === 'Scan') {
                    iconName = focused ? require('../assets/images/scan.png') : require('../assets/images/scan.png')
                } else if (route.name === 'Notification') {
                    iconName = focused ? require('../assets/images/notification.png') : require('../assets/images/notification.png')
                } else if (route.name === 'Account') {
                    iconName = focused ? require('../assets/images/user.png') : require('../assets/images/user.png')
                }
                return <Image source={iconName} style={[styles.icon, {
                    tintColor: focused ? '#3643bb' : 'gray'
                }]} />

            },
            tabBarInactiveTintColor: 'gray',
            tabBarActiveTintColor: '#3643bb',
        })} >
            <Tab.Screen name="Homee" component={Home} />
            <Tab.Screen name="Sports" component={Sports} />
            <Tab.Screen name="Scan" component={Scan} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    )
}

export default BottomNavigator

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    }
})


