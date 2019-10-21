import React from 'react';
import { H3Infomation } from '../../../../styles/css/shared-styled';
import { SectionProject, DivContain, Figcaption, Figure, Img, SpanTime, DivFlex } from './project-page-styled';


const ProjectPage = () => {
  const project = [
    {
      name: '메가박스 클론 프로젝트',
      date: '2019.07 ~ 2019.08'
    },
    {
      name: '개인 포트폴리오',
      date: '2019.10 ~ 2019.10'
    },
    {
      name: '학생관리 웹앱',
      date: '2019.06 ~ 2019.06'
    },
    {
      name: '배민져스',
      date: '2019.05 ~ 2019.05'
    }
  ];

  return (
    <SectionProject>
      <h2 className="a11y-hidden">프로젝트 소개</h2>
      <DivContain>
        <H3Infomation>Project</H3Infomation>
        <DivFlex>
          {
            project.map((item, idx) => {
              return (
                <Figure key={idx + item.name}>
                  <Img />
                  <Figcaption>
                    {item.name}
                    <SpanTime>{item.date}</SpanTime>
                  </Figcaption>
                </Figure>
              )
            })
          }
        </DivFlex>
      </DivContain>
    </SectionProject>
  )
};

export default ProjectPage;