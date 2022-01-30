import React from 'react';
import { DiFirebase, DiPostgresql, DiReact, DiRuby, } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked on small-medium size personal/group projects with both front and backend technolgoies. 
    </SectionText>
    <List>
      <ListItem>
        <DiReact size='3rem'/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRuby size='3rem'/>
        {/* <DiPostgresql size='3rem'/> */}

        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br />
            Ruby on Rails and PostgreSQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
