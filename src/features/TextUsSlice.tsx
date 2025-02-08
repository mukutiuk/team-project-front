import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postTextUs } from '../utils/fetchClient';

export interface TextState {
  isLoader: boolean;
  isSuccsess: boolean;
}

const initialState: TextState = {
  isLoader: false,
  isSuccsess: false,
};

export interface FetchText {
  userEmail: string;
  message: string;
}

export const fetchPostTextUs = createAsyncThunk(
  'post/fetch',
  (value: FetchText) => {
    return postTextUs(value);
  },
);

export const TextUsState = createSlice({
  name: 'text',
  initialState,
  reducers: {
    changeSuccessful: (state: TextState) => {
      return {
        ...state,
        isSuccsess: false,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPostTextUs.pending, state => {
      return {
        ...state,
        isLoader: true,
      };
    });
    builder.addCase(fetchPostTextUs.fulfilled, state => {
      return {
        ...state,
        isLoader: false,
        isSuccsess: true,
      };
    });
    builder.addCase(fetchPostTextUs.rejected, state => {
      return {
        ...state,
        isLoader: false,
        isSuccsess: true,
      };
    });
  },
});

export default TextUsState.reducer;
export const { changeSuccessful } = TextUsState.actions;
