import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there 👋 <br/>
      </SectionTitle>
      <SectionText>
        I'm a software engineer with a particular interest in frontend development
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Learn more</Button>
    </LeftSection>
  </Section>
);

export default Hero;