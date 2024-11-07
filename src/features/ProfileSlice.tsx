import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getDataUser,
  postFirstRegistartion,
  postLogin,
  putData,
} from '../utils/fetchClient';

export interface ProfilState {
  isLoader: boolean;
  firstRequest: boolean;
  isError: boolean;
  token: string;
  isSuccsess: boolean;
  dataUser: ProfilePutData | null;
}

export interface ProfilePutData {
  email: string;
  name: string;
  lastName: string;
  address: string;
  zipCode: string;
  phoneNumber: string;
}

const initialState: ProfilState = {
  isLoader: false,
  firstRequest: false,
  isError: false,
  token: '',
  isSuccsess: false,
  dataUser: null,
};

export interface FetchFirstREgistartion {
  email: string;
  password: string;
  repeatPassword: string;
}

export interface FecthLoginState {
  email: string;
  password: string;
}

export const fetchFirstRegistration = createAsyncThunk(
  'registration/fetch',
  (value: FetchFirstREgistartion) => {
    return postFirstRegistartion(value);
  },
);

export const fetchPutData = createAsyncThunk(
  'putData/fetch',
  (value: ProfilePutData) => {
    return putData(value);
  },
);

export const fetchLogin = createAsyncThunk(
  'login/fetch',
  (value: FecthLoginState) => {
    return postLogin(value);
  },
);

export const getProfileData = createAsyncThunk('getGata/fetch', async () => {
  return getDataUser();
});

export const ProfileState = createSlice({
  name: 'text',
  initialState,
  reducers: {
    changeError: (state: ProfilState) => {
      return {
        ...state,
        isError: false,
      };
    },
    changeSuccess: (state: ProfilState) => {
      return {
        ...state,
        isSuccsess: false,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchFirstRegistration.pending, (state: ProfilState) => {
      return {
        ...state,
        isLoader: true,
      };
    });
    builder.addCase(fetchFirstRegistration.fulfilled, (state: ProfilState) => {
      return {
        ...state,
        firstRequest: true,
        isLoader: false,
      };
    });
    builder.addCase(fetchFirstRegistration.rejected, (state: ProfilState) => {
      return {
        ...state,
        firstRequest: false,
        isLoader: false,
        isError: true,
      };
    });
    builder.addCase(fetchLogin.pending, (state: ProfilState) => {
      return {
        ...state,
        isLoader: true,
        isError: false,
      };
    });
    builder.addCase(
      fetchLogin.fulfilled,
      (state: ProfilState, action: PayloadAction<any>) => {
        return {
          ...state,
          firstRequest: false,
          isLoader: false,
          token: action.payload.token,
          isSuccsess: true,
        };
      },
    );
    builder.addCase(fetchLogin.rejected, (state: ProfilState) => {
      return {
        ...state,
        isError: true,
        isLoader: false,
        isSuccsess: false,
      };
    });
    builder.addCase(
      getProfileData.fulfilled,
      (state: ProfilState, action: any) => {
        return {
          ...state,
          dataUser: action.payload,
        };
      },
    );
    builder.addCase(fetchPutData.pending, state => {
      return {
        ...state,
        isLoader: true,
      };
    });
    builder.addCase(fetchPutData.fulfilled, state => {
      return {
        ...state,
        isLoader: false,
      };
    });
    builder.addCase(fetchPutData.rejected, state => {
      return {
        ...state,
        isLoader: false,
      };
    });
  },
});

export default ProfileState.reducer;
export const { changeError, changeSuccess } = ProfileState.actions;
