import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { hanleListAnimeWithArrayId } from 'api/handleAPI';

export const handleAnimeWatchToday = createAsyncThunk('animeTodayWatch/list', async (data, thunkAPI) => {
  let predat = thunkAPI;
  console.log(predat);
  //cach 1
  // const allAnime = await Promise.all([
  //   ...(await handlePromis(getAnimeWidthId, data)),
  // ]);
  // return allAnime;
  // cach2
  let allAnime = await hanleListAnimeWithArrayId(data);
  return allAnime;
});

const userSlice = createSlice({
  name: 'anime',
  initialState: {
    data: [],
    isFindData: false,
  },
  reducers: {
    getListTodayWatch(state, action) {
      state.data = action.payload;
      state.isFindData = true;
    },
    resetListTodayWatch(state, action) {
      return state;
    },
    notFoundListTodayWatch(state) {
      return state;
    },
  },
  extraReducers: {
    [handleAnimeWatchToday.fulfilled]: (state, action) => {
      if (action.payload) {
        state.data = [...action.payload];
        state.isFindData = false;
      } else {
        // state = initialState;
        // state.foundData = false;
        return state;
      }
    },
    [handleAnimeWatchToday.pending]: (state, action) => {
      state.isFindData = true;
    },
    [handleAnimeWatchToday.rejected]: (state, action) => {
      state.isFindData = false;
      return state;
    },
  },
});

const { reducer, actions } = userSlice;
export const { getListTodayWatch, resetListTodayWatch, notFoundListTodayWatch } = actions;
export default reducer;
