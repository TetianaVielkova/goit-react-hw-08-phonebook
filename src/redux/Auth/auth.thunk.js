import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
    'auth/register',
    async (dataUser, thunkAPI) => {
        try {
          const { data } = await axios.post('/users/signup', dataUser);
          setAuthHeader(data.token);
          return data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
    });


export const logIn = createAsyncThunk(
  'auth/login',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', userData);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }}
);

export const logOut = createAsyncThunk(
    'auth/logout',
    async (_, thunkAPI) => {
      try {
        await axios.post('/users/logout');
        clearAuthHeader();
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_,  thunkAPI) => {
    const {token} = thunkAPI.getState().auth;
        if (!token) {
           return thunkAPI.rejectWithValue('No refresh User. Not token'); 
        }
        setAuthHeader(token)
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);