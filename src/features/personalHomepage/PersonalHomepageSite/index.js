import { BasicInformation } from "./BasicInformation";
import { Icon, Wrapper } from "./styled";
import { ThemeSwitchButton } from "../../../common/ThemeSwitchButton";
import { Skills } from "./Skills/index";
import { nextSkills, skills } from "../PersonalHomepageSite/skills";
import { Footer } from "./Footer";
import { Portfolio } from "./Portfolio";
import toolsIcon from "../../../images/toolsIcon.png"
import rocketIcon from "../../../images/rocketIcon.png"


export const PersonalHomepage = () => {
    return (
        <Wrapper>
            <ThemeSwitchButton />
            <BasicInformation />
            <Skills
                title={(
                    <>
                        My skillset includes <Icon src={toolsIcon} />
                    </>
                )}
                skills={skills}
            />
            <Skills
                title={(
                    <>
                        What I want to learn next <Icon src={rocketIcon} />
                    </>
                )}
                skills={nextSkills}
            />
            <Portfolio />
            <Footer />
        </Wrapper>
    );
}