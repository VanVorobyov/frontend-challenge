import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from '../store/reducers/cardSlice';

export const store = configureStore({
  reducer: {
    cards: cardsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;