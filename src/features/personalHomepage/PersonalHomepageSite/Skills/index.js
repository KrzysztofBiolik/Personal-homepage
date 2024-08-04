import { Section, List, Item, StyleHeader, SkillDotIcon } from "./styled";

export const Skills = ({ title, skills }) => (
    <Section>
        <StyleHeader>{title}</StyleHeader>
        <List>
            {skills.map(skill => (
                <Item key={skill}>
                    <SkillDotIcon />
                    {skill}
                </Item>
            ))}
        </List>
    </Section>
);