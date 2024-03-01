import { BasicInformation } from "./BasicInformation";
import { Wrapper } from "./styled";
import { ThemeSwitchButton } from "../../common/ThemeSwitchButton";


export const PersonalHomepage = () => {
    return (
        <Wrapper>
            <ThemeSwitchButton />
            <BasicInformation />
        </Wrapper>
    );
}