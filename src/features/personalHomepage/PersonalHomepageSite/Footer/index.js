import { email } from "../email"
import { Wrapper } from "../styled"
import { EmailLink, EmailWrapper, LetsTalk, Text } from "./styled"
import { SocialProfiles } from "./SocialProfiles";

export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's Talk!</LetsTalk>
        <EmailWrapper>
            <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
        </EmailWrapper>
        <Text>Tutaj będzie mój opis. Tutaj będzie mój opis.
            Tutaj będzie mój opis. Tutaj będzie mój opis. Tutaj będzie mój opis.
        </Text>
        <SocialProfiles />
    </Wrapper>
);

