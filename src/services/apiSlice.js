import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchIdols} from './idolApi';
import {fetchDonations, updateDonation} from './donationApi';
import {fetchCharts} from './chartApi';

export const getIdols = createAsyncThunk('data/getIdols', fetchIdols);
export const getDonations = createAsyncThunk('data/getDonations', fetchDonations);
export const getCharts = createAsyncThunk('data/getCharts', fetchCharts);
export const setDonation = createAsyncThunk('data/updateDonationAmount', updateDonation);

const apiSlice = createSlice({
  name: 'data',
  initialState: {idols: {list: []}, donations: {list: [], nextCursor: null}, charts: {idols: []}, status: 'idle', error: null},
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getIdols.fulfilled, (state, action) => {
        state.idols = action.payload;
      })
      .addCase(getDonations.fulfilled, (state, action) => {
        state.donations.list = [...state.donations.list, ...action.payload.list];
        state.donations.nextCursor = action.payload.nextCursor;
      })
      .addCase(getCharts.fulfilled, (state, action) => {
        state.charts = action.payload;
      });
  },
});

export default apiSlice.reducer;
