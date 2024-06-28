// import { View, Text, SafeAreaView } from 'react-native'
// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import BottomNavigator from './src/navigation/BottomNavigator'
// import DrawerNavigator from './src/navigation/DrawerNavigator'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
// import MainNavigator from './src/navigation/MainNavigator'

// const Stack = createNativeStackNavigator()
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator screenOptions={{ headerShown: false }}>
//         <Stack.Screen name='Main' component={MainNavigator} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

// export default App



import React from 'react';
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

const App = () => {
  const { t } = useTranslation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{t('welcome')}</Text>
      <Text>{t('greeting', { name: 'Ankit' })}</Text>
    </View>
  );
};

export default App;


