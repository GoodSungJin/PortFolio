import React from 'react';
import { SectionHeader, DivContain, H1HOME, Nav } from './header-styled';

const Header = () => {
  const scrollHome = (e) => {
    e.preventDefault();
    window.scroll({ top: 0, behavior: 'smooth' });
  };


  return (
    <SectionHeader>
      <DivContain>
        <H1HOME onClick={scrollHome}>
          <a href="#" className="a11y-hidden">최성진 포트폴리오</a>
        </H1HOME>
        <Nav>
          <ul>
            <li>HOME</li>
            <li>Skill</li>
            <li>Strength</li>
            <li>Project</li>
          </ul>
        </Nav>
      </DivContain>

    </SectionHeader>
  )
};

export default Header;