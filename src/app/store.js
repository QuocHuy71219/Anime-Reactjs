import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'features/Auth/userSlice';
import animeReducer from 'features/Anime/animeSlice';
import commentReducer from 'features/Comment/commentSlice';

const rootReducer = {
  user: userReducer,
  anime: animeReducer,
  comment: commentReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
