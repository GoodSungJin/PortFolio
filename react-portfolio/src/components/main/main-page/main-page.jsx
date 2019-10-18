import React from 'react';
import { SectionMain, P, DivContain } from './main-page-styled';

const MainPage = () => {
  return (
    <SectionMain>
      <h2 className="a11y-hidden">메인 페이지</h2>
      <DivContain>
        <P>
          <span><b>상상을</b> 구현하는</span> 
          <span>프론트엔드 <b>개발자</b></span>
        </P>
      </DivContain>
    </SectionMain>
  )
};

export default MainPage;