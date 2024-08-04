import styled from "styled-components";

export const Section = styled.footer`
    margin-top: 120px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 60px;
    };
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

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        font-size:24px;
    };
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

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size:16px;
    };
`;

export const Icon = styled.img`
    vertical-align: middle;
    margin-left: 5px;

    @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        height: 16px;
    }
`;