import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../../../../common/icons/Github.svg";

export const Section = styled.div`
    margin-top: 72px;
`;

export const Header = styled.header`
    text-align: center;
`;

export const StyledGitHubIcons = styled(GitHubIcon)`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 6px;
`;

export const MyProjects = styled.p`
    color: ${({ theme }) => theme.colors.text};
    font-size:20px;
    margin-top: 8px;
`;

export const List = styled.ul`
    display:grid;
    grid-template-columns: repeat(2, 1fr) ;
    grid-gap: 32px;
    list-style: none;
`;

export const Tile = styled.li`
    background: ${({theme}) => theme.colors.boxBackground};
    padding: 56px;
`;