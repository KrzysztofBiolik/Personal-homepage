import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getGithubRepos } from "./GitHubDataAPI";
import { fetchRepositories, setError, setRepositories } from "./personalProjectsSlice";

function* fetchRepositoriesHandler() {
    try {
        yield delay(1200);
        const repositories = yield call(getGithubRepos);
        yield put(setRepositories(repositories));
    } catch (error) {
        yield put(setError());
    }
};


export function* projectsSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
};