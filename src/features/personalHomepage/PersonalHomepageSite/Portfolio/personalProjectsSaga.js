import { call, takeLatest } from "redux-saga/effects";
import { getGithubRepos } from "./GitHubDataAPI";

function* fetchRepositoriesHandler() {

    const repositories = yield call(getGithubRepos);
    yield put(setRepositories(repositories));
}


export function* projectsSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}