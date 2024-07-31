import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import themeReducer from "../common/themeSlice";
import projectsReducer from "../features/personalHomepage/PersonalHomepageSite/Portfolio/personalProjectsSlice";
import rootSaga from "./rootSaga";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,
        projects: projectsReducer,
    },
    middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);


export default store;