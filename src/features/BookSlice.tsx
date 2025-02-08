import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { isCheckZipCode, postBook } from '../utils/fetchClient';

export interface BooksState {
  zipCode: string;
  deviceId: string;
  isSuccsess: boolean;
  isZipCode: boolean;
  nextSlice: boolean;
}

export interface BookStateFetch {
  customerDetails: {
    name: string;
    lastName: string;
    email: string;
    address: string;
    zipCode: string;
    phoneNumber: string;
  };
  deviceId: string;
}

const initialState: BooksState = {
  zipCode: '',
  deviceId: '',
  isSuccsess: false,
  isZipCode: false,
  nextSlice: false,
};

export const fetchBookPost = createAsyncThunk(
  'book/fetch',
  (value: BookStateFetch) => {
    return postBook(value);
  },
);

export const isZipCodeBook = createAsyncThunk(
  'zipcode/fetch',
  (value: string) => {
    return isCheckZipCode(value);
  },
);

export const BookState = createSlice({
  name: 'book',
  initialState,
  reducers: {
    addZip: (state: BooksState, action) => {
      return {
        ...state,
        zipCode: action.payload,
      };
    },
    addDevice: (state: BooksState, action) => {
      return {
        ...state,
        deviceId: action.payload,
      };
    },
    cahangeIsSuccsess: (state: BooksState) => {
      return {
        ...state,
        isSuccsess: false,
      };
    },
    cahangeIsZipCode: (state: BooksState) => {
      return {
        ...state,
        isZipCode: false,
      };
    },
    cahangeSlice: (state: BooksState) => {
      return {
        ...state,
        nextSlice: false,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchBookPost.fulfilled, state => {
      return {
        ...state,
        isSuccsess: true,
      };
    });
    builder.addCase(fetchBookPost.rejected, state => {
      return {
        ...state,
        isSuccsess: true,
      };
    });
    builder.addCase(isZipCodeBook.fulfilled, state => {
      return {
        ...state,
        nextSlice: true,
      };
    });

    builder.addCase(isZipCodeBook.rejected, state => {
      return {
        ...state,
        isZipCode: true,
      };
    });
  },
});

export default BookState.reducer;
export const {
  addZip,
  cahangeSlice,
  addDevice,
  cahangeIsSuccsess,
  cahangeIsZipCode,
} = BookState.actions;
