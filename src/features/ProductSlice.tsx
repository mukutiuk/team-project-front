import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addZipCode, getProduct, getZipCode } from '../utils/fetchClient';

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
}

export interface Sort {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
}

export interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort;
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Zip {
  zipCode: number;
}

export interface ProductState {
  zipCode: Zip[];
  totalPages: number;
  totalElements: number;
  size: number;
  content: Product[];
  number: number;
  // sort: Sort;
  // pageable: Pageable;
  // numberOfElements: number;
  // first: boolean;
  // last: boolean;
  // empty: boolean;
}

const initialState: ProductState = {
  zipCode: [],
  totalPages: 1,
  totalElements: 5,
  size: 20,
  content: [],
  number: 0,
  // numberOfElements: 5,
  // first: true,
  // last: true,
  // empty: false,
};

export const fetchProduct = createAsyncThunk('product/fetch', () => {
  return getProduct();
});

export const fetchZipCode = createAsyncThunk('zip/fetch', () => {
  return getZipCode();
});

export const fetchAddZipCode = createAsyncThunk(
  'zipAdd/fetch',
  async (value: number, { rejectWithValue }) => {
    try {
      return await addZipCode(value);
    } catch (error) {
      return rejectWithValue(error);
    }
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
          content: action.payload.content,
        };
      })
      .addCase(fetchZipCode.fulfilled, (state: ProductState, action: any) => {
        return {
          ...state,
          zipCode: action.payload,
        };
      });
    // .addCase(addZipCode.fulfilled, (state: ProductState, action: any) => {
    //   return {
    //     ...state,
    //     zipCode: [...state.zipCode, action.payload],
    //   };
    // });
  },
});

// console.log()

export default ProductsState.reducer;
export const { deleteZipcode } = ProductsState.actions;
