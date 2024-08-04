import { email } from "../email"
import { EmailLink, EmailWrapper, Icon, LetsTalk, Section, Text } from "./styled"
import { SocialProfiles } from "./SocialProfiles";
import FingerIcon from "../../../../images/fingersCrossedIcon.png"

export const Footer = () => (
    <Section>
        <LetsTalk>Let's Talk!</LetsTalk>
        <EmailWrapper>
            <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
        </EmailWrapper>
        <Text>Tutaj będzie mój opis. Tutaj będzie mój opis.
            Tutaj będzie mój opis. Tutaj będzie mój opis. Tutaj będzie mój opis.
            <Icon src={FingerIcon} />
        </Text>
        <SocialProfiles />
    </Section>
);

