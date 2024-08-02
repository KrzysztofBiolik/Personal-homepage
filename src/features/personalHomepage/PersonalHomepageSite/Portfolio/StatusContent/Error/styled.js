import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 96px;
    display:grid;
    grid-gap: 32px;
    justify-items: center;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        margin-top: 40px;
        font-size:18px;
    };
`;

export const Header = styled.header`
    font-weight: 700;
    font-size:24px;
`;

export const Paragraph = styled.p`
    margin: 0;
    font-size: 20px;
    line-height: 1.4;
`;