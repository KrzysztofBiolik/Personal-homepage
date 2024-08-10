import { email } from "../email";
import chrisBiolikPhoto from "../../../../images/personal-homepage-photo-of-me.jpg";
import { PhotoOfMe, Wrapper, ThisIs, Name, Description, ButtonIcon, StyledButtonLink } from "./styled";

export const BasicInformation = () => {
    return (
        <Wrapper>
            <PhotoOfMe src={chrisBiolikPhoto} alt="Krzysztof Biolik" />
            <div>
                <ThisIs>This is</ThisIs>
                <Name>Krzysiek Biolik</Name>
                <Description>👦💻 I'm passionate Frontend Developer in love with React, currently looking for first job opportunities. 
                </Description>
                <StyledButtonLink href={`mailto:${email}`} title={email}>
                    <ButtonIcon />
                    Hire me
                </StyledButtonLink>
            </div>
        </Wrapper>
    );
}