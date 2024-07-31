import axios from "axios";

export const getGithubRepos = async () => {

    const githubURL = "https://api.github.com";
    const username = "krzysztof-biolik"

    const response = await axios.get(
        `${githubURL}/users/${username}/repos`
    );
    return response.data;

};