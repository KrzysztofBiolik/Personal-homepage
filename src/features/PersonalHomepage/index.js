import { BasicInformation } from "./BasicInformation";
import { Wrapper } from "./styled";
import { ThemeSwitchButton } from "../../common/ThemeSwitchButton";
import { Skills } from "./Skills/index";
import { nextSkills, skills } from "../PersonalHomepage/skills";
import { Footer } from "./Footer";


export const PersonalHomepage = () => {
    return (
        <Wrapper>
            <ThemeSwitchButton />
            <BasicInformation />
            <Skills
                title={(
                    <>
                        My skillset includes
                    </>
                )}
                skills={skills}
            />
            <Skills
                title={(
                    <>
                        What I want to learn next
                    </>
                )}
                skills={nextSkills}
            />
            <Footer />
        </Wrapper>
    );
}