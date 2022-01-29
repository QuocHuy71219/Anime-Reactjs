import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  commentList: JSON.parse(localStorage.getItem('commentInfo')) || [],
};

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment(state, action) {
      state.commentList.push(action.payload);
      localStorage.setItem('commentInfo', JSON.stringify(state.commentList));
    },
  },
});

const { actions, reducer } = commentSlice;
export const { addComment } = actions;
export default reducer;
