import styled from "styled-components";
import { SubHeader } from "../SubHeader";
import {ReactComponent as DotIcon} from "../../../../images/dot.svg";
 
export const Section = styled.section`
    background: ${({ theme }) => theme.colors.boxBackground};
    box-shadow: ${({ theme }) => theme.boxShadow};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 32px;
    margin-top: 72px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        margin-top: 48px;
    };
`;

export const StyleHeader = styled(SubHeader)`
    padding-bottom:16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.text} ;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        font-size: 22px;
    };
`;

export const List = styled.ul`
    display: grid;
    list-style: none;
    grid-template-columns: repeat(3, 1fr);
    padding:0;
    grid-gap: 10px 108px;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        grid-template-columns: repeat(2, 1fr);
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
    };
`;

export const Item = styled.li`
    line-height: 1.4;
`;

export const SkillDotIcon = styled(DotIcon)`
    color: ${({theme}) => theme.colors.primary};
    margin-right: 16px;

    @media(max-width: ${({theme}) => theme.breakpoints.mobileMax}px) {
        width:6px;
        margin-right: 8px;;
    }
`;

