import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Notification = () => {
  const { t, i18n } = useTranslation();

  return (
    <View style={styles.container}>
      <Text>{t(`Notification`)}</Text>
      <TouchableOpacity style={{
        marginTop: 50, justifyContent: 'center',
        alignItems: 'center'
      }} onPress={() => {
        i18n.changeLanguage('hi')
      }}>
        <Text>{`Tap to Change in Hindi`}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})