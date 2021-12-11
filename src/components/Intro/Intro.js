import React from 'react';
import Typewriter from 'typewriter-effect'

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './IntroStyles';

const Intro = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
     
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Hi ,I am Sanskar Atrey <br /> Welcome To <br /> My Personal Portfolio')
            .callFunction(() => {
              console.log('String typed out!');
            }).start();
        }} />
       
      </SectionTitle>
      <SectionText>
  
      {/* <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Energetic and curiosity-driven Android, iOS and Full Stack Web developer. Experience in building, integrating, testing, and supporting mobile and web applications.')
            .callFunction(() => {
              console.log('String typed out!');
            }).start();
        }} */}
      {/* /> */}

      Energetic and curiosity-driven Android, iOS and Full Stack Web developer. Experience in building, integrating, testing, and supporting mobile and web applications.
      </SectionText>
    
      <Button onClick={()=>{window.location='/#about'}}>Learn More</Button>
    </LeftSection>
  </Section>
</>
);

export default Intro;