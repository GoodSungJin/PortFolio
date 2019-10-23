import React, { useReducer, useRef, useEffect } from 'react';
import { MainTag } from './main-styled';

import MainPage from './main-page/main-page.jsx';
import InfomationPage from './infomation-page/infomation-page.jsx';

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


const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { pageScroll } = state;
  const refInfomationPage = useRef()
  const refMainPage = useRef()

  const onWheelScroll = (e) => {
    if (refInfomationPage.current.scrollTop !== 0) return;
    if (pageScroll) {
      if (e.deltaY > 0 && window.scrollY < refInfomationPage.current.offsetTop) {
        dispatch({ type: 'SET_PAGESCROLL', pageScroll: false });
        window.scrollBy({ top: refInfomationPage.current.offsetTop, behavior: 'smooth' });
        
        setTimeout(() => {
          dispatch({ type: 'SET_PAGESCROLL', pageScroll: true });

          if (refInfomationPage.current.style.overflowY) return;

          refInfomationPage.current.style.overflowY = "scroll";
          refInfomationPage.current.style.overflowX = "hidden";
          
        }, 600);
      } 
      else if (e.deltaY < 0 && window.scrollY === refInfomationPage.current.offsetTop) {
        dispatch({ type: 'SET_PAGESCROLL', pageScroll: false });
        window.scroll({ top: 0, behavior: 'smooth' });
        

        setTimeout(() => {
          dispatch({ type: 'SET_PAGESCROLL', pageScroll: true });
          refInfomationPage.current.scrollTop = 0;
        }, 600);
      }
    }
  }

  useEffect(() => {
    if (window.scrollY >= refInfomationPage.current.offsetTop) {
      refInfomationPage.current.style.overflowY = "scroll";
      refInfomationPage.current.style.overflowX = "hidden";
    }
  }, [])


  return (
    <MainTag onWheel={onWheelScroll} ref={refMainPage}>
      <MainPage />
      <InfomationPage refInfo={refInfomationPage}/>
    </MainTag>
  )
};

export default Main;