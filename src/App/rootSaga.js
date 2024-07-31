import { all } from "redux-saga/effects";
import { projectsSaga } from "../features/personalHomepage/PersonalHomepageSite/Portfolio/personalProjectsSaga";

export default function* rootSaga() {
    yield all([
        projectsSaga(),
    ])
};