import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

const initialState = {
  user: '',
  userinfo: '',
  carga: false,
  mostrar: false,
  places: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setUserInfo: (state, action) => {
      state.userinfo = action.payload;
    },
    setCarga: (state, action) => {
      state.carga = action.payload;
    },
    setMostrar: (state, action) => {
      state.mostrar = !state.mostrar;
    },
    setPlaces: (state, action) => {
      state.places = action.payload;
    }
  },
});

const store = configureStore({
  reducer: {auth : authSlice.reducer},
});

export const aAction = authSlice.actions;

export { Provider, store };