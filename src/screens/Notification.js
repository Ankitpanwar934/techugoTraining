// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import { useTranslation } from 'react-i18next';

// const Notification = () => {
//   const { t, i18n } = useTranslation();

//   return (
//     <View style={styles.container}>
//       <Text>{t(`Notification`)}</Text>
//       <TouchableOpacity style={{
//         marginTop: 50, justifyContent: 'center',
//         alignItems: 'center'
//       }} onPress={() => {
//         i18n.changeLanguage('hi')
//       }}>
//         <Text>{`Tap to Change in Hindi`}</Text>
//       </TouchableOpacity>
//     </View>
//   )
// }

// export default Notification

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// })



import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

const Notification = () => {
  const notifications = useSelector((state) => state.notifications.items);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={notifications}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.notification}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.message}>{item.message}</Text>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  notification: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#555',
  },
});

export default Notification;
