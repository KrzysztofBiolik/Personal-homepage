import styled from "styled-components";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap:60px;
    align-items: center;
    margin: -30px 0 0 0;
`;

export const PhotoOfMe = styled.img`
    max-width:384px;
    border-radius: 50%;
`;

export const ThisIs = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    // letter-spacing: initial;
`;

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    color: ${({theme}) => theme.colors.text};
`;

export const Description = styled.p`
    font-size:28px;
    max-width:650px;
    line-height: 1.4;
`;