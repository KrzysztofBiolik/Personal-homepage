import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
    }
    *, ::after, ::before {
    box-sizing: inherit;
    }
    body {
    font-family: "Inter", "sans-serif";
    background: ${({ theme }) => theme.colors.site.background};
    color: ${({ theme }) => theme.colors.site.text};
    letter-spacing: 0.05em; // odsep liter
    word-break: break-word; // żeby linki przechodziły do nowej linii
    padding-bottom: 108px;
    }
`;