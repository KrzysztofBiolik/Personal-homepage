import {Section, List, Item, StyleHeader} from "./styled";

export const Skills = ({ title, skills }) => (
    <Section>
        <StyleHeader>{title}</StyleHeader>
        <List>
            {skills.map(skill => (
                <Item key={skill}>
                    {skill}
                </Item>
            ))}
        </List>
    </Section>
);