import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../common/themeSlice";
import projectsReducer from "../features/personalHomepage/PersonalHomepageSite/Portfolio/personalProjectsSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        projects: projectsReducer,
    },
});

export default store;