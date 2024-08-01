import { Header, StyledGitHubIcons, MyProjects, Section } from "./styled";
import { SubHeader } from "../SubHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "./personalProjectsSlice";
import { StatusContent } from "./StatusContent";

export const Portfolio = () => {

    const dispatch = useDispatch();
    const repos = useSelector(selectRepositories);
    const status = useSelector(selectRepositoriesStatus);

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    return (
        <Section>
            <Header>
                <StyledGitHubIcons />
                <SubHeader>Portfolio</SubHeader>
                <MyProjects>My recent projects</MyProjects>
            </Header>
            <StatusContent
                status={status}
                repositories={repos}
            />
        </Section >

    )
}