import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there,
        <br />
        I'm Nixon Kurian
      </SectionTitle>
      <SectionText>
        I'll help you develop your website, software and solve problems.
      </SectionText>
      <Button
        onClick={() => (window.location = "https://github.com/Scarface69420")}
      >
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
