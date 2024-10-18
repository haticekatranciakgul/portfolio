import { createSlice } from '@reduxjs/toolkit';
import { projects } from '../Data/data';

const projectSlice = createSlice({
  name: 'projects',
  initialState: {
    items: projects,
  },
  reducers: {},
});

export const selectProjects = (state) => state.projects.items;
export default projectSlice.reducer;