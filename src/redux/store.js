import { configureStore } from '@reduxjs/toolkit';
import getProductSlice from './slice/getProductSlice';
import authSlice from './slice/authSlice';
import notificationSlice from './slice/notificationSlice';
import sportsSlice from './slice/sportsSlice';
import languageSlice from './slice/languageSlice';

export const store = configureStore({
  reducer: {
    productData: getProductSlice,
    auth: authSlice,
    notifications: notificationSlice,
    sports: sportsSlice,
    language: languageSlice
  },
});