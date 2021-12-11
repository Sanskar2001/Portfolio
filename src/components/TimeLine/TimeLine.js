import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { ProfileImg,Img } from '../Projects/ProjectsStyles';



const Timeline = () => {
 

  return (
   
    



    <Section id="about">
     
    
    
      <SectionTitle>About Me</SectionTitle>
      
      <ProfileImg src='/images/dp.png'/>
      <SectionText>
      I am currently pursuing B.Tech from Jamia Millia Islamia.
      I am passionate about coding and keenly interested in mobile and web development. 
      </SectionText>
     

      <SectionDivider />

    
    </Section>
   
  );
};

export default Timeline;
