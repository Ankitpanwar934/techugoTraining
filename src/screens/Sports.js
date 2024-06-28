import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Sports = () => {
  return (
    <View style={styles.container}>
      <Text>Sports</Text>
    </View>
  )
}

export default Sports

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})