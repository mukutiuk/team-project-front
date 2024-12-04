import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  addZipCode,
  deleteZipCode,
  getDetailProduct,
  getProduct,
  getZipCode,
} from '../utils/fetchClient';

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

export interface ProductDetail {
  id: number;
  description: string;
  deviceSubtypes: Product[];
}

export interface Zip {
  zipCode: number;
}

export interface ProductState {
  zipCode: Zip[];
  content: Product[];
  productDetail: ProductDetail | null;
}

const initialState: ProductState = {
  zipCode: [],
  content: [],
  productDetail: null,
};

export const fetchProduct = createAsyncThunk('product/fetch', () => {
  return getProduct();
});

export const fetchZipCode = createAsyncThunk('zip/fetch', () => {
  return getZipCode();
});

export const fetchAddZipCode = createAsyncThunk(
  'zipAdd/fetch',
  (value: string) => {
    return addZipCode(value);
  },
);

export const getProductDetailsData = createAsyncThunk(
  'details/featch',
  (id: number) => {
    return getDetailProduct(id);
  },
);

export const fetchDeleteZipCode = createAsyncThunk(
  'zipDelete/fetch',
  (value: string) => {
    return deleteZipCode(value);
  },
);

export const ProductsState = createSlice({
  name: 'products',
  initialState,
  reducers: {
    deleteZipcode: (state: ProductState, action) => {
      return {
        ...state,
        zipCode: state.zipCode.filter(item => item.zipCode !== action.payload),
      };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchProduct.fulfilled, (state: ProductState, action: any) => {
        return {
          ...state,
          content: action.payload,
        };
      })
      .addCase(fetchZipCode.fulfilled, (state: ProductState, action: any) => {
        return {
          ...state,
          zipCode: action.payload,
        };
      })
      .addCase(
        fetchAddZipCode.fulfilled,
        (state: ProductState, action: any) => {
          return {
            ...state,
            zipCode: [...state.zipCode, action.payload],
          };
        },
      )
      .addCase(
        fetchDeleteZipCode.fulfilled,
        (state: ProductState, action: any) => {
          return {
            ...state,
            zipCode: state.zipCode.filter(
              item => item.zipCode !== action.payload,
            ),
          };
        },
      )
      .addCase(
        getProductDetailsData.fulfilled,
        (state: ProductState, action: any) => {
          return {
            ...state,
            productDetail: action.payload,
          };
        },
      );
  },
});

export default ProductsState.reducer;
export const { deleteZipcode } = ProductsState.actions;
