import { configureStore } from '@reduxjs/toolkit';
import { ProductState } from '../features/ProductSlice';
import productReducer from '../features/ProductSlice';

export interface Store {
  products: ProductState;
}

export const store = configureStore<Store>({
  reducer: {
    products: productReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
