import { Header, StyledGitHubIcons, MyProjects, Section, List, Tile } from "./styled";
import { SubHeader } from "../SubHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories } from "./personalProjectsSlice";

export const Portfolio = () => {

    const dispatch = useDispatch();
    const repos = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch])

    return (
        <Section>
            <Header>
                <StyledGitHubIcons />
                <SubHeader>Portfolio</SubHeader>
                <MyProjects>My recent projects</MyProjects>
            </Header>
            <List>
                {repos.map(({ name, html_url }) => (
                    <Tile>
                        {name}
                    </Tile>
                ))}
            </List>
        </Section>
    )
}