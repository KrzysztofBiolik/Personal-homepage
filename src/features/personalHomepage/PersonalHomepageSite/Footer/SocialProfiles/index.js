import { profilesData } from "./profileData";
import { List, Item, Link } from "./styled";


export const SocialProfiles = () => (
    <List>
        {profilesData.map(({ name, url, Icon }) => (
            <Item key={name}>
                <Link href={url} title={name} target="_blank" rel="noreferrer">
                    <Icon/>
                </Link>
            </Item>
        ))}
    </List>
);