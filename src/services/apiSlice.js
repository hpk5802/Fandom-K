import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchIdols} from './idolApi';
import {fetchDonations} from './donationApi';

export const getIdols = createAsyncThunk('data/getIdols', fetchIdols);
export const getDonations = createAsyncThunk('data/getDonations', fetchDonations);

const apiSlice = createSlice({
  name: 'data',
  initialState: {idols: {list: []}, donations: {list: []}, status: 'idle', error: null},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getIdols.fulfilled, (state, action) => {
        state.idols = action.payload;
      })
      .addCase(getDonations.fulfilled, (state, action) => {
        state.donations = action.payload;
      });
  },
});

export default apiSlice.reducer;
