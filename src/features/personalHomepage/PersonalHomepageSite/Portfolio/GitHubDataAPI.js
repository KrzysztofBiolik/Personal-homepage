import axios from "axios";

const getGithubRepos = async () => {

    const githubURL = "https://api.github.com";
    try {
        const response = await axios.get(
            `${githubURL}/users/${username}/repos`
        );
        return response.data;
    } catch (error) 
    {throw new Error("Error fetching Github Projects", error)}
};