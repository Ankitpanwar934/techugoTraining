import '@formatjs/intl-getcanonicallocales/polyfill';
import '@formatjs/intl-locale/polyfill';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/en';
import '@formatjs/intl-pluralrules/locale-data/fr';
import '@formatjs/intl-displaynames/polyfill';
import '@formatjs/intl-listformat/polyfill';
import '@formatjs/intl-numberformat/polyfill';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-datetimeformat/polyfill';
import '@formatjs/intl-datetimeformat/locale-data/en';
import '@formatjs/intl-datetimeformat/locale-data/fr';

import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import { name as appName } from './app.json';
import i18n from './src/i18n/i18n';
import { store } from './src/redux/store';
import { Provider, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loginSuccess } from './src/redux/slice/authSlice';

const ReduxAppWrapper = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const rehydrateAuth = async () => {
            const token = await AsyncStorage.getItem('token');
            const user = await AsyncStorage.getItem('user');
            if (token) {
                dispatch(loginSuccess({ token }));
            }
        };

        rehydrateAuth();
    }, [dispatch]);

    return (
        <I18nextProvider i18n={i18n}>
            <App />
        </I18nextProvider>
    );
};

const ReduxApp = () => (
    <Provider store={store}>
        <ReduxAppWrapper />
    </Provider>
);

AppRegistry.registerComponent(appName, () => ReduxApp);
