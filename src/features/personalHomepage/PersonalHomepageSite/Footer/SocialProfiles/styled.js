import styled from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding:0;
    display:flex;
    margin-top:56px;
    margin-bottom: 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        margin-top: 36px;
    };
`;

export const Item = styled.li`
    margin: 0 18px 0 0;
`;
 

export const Link = styled.a`
    color: ${({theme}) => theme.colors.text};
    transition: color 0.5s;

    &:hover {
        color: ${({theme}) => theme.colors.primary};
 }
`;
