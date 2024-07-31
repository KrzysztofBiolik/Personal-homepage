import { Header, StyledGitHubIcons, MyProjects, Section } from "./styled";
import { SubHeader } from "../SubHeader";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchRepositories } from "./personalProjectsSlice";

export const Portfolio = () => {

    const dispatch = useDispatch();

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
        </Section>
    )
}