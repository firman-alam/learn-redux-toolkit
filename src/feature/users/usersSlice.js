import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Jon Snow' },
  { id: '1', name: 'Tyrion Lannister' },
  { id: '2', name: 'Daenerys Targaryen' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
