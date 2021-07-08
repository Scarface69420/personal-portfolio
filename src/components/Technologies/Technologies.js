import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiCode,
  DiPython,
  DiJavascript,
  DiDart,
  DiJava,
} from "react-icons/di";
import {
  SiCplusplus,
  SiJavascript,
  SiPython,
  SiJava,
  SiDart,
} from "react-icons/si";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world. From
      Back-end to Design.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3.5rem' />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size='3.5rem' />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node.js and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiCode size='3.5rem' />
        <ListContainer>
          <ListTitle>Programming Language</ListTitle>
          <ListParagraph>
            &nbsp;
            <SiPython size='2.2rem' /> &nbsp;
            <SiJavascript size='2.2rem' /> &nbsp;
            <SiJava size='2.2rem' /> &nbsp;
            <SiDart size='2.2rem' /> &nbsp;
            <SiCplusplus size='2.2rem' />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size='3.5rem' />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            Tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
