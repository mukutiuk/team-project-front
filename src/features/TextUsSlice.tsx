import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { postTextUs } from '../utils/fetchClient';

export interface TextState {
  isLoader: boolean;
}

const initialState: TextState = {
  isLoader: false,
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
  reducers: {},
  extraReducers: builder => {
    // builder.addCase(fetchPostTextUs.pending, () => {
    //   // eslint-disable-next-line no-console
    //   console.log('pendin');

    //   return {
    //     isLoader: true,
    //   };
    // });
    builder.addCase(fetchPostTextUs.fulfilled, state => {
      // eslint-disable-next-line no-console
      console.log('ful');

      return {
        ...state,
        isLoader: false,
      };
    });
  },
});

export default TextUsState.reducer;
export const {} = TextUsState.actions;
