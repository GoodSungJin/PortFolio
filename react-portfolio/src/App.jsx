import React, { useReducer, useRef, useState, useEffect, useCallback } from 'react';
import './App.css';

import Main from './components/main/main';
import Header from './components/header/header';


const initialState = {
  pageScroll: true
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PAGESCROLL':
      return {
        ...state,
        pageScroll: action.pageScroll
      }
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { pageScroll } = state;
  const [scrollState, setscrollState] = useState();
  const refInfomationPage = useRef();
  const refMainPage = useRef();
  const refHeader = useRef();
  
  const onWheelScroll = (e) => {
    if (refInfomationPage.current.scrollTop !== 0) return;
    if (pageScroll) {
      if (e.deltaY > 0 && window.scrollY < refInfomationPage.current.offsetTop) {
        dispatch({ type: 'SET_PAGESCROLL', pageScroll: false });
        window.scrollBy({ top: refInfomationPage.current.offsetTop, behavior: 'smooth' });
        
        refHeader.current.style.color = '#1c1c1c';
        refHeader.current.style.backgroundColor = '#fff';
        refHeader.current.style.boxShadow = '0 1px 5px 0 rgba(0, 0, 0, 0.03)';

        setTimeout(() => {
          dispatch({ type: 'SET_PAGESCROLL', pageScroll: true });
          setscrollState('About me');

          if (refInfomationPage.current.style.overflowY) return;
          
          refInfomationPage.current.style.overflowY = "scroll";
          refInfomationPage.current.style.overflowX = "hidden";
        }, 600);
      } 
      else if (e.deltaY < 0 && window.scrollY === refInfomationPage.current.offsetTop) {
        dispatch({ type: 'SET_PAGESCROLL', pageScroll: false });
        window.scroll({ top: 0, behavior: 'smooth' });

        refHeader.current.style.color = '#fff';
        refHeader.current.style.backgroundColor = null;
        refHeader.current.style.boxShadow = null;

        setTimeout(() => {
          dispatch({ type: 'SET_PAGESCROLL', pageScroll: true });

          setscrollState('Home');
          refInfomationPage.current.scrollTop = 0;
        }, 600);
      }
    }
  };

  useEffect(() => {
    const plus = refInfomationPage.current.scrollTop + refInfomationPage.current.offsetTop;
    if (window.scrollY !== refInfomationPage.current.offsetTop) return;
    if(window.innerWidth < 1200) return;


    if (plus >= refInfomationPage.current.childNodes[0].offsetTop && plus < refInfomationPage.current.childNodes[2].offsetTop) {
      refHeader.current.style.color = '#1c1c1c';
      refHeader.current.style.backgroundColor = '#fff';
      refHeader.current.style.boxShadow = '0 1px 5px 0 rgba(0, 0, 0, 0.03)';
      return setscrollState('About me');
    }
    if (plus >= refInfomationPage.current.childNodes[2].offsetTop && plus < refInfomationPage.current.childNodes[3].offsetTop) {
      return setscrollState('Project');
    }
    if (plus >= refInfomationPage.current.childNodes[3].offsetTop) {
      return setscrollState('Contact');
    }
  }, [])


  const onScrollSpy = () => {
    const plus = refInfomationPage.current.scrollTop + refInfomationPage.current.offsetTop;
    if (window.scrollY !== refInfomationPage.current.offsetTop) return;

    if (plus >= refInfomationPage.current.childNodes[0].offsetTop && plus < refInfomationPage.current.childNodes[2].offsetTop) {
      return setscrollState('About me');
    }
    if (plus >= refInfomationPage.current.childNodes[2].offsetTop && plus < refInfomationPage.current.childNodes[3].offsetTop) {
      return setscrollState('Project');
    }
    if (plus >= refInfomationPage.current.childNodes[3].offsetTop) {
      return setscrollState('Contact');
    }
  };

  return (
    <>
      <Header refHeader={refHeader} refMainPage={refMainPage} refInfomationPage={refInfomationPage} scrollState={scrollState} setscrollState={setscrollState} />
      <Main refMainPage={refMainPage} refInfomationPage={refInfomationPage} onWheelScroll={onWheelScroll} onScrollSpy={onScrollSpy} />
    </>
  );
}

export default App;
