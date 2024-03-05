import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 120px;
`;

export const LetsTalk = styled.p`
    font-size: 12px;
    text-transform: uppercase;
    margin-bottom: 0;
`;

export const EmailLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    font-size: 32px;
    text-decoration: none;
    font-weight: 900;
    transition: color 0.5s;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
    }
`;

export const EmailWrapper = styled.div`
    margin: 12px 0;
`;

export const Text = styled.p`
    max-width: 670px;
    font-size: 18px;
    line-height: 1.4;
    color: ${({theme}) => theme.colors.text};
    margin: 0;
`;