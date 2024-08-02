import styled, { css } from "styled-components";
import { ReactComponent as SunIcon } from "./sun.svg";

export const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Button = styled.button`
    display: flex;
    border: none;
    align-items: center;
    background: none;
    color: inherit; //taki kolor jak w komponencie wyżej
    outline-offset: 8px;
    cursor: pointer;
`;

export const ButtonText = styled.span`
    font-size:14px;
    font-weight: bold;
    text-transform: uppercase;
    margin-right: 12px;

    @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        display: none;
    }
`;

export const Box = styled.span`
    border: 1px solid;
    padding: 3px;
    width: 48px;
    border-radius:16px;
    display: flex;
    background: ${({ theme }) => theme.colors.themeSwitch.background};
`;

export const IconWrapper = styled.div`
    background: currentColor; // takie samo jak kolor tekstu
    display: flex;
    padding: 4px;
    border-radius: 50%;
    transition: transform 0.5s;

    ${({ changeSite }) => changeSite && css`
    transform: translateX(18px);
    `}
`;

export const Icon = styled(SunIcon)`
    color: ${({theme}) => theme.colors.themeSwitch.icon};
`;