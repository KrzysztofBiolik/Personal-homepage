import styled from "styled-components";
import { ButtonLink } from "../ButtonLink";
import { ReactComponent as EnvelopeIcon } from "./Envelope.svg";

export const Wrapper = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap:60px;
    align-items: center;
    margin: -30px 0 0 0;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        grid-gap: 32px;
    } 

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
    } 
`;

export const PhotoOfMe = styled.img`
    width: 30vw;
    max-width:384px;
    border-radius: 50%;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        width: 35vw;
    } 
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
    color: ${({ theme }) => theme.colors.text};

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
       margin: 8px 0 8px 0;
        } 

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 28px;
        margin-top:8px;
        } 
`;

export const Description = styled.p`
    font-size:20px;
    max-width:650px;
    margin: 36px 0 0 0;
    line-height: 1.4; // wysokośc interlinii

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        margin-top: 16px;
    } 

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size:18px;
    } 
`;

export const StyledButtonLink = styled(ButtonLink)`
    display: inline-flex;
    align-items: center;
    margin-top:32px;
    `;


export const ButtonIcon = styled(EnvelopeIcon)`
    margin-right: 16px;
`;
