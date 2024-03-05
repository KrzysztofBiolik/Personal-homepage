import { Header, StyledGitHubIcons, MyProjects, Section } from "./styled";
import { SubHeader } from "../SubHeader";

export const Portfolio = () => (
    <Section>
        <Header>
            <StyledGitHubIcons />
            <SubHeader>Portfolio</SubHeader>
            <MyProjects>My recent projects</MyProjects>
        </Header>
    </Section>
)