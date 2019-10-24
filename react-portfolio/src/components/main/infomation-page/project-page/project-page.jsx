import React from 'react';
import { H3Infomation } from '../../../../styles/css/shared-styled';
import { SectionProject, DivContain, Figcaption, Figure, Img, SpanTime, DivFlex } from './project-page-styled';

import portfolio from '../../../../styles/image/project/pofol-small.jpg'
import megabox from '../../../../styles/image/project/megabox.jpg'
import fastapp from '../../../../styles/image/project/fast-me.jpg'
import baemin from '../../../../styles/image/project/baemin-small.jpg'

const ProjectPage = () => {
  const project = [
    {
      name: '메가박스 클론 프로젝트',
      date: '2019.07 ~ 2019.08',
      img: megabox
    },
    {
      name: '개인 포트폴리오',
      date: '2019.10 ~ 2019.10',
      img: portfolio
    },
    {
      name: '학생관리 웹앱',
      date: '2019.06 ~ 2019.06',
      img: fastapp
    },
    {
      name: '배민져스',
      date: '2019.05 ~ 2019.05',
      img: baemin
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
              <>
                <Figure key={idx + item.name} className="btn btn-light" data-toggle="modal" 
                data-target=".bd-example-modal-xl">
                  <Img img={item.img} />
                  <Figcaption>
                    {item.name}
                    <SpanTime>{item.date}</SpanTime>
                  </Figcaption>
                </Figure>
                <div key={idx + item.name + 1} className="modal fade bd-example-modal-xl"
                tabIndex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
                  <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h4 className="modal-title h4" id="myExtraLargeModalLabel">메가박스 클론 프로젝트</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">
                                                                                                                                                                                                        
                        <h5>개요</h5>
                        <p>패스트캠퍼스 파이널 프로젝트로 메가박스 클라이언트 사이드 클론 프로젝트를 진행했습니다. 프로젝트의 팀장으로 전체 기획, 설계, 일정 수립과 조율을 담당하고 API설계 등 백엔드와의 협업 및 커뮤니케이션을 주도했습니다.</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </>
              )
            })
          }
        </DivFlex>
      </DivContain>
    </SectionProject>
  )
};

export default ProjectPage;