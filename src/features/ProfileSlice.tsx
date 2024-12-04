import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  changeDescriptionProblem,
  changeStatus,
  getActiveOrders,
  getDataUser,
  getNotActiveOrders,
  getOwnOrders,
  getSearchOrders,
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
  content: OrderType[];
  ownOrders: OrderType[];
  notActiveOrde: OrderType[];
  activeOrders: OrderType[];
  totalElements: number;
}

export interface ProfilePutData {
  email: string;
  name: string;
  lastName: string;
  address: string;
  zipCode: string;
  phoneNumber: string;
}

export interface OrderType {
  description: string | null;
  device: string;
  id: string;
  lastName: string;
  name: string;
  orderDate: string;
  phoneNumber: string;
  status: string;
}

const initialState: ProfilState = {
  isLoader: false,
  firstRequest: false,
  isError: false,
  token: '',
  isSuccsess: false,
  dataUser: null,
  content: [],
  activeOrders: [],
  ownOrders: [],
  notActiveOrde: [],
  totalElements: 0,
};

export interface ChangeOrder {
  id: number;
  value: string;
}

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

export const changeStatusOrder = createAsyncThunk(
  'patchStatus/fetch',
  (data: ChangeOrder) => {
    return changeStatus(data);
  },
);

export const changeDescription = createAsyncThunk(
  'patchdescription/fetch',
  (data: ChangeOrder) => {
    return changeDescriptionProblem(data);
  },
);

export const getProfileData = createAsyncThunk('getGata/fetch', () => {
  return getDataUser();
});

export const getProfileOrders = createAsyncThunk('getOwnOrders/fetch', () => {
  return getOwnOrders();
});

export const getOrdersNotActive = createAsyncThunk(
  'getOrdersNotActive/fetch',
  () => {
    return getNotActiveOrders();
  },
);

export const getOrdersActive = createAsyncThunk(
  'getOrdersActive/fetch',
  (page: number) => {
    return getActiveOrders(page);
  },
);

export const getSerchQuery = createAsyncThunk(
  'getSearch/fetch',
  (value: string) => {
    return getSearchOrders(value);
  },
);

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
    changeOrderStatus: (state: ProfilState, action) => {
      return {
        ...state,
        content: state.content.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              status: action.payload.value,
            };
          }

          return item;
        }),
      };
    },
    filterActive: (state: ProfilState) => {
      return {
        ...state,
        activeOrders: state.activeOrders.filter(
          item => item.status !== 'COMPLETED',
        ),
      };
    },
    filterNotActive: (state: ProfilState) => {
      return {
        ...state,
        notActiveOrde: state.notActiveOrde.filter(
          item => item.status === 'COMPLETED',
        ),
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
    builder.addCase(changeStatusOrder.fulfilled, (state, action) => {
      return {
        ...state,
        content: state.content.map(item => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              status: action.payload.status,
            };
          }

          return item;
        }),
      };
    });
    builder.addCase(getProfileOrders.fulfilled, (state, action) => {
      return {
        ...state,
        ownOrders: action.payload.content,
      };
    });
    builder.addCase(getOrdersNotActive.fulfilled, (state, action) => {
      return {
        ...state,
        notActiveOrde: action.payload.content,
      };
    });
    builder.addCase(getSerchQuery.fulfilled, (state, action) => {
      return {
        ...state,
        content: action.payload.content,
      };
    });

    builder.addCase(getOrdersActive.fulfilled, (state, action) => {
      return {
        ...state,
        activeOrders: action.payload.content,
        totalElements: action.payload.totalElements,
      };
    });
  },
});

export default ProfileState.reducer;
export const {
  changeError,
  changeSuccess,
  changeOrderStatus,
  filterActive,
  filterNotActive,
} = ProfileState.actions;
