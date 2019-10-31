import React, { useReducer, useRef, useEffect } from 'react';
import { MainTag } from './main-styled';

import MainPage from './main-page/main-page.jsx';
import InfomationPage from './infomation-page/infomation-page.jsx';




const Main = ({ refMainPage, refInfomationPage, onWheelScroll }) => {
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