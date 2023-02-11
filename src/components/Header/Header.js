import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <div style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size='3rem' /> <Span>Portfolio</Span>
        </div>
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
      <SocialIcons href='https://github.com/Esk3tit'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/khai-phan/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
      {/* DOWNLOAD RESUME ICON AND LINK */}
      {/* <SocialIcons href='https://www.linkedin.com/in/khai-phan/'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
