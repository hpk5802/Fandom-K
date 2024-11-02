import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchIdols} from './idolApi';
import {fetchDonations, updateDonation} from './donationApi';
import {fetchCharts} from './chartApi';

export const getIdols = createAsyncThunk('data/getIdols', fetchIdols);
export const getDonations = createAsyncThunk('data/getDonations', fetchDonations);
export const getCharts = createAsyncThunk('data/getCharts', fetchCharts);
export const getfavoriteCharts = createAsyncThunk('data/getfavoriteCharts', fetchCharts);
export const setDonation = createAsyncThunk('data/updateDonationAmount', updateDonation);

const apiSlice = createSlice({
  name: 'data',
  initialState: {
    myCredits: +localStorage.getItem('myCredits'),
    myFavoriteArtists: JSON.parse(localStorage.getItem('myFavoriteArtists')),
    idols: {list: [], nextCursor: null},
    donations: {list: [], nextCursor: null},
    charts: {idols: []},
    status: 'idle',
    error: null,
  },
  reducers: {
    increseCredit: (state, action) => {
      state.myCredits += action.payload;
    },
    decreseCredit: (state, action) => {
      state.myCredits -= action.payload;
    },
    addFavorite: (state, action) => {
      state.myCredits = [...state.myCredits, action.payload];
    },
    removeFavorite: (state, action) => {
      const getArtistes = state.myCredits.filter(dt => dt.id !== action.payload);
      state.myCredits = getArtistes;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getIdols.fulfilled, (state, action) => {
        state.idols.list = [...state.idols.list, ...action.payload.list];
        state.idols.nextCursor = action.payload.nextCursor;
      })
      .addCase(getDonations.fulfilled, (state, action) => {
        state.donations.list = [...state.donations.list, ...action.payload.list];
        state.donations.nextCursor = action.payload.nextCursor;
      })
      .addCase(getCharts.fulfilled, (state, action) => {
        // 이달의 차트
        state.charts = action.payload;
      })
      .addCase(getfavoriteCharts.fulfilled, (state, action) => {
        // 관심있는 아이돌
        state.charts = action.payload;
      })
      .addCase(setDonation.fulfilled, (state, action) => {
        const updatedDonation = action.payload;
        const target = state.donations.list.findIndex(donation => donation.id === updatedDonation.id);
        state.donations.list[target] = {...state.donations.list[target], receivedDonations: updatedDonation.receivedDonations};
      });
  },
});

export const {increseCredit, decreseCredit, addFavorite, removeFavorite} = apiSlice.actions;

export default apiSlice.reducer;
