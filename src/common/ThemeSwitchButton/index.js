import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonText, Wrapper, Box, Icon, IconWrapper } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "../themeSlice";

export const ThemeSwitchButton = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();
    return (
        <Wrapper>
            <Button onClick={() => dispatch(toggleTheme())}>
                <ButtonText>Dark mode {isDarkTheme ? "on" : "off"}</ButtonText>
                <Box>
                    <IconWrapper changeSite={isDarkTheme}>
                        <Icon />
                    </IconWrapper>
                </Box>
            </Button>
        </Wrapper>
    );
};