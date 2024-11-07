import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchIdols} from './idolApi';
import {fetchDonations, updateDonation} from './donationApi';
import {fetchCharts, voteForIdol} from './chartApi';

export const getIdols = createAsyncThunk('data/getIdols', fetchIdols);
export const getDonations = createAsyncThunk('data/getDonations', fetchDonations);
export const getCharts = createAsyncThunk('data/getCharts', fetchCharts);
export const getfavoriteCharts = createAsyncThunk('data/getfavoriteCharts', fetchCharts);
export const setDonation = createAsyncThunk('data/updateDonationAmount', updateDonation);
export const getVoteIdols = createAsyncThunk('data/getVoteIdols', fetchCharts);
export const setVoteForIdol = createAsyncThunk('data/voteForIdol', voteForIdol);

const apiSlice = createSlice({
  name: 'data',
  initialState: {
    myCredits: +localStorage.getItem('myCredits'),
    myFavoriteArtists: JSON.parse(localStorage.getItem('myFavoriteArtists')),
    idols: {list: [], nextCursor: null},
    voteIdols: {idols: [], nextCursor: null},
    donations: {list: [], nextCursor: null},
    charts: {idols: [], nextCursor: null},
    chartGender: 'female',
    idolsStatus: 'idle',
    donationsStatus: 'idle',
    chartsStatus: 'idle',
    idolsError: null,
    donationsError: null,
    chartsError: null,
  },
  reducers: {
    increseCredit: (state, action) => {
      state.myCredits += action.payload;
    },
    decreseCredit: (state, action) => {
      state.myCredits -= action.payload;
    },
    resetLocalStorage: state => {
      state.myCredits = JSON.parse(process.env.REACT_APP_DEFAULT_CREDIT);
      state.myFavoriteArtists = JSON.parse(process.env.REACT_APP_DEFAULT_FAVORITE_ARTISTS);
      localStorage.setItem('myCredits', JSON.stringify(state.myCredits));
      localStorage.setItem('myFavoriteArtists', JSON.stringify(state.myFavoriteArtists));
    },
    addFavorite: (state, action) => {
      state.myFavoriteArtists = [...state.myFavoriteArtists, ...action.payload];
      localStorage.setItem('myFavoriteArtists', JSON.stringify(state.myFavoriteArtists));
    },
    removeFavorite: (state, action) => {
      state.myFavoriteArtists = state.myFavoriteArtists.filter(artist => artist.id !== action.payload);
      localStorage.setItem('myFavoriteArtists', JSON.stringify(state.myFavoriteArtists));
    },
    resetVoteIdols: state => {
      state.voteIdols = {idols: [], nextCursor: null};
    },
    transChartGender: (state, action) => {
      state.chartGender = action.payload;
    },
    resetDonations: state => {
      state.donations = {list: [], nextCursor: null};
    },
    resetIdols: state => {
      state.idols = {list: [], nextCursor: null};
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getIdols.pending, state => {
        state.idolsStatus = 'loading';
        state.idolsError = null;
      })
      .addCase(getIdols.fulfilled, (state, action) => {
        state.idolsStatus = 'succeeded';
        state.idols.list = [...state.idols.list, ...action.payload.list];
        state.idols.nextCursor = action.payload.nextCursor;
      })
      .addCase(getIdols.rejected, (state, action) => {
        state.idolsStatus = 'failed';
        state.idolsError = action.error.message;
      })
      .addCase(getDonations.pending, state => {
        state.donationsStatus = 'loading';
        state.donationsError = null;
      })
      .addCase(getDonations.fulfilled, (state, action) => {
        state.donationsStatus = 'succeeded';
        state.donations.list = [...state.donations.list, ...action.payload.list];
        state.donations.nextCursor = action.payload.nextCursor;
      })
      .addCase(getDonations.rejected, (state, action) => {
        state.donationsStatus = 'failed';
        state.donationsError = action.error.message;
      })
      .addCase(getCharts.pending, state => {
        state.chartsStatus = 'loading';
        state.chartsError = null;
      })
      .addCase(getCharts.fulfilled, (state, action) => {
        // 이달의 차트
        state.chartsStatus = 'succeeded';
        state.charts = action.payload;
      })
      .addCase(getCharts.rejected, (state, action) => {
        state.chartsStatus = 'failed';
        state.chartsError = action.error.message;
      })
      .addCase(getfavoriteCharts.fulfilled, (state, action) => {
        // 관심있는 아이돌
        state.charts = action.payload;
      })
      .addCase(setDonation.fulfilled, (state, action) => {
        const updatedDonation = action.payload;
        const target = state.donations.list.findIndex(donation => donation.id === updatedDonation.id);
        state.donations.list[target] = {...state.donations.list[target], receivedDonations: updatedDonation.receivedDonations};
      })
      .addCase(getVoteIdols.fulfilled, (state, action) => {
        state.voteIdols.idols = [...state.voteIdols.idols, ...action.payload.idols];
        state.voteIdols.nextCursor = action.payload.nextCursor;
      })
      .addCase(setVoteForIdol.fulfilled, state => {
        const resultCredit = state.myCredits - JSON.parse(process.env.REACT_APP_VOTES_VALUE);
        localStorage.setItem('myCredits', resultCredit);
        state.myCredits = resultCredit;
      });
  },
});

export const {
  increseCredit,
  decreseCredit,
  addFavorite,
  removeFavorite,
  resetVoteIdols,
  transChartGender,
  resetLocalStorage,
  resetDonations,
  resetIdols,
} = apiSlice.actions;

export default apiSlice.reducer;
