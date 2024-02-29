import chrisBiolikPhoto from "./personal-homepage-photo-of-me.jpg";
import { PhotoOfMe, Wrapper, ThisIs, Name, Description } from "./styled";

export const BasicInformation = () => {
    return (
        <Wrapper>
            <PhotoOfMe src={chrisBiolikPhoto} alt="Krzysztof Biolik" />
            <div>
                <ThisIs>This is</ThisIs>
                <Name>Krzysiek Biolik</Name>
                <Description>👦💻 Tutaj będzie mój opis. Tutaj będzie mój opis. Tutaj będzie mój opis.
                Tutaj będzie mój opis. Tutaj będzie mój opis.
                </Description>
            </div>
        </Wrapper>
    );
}