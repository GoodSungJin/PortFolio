import React from 'react';
import { Div } from './infomation-page-styled';

import SkillPage from './skill-page/skill-page.jsx';
import StrengthPage from './strength-page/strength-page.jsx';
import ProjectPage from './project-page/project-page.jsx'


const InfomationPage = ({ refInfomationPage }) => {
  return (
    <Div ref={refInfomationPage}>
      <SkillPage />
      <StrengthPage />
      <ProjectPage />
    </Div>
  )
};

export default InfomationPage;
