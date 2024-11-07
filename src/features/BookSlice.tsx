import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postBook } from '../utils/fetchClient';

export interface BooksState {
  zipCode: string;
  deviceId: string;
  isSuccsess: boolean;
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
};

export const fetchBookPost = createAsyncThunk(
  'book/fetch',
  (value: BookStateFetch) => {
    return postBook(value);
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
  },
  extraReducers: builder => {
    builder.addCase(fetchBookPost.fulfilled, state => {
      return {
        ...state,
        isSuccsess: true,
      };
    });
  },
});

export default BookState.reducer;
export const { addZip, addDevice, cahangeIsSuccsess } = BookState.actions;
