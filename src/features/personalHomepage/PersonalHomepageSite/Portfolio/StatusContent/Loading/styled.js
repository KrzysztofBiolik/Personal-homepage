import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../../../../../images/icon-spinner.svg"

const rotate = keyframes`
to {
    transform: rotate(360deg);
}
`;

export const Wrapper = styled.div`
    text-align: center;
    margin-top: 88px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.textPrimary};
    display: grid;
    justify-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
        margin-top: 40px;
        font-size:18px;
    };
`;

export const StyledSpinner = styled(Spinner)`
    margin-top: 48px;
    animation: ${rotate} 1s linear infinite;
    color: ${({ theme }) => theme.colors.primary};
    height: auto;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        margin-top: 32px;
        width: 80px;
    };
`;