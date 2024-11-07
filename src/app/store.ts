import { configureStore } from '@reduxjs/toolkit';
import { ProductState } from '../features/ProductSlice';
import productReducer from '../features/ProductSlice';
import textReducer, { TextState } from '../features/TextUsSlice';
import profileReducer from '../features/ProfileSlice';
import bookReducer, { BooksState } from '../features/BookSlice';
import { ProfilState } from '../features/ProfileSlice';

export interface Store {
  products: ProductState;
  text: TextState;
  book: BooksState;
  profile: ProfilState;
}

export const store = configureStore({
  reducer: {
    products: productReducer,
    text: textReducer,
    book: bookReducer,
    profile: profileReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
