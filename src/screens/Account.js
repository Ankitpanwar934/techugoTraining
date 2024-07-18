import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../redux/slice/authSlice';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { setLanguage } from '../redux/slice/languageSlice';

const Account = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { user, address } = useSelector((state) => state.auth);
  const language = useSelector((state) => state.language.language);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.navigate('Login');
  };

  const [isEnabled, setIsEnabled] = useState()

  const toggleSwitch = () => {
    const newLanguage = isEnabled ? 'en' : 'hi';
    dispatch(setLanguage(newLanguage))
    setIsEnabled(!isEnabled)
  }



  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{t(`Account Detail`)}</Text>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>{t(`Username`)}</Text>
        <Text style={styles.value}>{user?.username}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>{`Email:`}</Text>
        <Text style={styles.value}>{user?.email}</Text>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.label}>{`Address:`}</Text>
        <Text style={styles.value}>{address}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>{`Logout`}</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 30 }}>
        <Text style={{ textAlign: 'center' }}>{'Language Selection'}</Text>
        <View style={{ marginTop: 30, flexDirection: 'row', alignItems: 'center', }}>
          <Text style={{ marginEnd: 10, color: isEnabled ? 'red' : 'black', fontSize: 20 }}>{`हिन्दी`}</Text>
          <Switch
            trackColor={{ false: '#767577', true: '#fbfcfd' }}
            thumbColor={isEnabled ? '#0281f1' : '#f4f3f4'}
            style={{ borderColor: '#3e3e3e', borderWidth: .2 }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  detailContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#777',
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#ff6347',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Account;

