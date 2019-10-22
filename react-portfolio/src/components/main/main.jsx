import React, { useReducer, useRef } from 'react';
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
    if (pageScroll && refInfomationPage.current.scrollTop === 0) {
      if (e.deltaY > 0 && window.scrollY < refInfomationPage.current.offsetTop) {
        dispatch({ type: 'SET_PAGESCROLL', pageScroll: false });
        window.scrollBy({ top: refInfomationPage.current.offsetTop, behavior: 'smooth' });

        setTimeout(() => {
          dispatch({ type: 'SET_PAGESCROLL', pageScroll: true });
        }, 1000);
      } 
      else if (e.deltaY < 0 && window.scrollY === refInfomationPage.current.offsetTop) {
        dispatch({ type: 'SET_PAGESCROLL', pageScroll: false });
        window.scroll({ top: 0, behavior: 'smooth' });

        setTimeout(() => {
          dispatch({ type: 'SET_PAGESCROLL', pageScroll: true });
        }, 1000);
      }
    }
  }


  return (
    <MainTag onWheel={onWheelScroll} ref={refMainPage}>
      <MainPage />
      <InfomationPage refInfo={refInfomationPage}/>
    </MainTag>
  )
};

export default Main;