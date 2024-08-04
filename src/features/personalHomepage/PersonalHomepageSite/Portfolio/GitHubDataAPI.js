import axios from "axios";
import { githubAPIURL, username } from "../../../strings";

export const getGithubRepos = async () => {

    const response = await axios.get(`${githubAPIURL}users/${username}/repos`);
    return response.data;

};