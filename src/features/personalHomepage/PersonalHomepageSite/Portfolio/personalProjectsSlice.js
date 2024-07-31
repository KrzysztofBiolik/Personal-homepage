import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        repositories: null,
    },
    reducers: {
    }
})

export const {

} = projectsSlice.actions;

const selectprojectsState = state => state.personalProjects;

export const selectRepositories = (state) => selectprojectsState(state).repositories;