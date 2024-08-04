import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../../../../images/Github.svg";
import α from "color-alpha";

export const Section = styled.section`
    margin-top: 72px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 48px;
    };
`;

export const Header = styled.header`
    text-align: center;
`;

export const StyledGitHubIcons = styled(GitHubIcon)`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 6px;
`;

export const MyProjects = styled.h3`
    color: ${({ theme }) => theme.colors.text};
    font-size:20px;
    margin-top: 8px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size:18px;
    };
`;

