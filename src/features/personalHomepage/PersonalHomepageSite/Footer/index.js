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
        <Text>I'm always open to new projects whenever I have the time. If you have a website, application, or any other digital initiative in mind and need some help to make your ideas come to life, feel free to contact me
            <Icon src={FingerIcon} />
        </Text>
        <SocialProfiles />
    </Section>
);

