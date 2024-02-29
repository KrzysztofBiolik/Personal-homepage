import { BasicInformation } from "./BasicInformation";
import { Wrapper } from "./styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";


export const PersonalHomepage = () => {
    return (
        <Wrapper>
            <ThemeSwitch />
            <BasicInformation />
        </Wrapper>
    );
}