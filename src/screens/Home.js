import { View, Text, SafeAreaView, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Carousell from '../components/Carousell'
import { COLOR } from '../constant/styles'


let typeData1 = [
  { img: require('../assets/images/d1.png'), title: 'Men' },
  { img: require('../assets/images/d2.png'), title: 'Women' },
  { img: require('../assets/images/d3.png'), title: 'Kids' },
  { img: require('../assets/images/d4.png'), title: 'Shoes' },
  { img: require('../assets/images/d5.png'), title: 'Summer Collection' },
  { img: require('../assets/images/d6.png'), title: 'Sports Accessories' },
  { img: require('../assets/images/d7.png'), title: 'Sale' },
  { img: require('../assets/images/d8.png'), title: 'Sports Equipment' }
]

let typeData2 = [
  { img: require('../assets/images/d9.png'), title: 'Men T-Shirt' },
  { img: require('../assets/images/d10.png'), title: 'Men Shorts' },
  { img: require('../assets/images/d11.png'), title: 'Men Track Pents' },
  { img: require('../assets/images/d12.png'), title: 'Men Trousers' },
  { img: require('../assets/images/d13.png'), title: 'Summer Collection' },
  { img: require('../assets/images/d14.png'), title: 'Sports Accessories' },
  { img: require('../assets/images/d15.png'), title: 'Sale' },
  { img: require('../assets/images/d16.png'), title: 'Sports Equipment' }
]

const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <Image style={styles.logo} source={require('../assets/images/decathelon.png')} />
          <View style={styles.addressView}>
            <Text style={styles.deliveryText}>{`Delivery Location `}</Text>
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
          <Image style={styles.imagesForSCWV} source={require('../assets/images/heart.png')} />
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
        <ScrollView>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingTop: 20, width: '100%' }}>
            <View style={{ flexDirection: 'row', }} >
              {typeData1.map((item, index) => (
                <View key={index} style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                  <Image style={{ width: 80, height: 80, }} source={item.img} />
                  <Text style={{ marginTop: 10, width: 80, textAlign: 'center' }} numberOfLines={2}>{item.title}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingTop: 20, width: '100%' }}>
            <View style={{ flexDirection: 'row', }} >
              {typeData2.map((item, index) => (
                <View key={index} style={{ justifyContent: 'center', alignItems: 'center', marginHorizontal: 10 }}>
                  <Image style={{ width: 80, height: 80, }} source={item.img} />
                  <Text style={{ marginTop: 10, width: 80, textAlign: 'center' }} numberOfLines={2}>{item.title}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
          <View>
            <Carousell />
          </View>
        </ScrollView>
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
