import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: "projects",
    initialState: {
        repositories: null,
        status: "initial",
    },
    reducers: {
        fetchRepositories: (state) => {
            state.status = "loading";
        },
        setRepositories: (state, { payload: repositories }) => {
            state.status = "success";
            state.repositories = repositories;
        },
    }
})

export const {
    fetchRepositories,
    setRepositories,
} = projectsSlice.actions;

const selectprojectsState = state => state.projects;

export const selectRepositories = (state) => selectprojectsState(state).repositories;
export const selectRepositoriesStatus = (state) => selectprojectsState(state).status;

export default projectsSlice.reducer;