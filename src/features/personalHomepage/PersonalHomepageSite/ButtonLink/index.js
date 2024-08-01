import styled from "styled-components";

export const ButtonLink = styled.a`
    padding: 12px 16px;
    font-size:20px;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    text-decoration: none;
`;