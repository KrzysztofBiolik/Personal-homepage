import { Header, StyledGitHubIcons, MyProjects, Section, List, Tile, Name, Description, Links, LinksRow, LinksValue, Link } from "./styled";
import { SubHeader } from "../SubHeader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepositories, selectRepositories } from "./personalProjectsSlice";

export const Portfolio = () => {

    const dispatch = useDispatch();
    const repos = useSelector(selectRepositories);

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
            <List>
                {repos && repos.map(({ id, name, description, homepage, html_url }) => (
                    <Tile key={id}>
                        <Name>{name}</Name>
                        <Description>{description}</Description>
                        <Links>
                            {!!homepage && (
                                <LinksRow>
                                    <dt>Demo:</dt>
                                    <LinksValue>
                                        <Link
                                            target="_blank"
                                            rel="noreferrer"
                                            href={homepage}
                                        >
                                            {homepage}
                                        </Link>
                                    </LinksValue>
                                </LinksRow>
                            )}
                            <LinksRow>
                                <dt>Code:</dt>
                                <LinksValue>
                                    <Link
                                        target="_blank"
                                        rel="noreferrer"
                                        href={html_url}
                                    >
                                        {html_url}
                                    </Link>
                                </LinksValue>
                            </LinksRow>
                        </Links>
                    </Tile>
                ))}
            </List>
        </Section>
    )
}