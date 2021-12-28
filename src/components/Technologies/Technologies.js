import React from 'react';
import { DiFirebase, DiReact, DiZend,DiAndroid,DiApple } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
<Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the Web, Android, iOS and React Native development world.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experiece with <br />
            React.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
     

      <ListItem>
        <picture>
          <DiAndroid size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Android</ListTitle>
          <ListParagraph>
            Experience with <br />
            Android
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <picture>
          <DiApple size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>iOS</ListTitle>
          <ListParagraph>
            Experience with <br />
            iOS Development
          </ListParagraph>
        </ListContainer>
      </ListItem>


      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React Native</ListTitle>
          <ListParagraph>
            Experience with <br />
            React Native Development
          </ListParagraph>
        </ListContainer>
      </ListItem>


    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
