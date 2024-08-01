import { Header, Paragraph, Wrapper } from "./styled"
import { ReactComponent as WarningIcon } from "./Danger.svg";
import { ButtonLink } from "../../../ButtonLink";
import { baseGitHubURL, username } from "../../../../../strings";


export const Error = () => {
    return (
        <Wrapper>
            <WarningIcon />
            <Header>Oooops! Something went&nbsp;wrong...</Header>
            <Paragraph>
                Sorry, failed to load GitHub&nbsp;projects.<br />
                You can check them directly&nbsp;on&nbsp;GitHub.
            </Paragraph>
            <ButtonLink href={`${baseGitHubURL}${username}`} target="_blank">Go to GitHub</ButtonLink>
        </Wrapper>
    )
}