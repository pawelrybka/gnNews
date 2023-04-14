import { createSlice } from '@reduxjs/toolkit';

export interface RootState {
  display: {
    displayColumn: boolean;
  };
}

export const displaySlice = createSlice({
  name: 'display',
  initialState: {
    displayColumn: false,
  },
  reducers: {
    toggleColumn: state => {
      state.displayColumn = !state.displayColumn;
    },
  },
});

export const { toggleColumn } = displaySlice.actions;

export default displaySlice.reducer;
