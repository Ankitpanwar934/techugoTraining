import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView, ActivityIndicator, } from 'react-native'
import React, { useEffect, useState } from 'react'
import Carousell from '../components/Carousell'
import { COLOR } from '../constant/styles'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from '../redux/slice/getProductSlice'
import { useTranslation } from 'react-i18next'

const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const { items, loading, error } = useSelector((state) => state.productData);

  const { t } = useTranslation()

  const openModal = () => {
    setModalVisible(true)
  }

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch])

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        {items.length === 0 ? (
          <View style={styles.center}>
            <Text>No items found.</Text>
          </View>
        ) : (
          <View>
            <View style={styles.mainContainer}>
              <Image style={styles.logo} source={require('../assets/images/decathelon.png')} />
              <View style={styles.addressView}>
                <Text style={styles.deliveryText}>{t(`Delivery`)}</Text>
                <Text style={styles.pinCode}>{`560001`}</Text>
                <TouchableOpacity style={styles.pinChangeContainer} >
                  <Text style={styles.pinChange}>{`CHANGE`}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.searchMainContainer}>
              <View style={styles.searchContainer}>
                <View style={styles.searchView}>
                  <Image style={{ height: 25, width: 25 }} source={require('../assets/images/search.png')} />
                  <TextInput placeholder='Search for "Footbal' />
                </View>
                <Image style={styles.imagesForSCWV} source={require('../assets/images/mic.png')} />
              </View>
              <TouchableOpacity onPress={() => {
                navigation.navigate('Wish')
              }}>
                <Image style={styles.imagesForSCWV} source={require('../assets/images/heart.png')} />
              </TouchableOpacity>
              <Image style={styles.imagesForSCWV} source={require('../assets/images/cart.png')} />
            </View>
            <View style={styles.offerViewMain}>
              <View style={styles.offerView}>
                <Text style={[styles.offerText, { fontWeight: '700', fontSize: 15 }]}>{`FREE`} </Text>
                <Text style={styles.offerText}>{`delivery on orders worth`} </Text>
                <Text style={[styles.offerText, { fontWeight: '700', fontSize: 15 }]}>{`₹2999/-`} </Text>
                <Text style={styles.offerText}>{`and above`}</Text>
              </View>
              <TouchableOpacity>
                <Image style={[styles.closeImage]} source={require('../assets/images/close.png')} />
              </TouchableOpacity>
            </View>
            <ScrollView style={{ marginBottom: 50 }}>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingTop: 20, width: '100%' }}>
                {items.map((item) => (
                  <View key={item.id} style={{ flexDirection: 'row', }} >
                    <TouchableOpacity onPress={() => {
                      openModal()
                    }}>
                      <View key={item.id} style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                        <Image style={{ width: 100, height: 100, }} source={{ uri: item.image }} />
                        <Text style={{ marginTop: 10, width: 80, textAlign: 'center' }} numberOfLines={2}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  </View>

                ))}
              </ScrollView>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingTop: 20, width: '100%' }}>
                {items.map((item) => (
                  <View key={item.id} style={{ flexDirection: 'row', }} >
                    <View key={item.id} style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                      <Image style={{ width: 100, height: 100, }} source={{ uri: item.image }} />
                      <Text style={{ marginTop: 10, width: 80, textAlign: 'center' }} numberOfLines={2}>{item.title}</Text>
                    </View>
                  </View>
                ))}
              </ScrollView>
              <View >
                <Carousell items={items} />
              </View>
            </ScrollView>
          </View>
        )}
      </SafeAreaView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.DFFFFFF
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 50
  },
  addressView: {
    flexDirection: 'row',
    paddingEnd: 20
  },
  deliveryText: {
    fontSize: 13
  },
  pinCode: {
    fontSize: 13,
    color: COLOR.D3643BB
  },
  pinChangeContainer: {
    paddingStart: 5
  },
  pinChange: {
    fontSize: 13,
    color: COLOR.D3643BB,
    textDecorationLine: 'underline'
  },
  searchMainContainer: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  searchContainer: {
    width: 255, height: 60,
    backgroundColor: COLOR.DF4F4F4,
    borderRadius: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imagesForSCWV: {
    height: 25,
    width: 25
  },
  offerViewMain: {
    height: 60,
    width: '100%',
    backgroundColor: COLOR.D3643BB,
    marginTop: 20,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  offerView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  offerText: {
    color: COLOR.DFFFFFF,
    fontSize: 13
  },
  closeImage: {
    width: 10,
    height: 10
  }
})