/**
 * @format
 */
// 

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
import store from './src/redux/store';
import { Provider } from 'react-redux';

const ReduxApp = () => (
    <I18nextProvider i18n={i18n}>
        <App />
    </I18nextProvider>
);


AppRegistry.registerComponent(appName, () => ReduxApp);
