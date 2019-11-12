import React, { useEffect, useState } from 'react';
import { SectionHeader, DivContain, H1HOME, Nav } from './header-styled';

const Header = ({ refHeader, refMainPage, refInfomationPage, scrollState, setscrollState }) => {
  const [navState, setnavState] = useState(['Home', 'About me', 'Project', 'Contact']);


  useEffect(() => {
    if(window.innerWidth < 1200) return;
    setscrollState('Home');
  }, [])

  const scrollHome = (e) => {
    e.preventDefault();

    if(window.innerWidth < 1200) {
      refMainPage.current.scrollIntoView({ block: "start", behavior: 'smooth' });
      return;
    }
    refInfomationPage.current.scrollTop = 0;
    refMainPage.current.scrollIntoView({ block: "start", behavior: 'smooth' });
    refHeader.current.style.color = '#fff';
    refHeader.current.style.backgroundColor = null;
    refHeader.current.style.boxShadow = null;
    setTimeout(() => {
      setscrollState('Home');
    }, 600);
  };

  const moveElem = (item) => {
    if (item === 'Home') {
      if(window.innerWidth < 1200) {
        refMainPage.current.scrollIntoView({ block: "start", behavior: 'smooth' });
        return;
      }
      refInfomationPage.current.scrollTop = 0;
      refMainPage.current.scrollIntoView({ block: "start", behavior: 'smooth' });
      refHeader.current.style.color = '#fff';
      refHeader.current.style.backgroundColor = null;
      refHeader.current.style.boxShadow = null;
      setTimeout(() => {
        setscrollState('Home');
      }, 600);
      return;
    }
    if (item === 'About me') {
      if(window.innerWidth < 1200) {
        refInfomationPage.current.childNodes[0].scrollIntoView({ block: "start", behavior: 'smooth' });
        return;
      }
      refInfomationPage.current.childNodes[0].scrollIntoView({ block: "start", behavior: 'smooth' });
      setscrollState('About me');
      refHeader.current.style.color = '#1c1c1c';
      refHeader.current.style.backgroundColor = '#fff';
      refHeader.current.style.boxShadow = '0 1px 5px 0 rgba(0, 0, 0, 0.03)';
      return;
    }
    if (item === 'Project') {
      if(window.innerWidth < 1200) {
        refInfomationPage.current.childNodes[2].scrollIntoView({ block: "start", behavior: 'smooth' });
        return;
      }
      setscrollState('Project');
      refInfomationPage.current.childNodes[2].scrollIntoView({ block: "end", behavior: 'smooth' });
      refHeader.current.style.color = '#1c1c1c';
      refHeader.current.style.backgroundColor = '#fff';
      refHeader.current.style.boxShadow = '0 1px 5px 0 rgba(0, 0, 0, 0.03)';
      return;
    }
    if (item === 'Contact') {
      if(window.innerWidth < 1200) {
        refInfomationPage.current.childNodes[3].scrollIntoView({ block: "start", behavior: 'smooth' });
        return;
      }
      setscrollState('Contact');
      refInfomationPage.current.childNodes[3].scrollIntoView({ block: "end", behavior: 'smooth' });
      refHeader.current.style.color = '#1c1c1c';
      refHeader.current.style.backgroundColor = '#fff';
      refHeader.current.style.boxShadow = '0 1px 5px 0 rgba(0, 0, 0, 0.03)';
      return;
    }
  };


  return (
    <SectionHeader ref={refHeader}>
      <DivContain>
        <H1HOME onClick={scrollHome}>
          <a href="#" className="a11y-hidden">최성진 포트폴리오</a>
        </H1HOME>
        <Nav>
          <ul>
            {navState.map((item, idx) => {
              return (
                <li onClick={() => moveElem(item)}><span className={scrollState === item ? 'active' : null}>{item}</span></li>
              )
            })}
          </ul>
        </Nav>
      </DivContain>

    </SectionHeader>
  )
};

export default Header;