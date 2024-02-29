import { Button, ButtonText, Wrapper, Box, Icon, IconWrapper } from "./styled";

export const ThemeSwitch = () => {
    return (
        <Wrapper>
            <Button>
                <ButtonText>Dark mode off</ButtonText>
                <Box>
                    <IconWrapper>
                        <Icon />
                    </IconWrapper>
                </Box>
            </Button>
        </Wrapper>
    );
};