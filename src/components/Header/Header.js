import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { MdCode } from "react-icons/md";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            marginBottom: "20px",
          }}
        >
          <MdCode size='3rem' /> &nbsp; <Span>Nix</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/Scarface69420'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/nixon-kurian-5438b320b/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.instagram.com/fizz_nix/'>
        <FaInstagram size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://twitter.com/KurianNixon'>
        <AiOutlineTwitter size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
