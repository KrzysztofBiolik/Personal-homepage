import styled from "styled-components";
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
`;

export const Box = styled.span`
    border: 1px solid;
    padding: 3px;
    width: 48px;
    border-radius:12px;
    display: flex;
`;

export const IconWrapper = styled.span`
    display: flex;
    padding: 3px;
    border-radius: 50%;

`;

export const Icon = styled(SunIcon)`
`;