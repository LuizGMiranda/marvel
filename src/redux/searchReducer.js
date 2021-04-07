import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    serachLoading: 'success',
  },
  reducers: {
    serachInProgress: (state) => {
        state.serachLoading = 'loading';
    },
    serachError: (state) => {
        state.serachLoading = 'error';
    },
    serachComplete: (state) => {
        state.serachLoading = 'success';
    },
  },
});

export const { serachInProgress, serachComplete, serachError } = searchSlice.actions;

export const serachLoading = (state) => state.search.serachLoading;

export const serachCompleteAsync = () => dispatch => {
    setTimeout(() => dispatch(serachComplete()), 3000);
  };

export default searchSlice.reducer;
