import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        repositories: null,
    },
    reducers: {
        fetchRepositories: () => { },
        setRepositories: (state, { repositories }) => {
            state.repositories = repositories
        },
    }
})

export const {
    fetchRepositories,
    setRepositories,
} = projectsSlice.actions;

const selectprojectsState = state => state.personalProjects;

export const selectRepositories = (state) => selectprojectsState(state).repositories;

export default projectsSlice.reducer;