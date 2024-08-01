import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../../../../common/icons/Github.svg";
import α from "color-alpha";

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
    padding: 0;
    margin-top: 24px;
`;

export const Tile = styled.li`
    background: ${({ theme }) => theme.colors.boxBackground};
    padding: 56px;
    margin: 0;
    border: 6px solid ${({theme}) => theme.colors.tile.border};
    box-shadow: ${({theme}) => theme.boxShadow};
    border-radius: ${({theme}) => theme.borderRadius};
    transition: border-color 0.3s;

    &:hover {
        border-color: ${({theme}) => theme.colors.tile.borderHover};
    }

`;

export const Name = styled.h3`
    font-size: 24px;
    color: ${({theme}) => theme.colors.tile.header};
    margin: 0;
`;

export const Description = styled.p`
       margin-top: 24px;
       line-height: 1.4;
`;

export const Links = styled.dl`
    margin-top: 24px;
    margin-bottom: 0;
    display:grid;
    grid-gap: 8px;
    line-height: 1.6;
`;

export const LinksRow = styled.div`
       display: grid;
       grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
    margin: 0;
`;

export const Link = styled.a`
       color: ${({theme}) => theme.colors.primary};
       border-bottom: 1px solid ${({theme}) => α(theme.colors.primary, 0.3)};
       text-decoration: none;
       padding-bottom: 1px;

       &:hover{
        border-color: unset;
       }
`;