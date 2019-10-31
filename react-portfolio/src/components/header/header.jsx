import React, { useEffect, useState } from 'react';
import { SectionHeader, DivContain, H1HOME, Nav } from './header-styled';

const Header = ({ refMainPage, refInfomationPage }) => {
  const [navState, setnavState] = useState(['Home', 'Skill', 'Strength', 'Project']);

  const scrollHome = (e) => {
    e.preventDefault();
    refInfomationPage.current.scrollTop = 0;
    refMainPage.current.scrollIntoView({ block: "start", behavior: 'smooth' });
  };
  // b.scrollIntoView({ behavior: 'smooth' })
  const moveElem = (item) => {
    if (item === 'Home') {
      refInfomationPage.current.scrollTop = 0;
      refMainPage.current.scrollIntoView({ block: "start", behavior: 'smooth' });
      return;
    }
    if (item === 'Skill') {
      refInfomationPage.current.childNodes[0].scrollIntoView({ block: "start", behavior: 'smooth' });
      return;
    }
    if (item === 'Strength') {
      // console.log(refMainPage.current.childNodes)
      refInfomationPage.current.childNodes[1].scrollIntoView({ block: "start", behavior: 'smooth' });
      return;
    }
    if (item === 'Project') {
      // console.log(refMainPage.current.childNodes)
      refInfomationPage.current.childNodes[2].scrollIntoView({ block: "end", behavior: 'smooth' });
      return;
    }

  };

  return (
    <SectionHeader>
      <DivContain>
        <H1HOME onClick={scrollHome}>
          <a href="#" className="a11y-hidden">최성진 포트폴리오</a>
        </H1HOME>
        <Nav>
          <ul>
            {navState.map((item, idx) => {
              return (
                <li onClick={() => moveElem(item)}>{item}</li>
              )
            })}
          </ul>
        </Nav>
      </DivContain>

    </SectionHeader>
  )
};

export default Header;