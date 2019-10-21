import React, { useReducer, useRef} from 'react';

import MainPage from './main-page/main-page.jsx';
import InfomationPage from './infomation-page/infomation-page.jsx';

const SET_PAGESCROLL = 'SET_PAGESCROLL';

const initialState = {
  pageScroll: true,

}

const reducer = (state, action) => {
  switch(action.type) {
    case SET_PAGESCROLL:
      return {
        ...state,
        pageScroll: action.pageScroll
      };
  }
}

const Main = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { pageScroll } = state;
  const refInfomationPage = useRef()
  const refMainPage = useRef()


  const onWheelScroll = (e) => {
    console.log(window.scrollY, refInfomationPage.current.offsetTop)
    if (pageScroll && refInfomationPage.current.scrollTop === 0) {
      if (e.deltaY > 0 && window.scrollY < refInfomationPage.current.offsetTop) {
        dispatch({ type: SET_PAGESCROLL, pageScroll: false });
        refInfomationPage.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

        setTimeout(() => {
          dispatch({ type: SET_PAGESCROLL, pageScroll: true });
        }, 900);
      } else if (e.deltaY < 0 && window.scrollY === refInfomationPage.current.offsetTop) {
        dispatch({ type: SET_PAGESCROLL, pageScroll: false });
        refMainPage.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});

        setTimeout(() => {
          dispatch({ type: SET_PAGESCROLL, pageScroll: true });
        }, 900);
      }
    }
  }

  return (
    <main onWheel={onWheelScroll} ref={refMainPage}>
      {console.log('재랜더')}
      <MainPage />
      <InfomationPage refInfomationPage={refInfomationPage}/>
    </main>
  )
};

export default Main;