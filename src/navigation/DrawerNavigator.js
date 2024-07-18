import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BottomNavigator from './BottomNavigator'


const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {

  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeTabs" component={BottomNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator


