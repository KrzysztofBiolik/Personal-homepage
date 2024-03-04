import { email } from "../email"
import { Wrapper } from "../styled"
import { EmailLink, LetsTalk, Text } from "./styled"


export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's Talk!</LetsTalk>
        <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
        <Text>Tutaj będzie mój opis. Tutaj będzie mój opis.
            Tutaj będzie mój opis. Tutaj będzie mój opis. Tutaj będzie mój opis.
        </Text>
    </Wrapper>
);

