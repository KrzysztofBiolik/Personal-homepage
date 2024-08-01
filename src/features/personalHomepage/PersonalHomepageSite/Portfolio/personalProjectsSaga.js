import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getGithubRepos } from "./GitHubDataAPI";
import { fetchRepositories, setRepositories } from "./personalProjectsSlice";

function* fetchRepositoriesHandler() {
    yield delay(1200);
    const repositories = yield call(getGithubRepos);
    yield put(setRepositories(repositories));
}


export function* projectsSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}