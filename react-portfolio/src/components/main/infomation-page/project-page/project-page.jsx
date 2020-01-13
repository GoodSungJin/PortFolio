import React, { useEffect, useState, memo } from 'react';
import { H3Project, SectionProject, DivContain, Figcaption, Figure, Img, SpanTime, DivFlex } from './project-page-styled';
import { ButtonToolbar, Modal } from 'react-bootstrap';
import './project-page.scss';

import portfolio from '../../../../styles/image/project/pofol-small.jpg'
import megabox from '../../../../styles/image/project/megabox.jpg'
import fastappMain from '../../../../styles/image/project/fast.jpg'
import fastappImg from '../../../../styles/image/project/fast-me.jpg'
import statusImg from '../../../../styles/image/project/status.jpg'
import baemin from '../../../../styles/image/project/baemin-small.jpg'
import loginImg from '../../../../styles/image/project/megabox-login.jpg';
import reserveImg from '../../../../styles/image/project/megabox-reserve.jpg';
import teamImg from '../../../../styles/image/project/team.jpg';
import mainPortFolioImg from '../../../../styles/image/project/portfolioMain.jpg';
import portFolioHeaderImg from '../../../../styles/image/project/portFolioHeader.jpg';
import todoListImg from '../../../../styles/image/project/todoList.jpg';

const ProjectPage = () => {
  const project = [
    {
      name: '메가박스 클론 프로젝트',
      date: '2019.07 ~ 2019.08',
      img: megabox,
      intro: '패스트캠퍼스 파이널 프로젝트로 메가박스 클라이언트 사이드 클론 프로젝트를 진행했습니다. 프로젝트의 팀장으로 전체기획, 설계, 일정수립과 조율을 담당하고 API설계 등 백엔드와의 협업 및 커뮤니케이션을 주도했습니다.',
      mySkill: 'Angular, TypeScript, Rxjs, HTML, CSS/Sass, JavaScript, ES6+, GitHub, Zenhub, Slack, Notion, ReDoc(API문서), REST API',
      team: '프론트엔드 4명, 백엔드 3명, IOS 2명',
      view: [
        {
          name: 'Github',
          link: 'https://github.com/final-project-megabox/frontend'
        },
        {
          name: 'Site',
          link: 'http://www.megabox.website/home'
        },
        {
          name: 'YouTube',
          link: 'https://youtu.be/GtaJe3A6oCk'
        },
      ],
      inner: [
        {
          img : loginImg,
          name: '로그인',
          ddList: [
            {
              subName: '아이디 저장',
              value: 'Token 유효성 검사를 마치고 유효할 경우 로컬 스토리지에 아이디를 저장하여 기능을 구현했습니다.',
            },
            {
              subName: '로그인 모달',
              value: '정규표현식을 사용해 유효성 검사를 진행하고 서버와 통신 후 유효한 Token이 유효할 경우 로컬스토리지에 Token을 저장하여 로그인이 필요한 페이지의 Guard를 통과할 수 있도록 구현했습니다.',
            }
          ]
        },
        {
          img : reserveImg,
          name: '예매 페이지',
          ddList: [
            {
              subName: '캘린더',
              value: '캘린더 로직을 직접 구현하고, 백엔드에서 받아온 예매 가능한 상영 날짜를 받아와 예매 가능한 날을 보여주었습니다. 캘린더와 예매 메인 페이지 캐러셀과의 상태 공유 및 연동이 필요 했기에 라이브러리를 사용하는 것보다 직접 만드는 것이 시간적으로 효율적이라 판단 돼 직접 구현했습니다. ',
              link: 'https://hoy.kr/gqaxo'
            },
            {
              subName: '예매 메인 페이지',
              value: '선택한 영화, 날짜, 상영관을 삭제 할 수 있고, 조건에 맞지 않을 경우 선택 가능한 모달창을 열 수 있고, 영화, 날짜, 상영관이 조건에 맞게 선택될 시 서버와의 통신을 통해 영화 목록을 받아오도록 구현했습니다.',
            },
            {
              subName: '좌석 선택 페이지',
              value: '인원 수에 맞게 좌석을 선택할 수 있는 로직을 구현하고, 이미 선택 된 좌석을 비활성화하는 등 조건에 맞을 경우 서버와 통신이 가능하게 구현했습니다.',
            }
          ]
        },
        {
          img : teamImg,
          name: '프론트엔드 팀장',
          ddList: [
            {
              subName: 'Module 분리',
              value: '메인 페이지 로드 시 현재 페이지에 필요없는 컴포넌트를 로드하지 않도록 각 Component 별로 Module 을 분리했습니다.',
            },
            {
              subName: 'Router',
              value: ' Reload 없는 페이지 이동 기능을 구현했습니다.',
            },
            {
              subName: 'Guard',
              value: '로그인이 필요한 페이지에 접근할 경우 로그인 페이지로 이동하게 구현했습니다.',
            }
          ]
        },
      ]
    },
    {
      name: '개인 포트폴리오',
      date: '2019.10.15 ~ 2019.10.20',
      img: portfolio,
      intro: 'React 스터디를 진행하고 만든 첫 React 프로젝트로, Styled Component를 처음 사용해 본 반응형 프로젝트입니다. Hooks를 기반으로 useReducer, useEffect, useRef 를 사용한 간단한 개인 포트폴리오 사이트입니다.',
      mySkill: 'React, Styled Component, HTML, CSS, JavsScript, Bootstrap, GitHub Pages, Zeplin',
      team: '프론트엔드 1명, 디자이너 1명',
      view: [
        {
          name: 'Github',
          link: 'https://github.com/GoodSungJin/PortFolio'
        },
        {
          name: 'Github Pages',
          link: 'https://goodsungjin.github.io/PortFolio/'
        },
      ],
      inner: [
        {
          img : mainPortFolioImg,
          name: '메인 페이지',
          ddList: [
            {
              subName: 'OnePageScroll',
              value: '첫 메인 페이지에서 scroll 할 경우 다음 페이지로 이동하게 구현했습니다. (메인 페이지만 적용)',
            },
            {
              subName: 'Styled Component',
              value: 'MediaQuery를 사용하여 SmartPhone, Tablet, DeskTopp 총 3가지 디바이스에서 사용할 수 있도록 구현했습니다.',
            },
            {
              subName: '반응형 페이지',
              value: 'Sytled Component의 props를 이용하여 상태 값을 style 에 바인딩에 사용했습니다.',
            }
          ]
        },
        {
          img : portFolioHeaderImg,
          name: '헤더',
          ddList: [
            {
              subName: 'Spy Scroll',
              value: '스크롤의 해당 영역에 맞게 Nav Bar에 표시 해줍니다.',
            },
            {
              subName: 'Click Scroll',
              value: 'Nav Bar 클릭 시 해당 영역으로 Scroll되게 구현했습니다.',
            }
          ]
        }
      ]
    },
    {
      name: '학생관리 웹앱',
      date: '2019.06.28 ~ 2019.06.28',
      img: fastappMain,
      intro: '패스트캠퍼스 해커톤으로 9시간 내에 주제를 정하고 역할을 분담하여, 프로젝트를 진행했습니다. 예정돼 있던 백엔드와의 협업이 불가하여 로컬 서버를 통해 JSON형식의 데이터 통신을 사용했습니다. 15팀 중 최고의 유용함 상을 수상했습니다.',
      mySkill: 'Angular, TypeScript, HTML, CSS/Sass, Github, Slack',
      team: '프론트엔드 3명',
      view: [
        {
          name: 'Github',
          link: 'https://github.com/GoodSungJin/Fastcampus-Student-Managing'
        },
        {
          name: 'DevPost',
          link: 'https://devpost.com/software/iwam'
        },
      ],
      inner: [
        {
          img : statusImg,
          name: 'JSON',
          ddList: [
            {
              subName: '상태 구조 설계',
              value: '학생의 개인 정보와, 출결 정보를 저장하기 위해 JSON 형태의 데이터 구조를 설계했습니다.',
            }
          ]
        },
        {
          img : fastappImg,
          name: '출석 체크 페이지',
          ddList: [
            {
              subName: '날짜 생성',
              value: '해당 달에 맞게 동적으로 일자 별 체크박스를 생성했습니다.',
            },
            {
              subName: '학생 정보',
              value: '학생 수와 출석정보를 받아와 생성 된 날짜에 정보를 바인딩했습니다.',
            }
          ]
        }
      ]
    },
    {
      name: '배민져스',
      date: '2019.05.24 ~ 2019.05.24',
      img: baemin,
      intro: 'JavaScript 를 이용한 첫 해커톤으로 HTML, CSS를 대신해 JavaScript 만을 이용해 프로젝트를 진행했습니다. 라이브러리를 사용하지 않고 배달의 민족 OnePageScroll 기능 구현을 목표로 했습니다.',
      mySkill: 'HTML, CSS, JavaScript, Jquery, Bootstrap',
      team: '프론트엔드 2명',
      view: [
        {
          name: 'Github',
          link: 'https://github.com/GoodSungJin/project-baemingers/tree/master'
        },
        {
          name: 'YouTube',
          link: 'https://youtu.be/-29o0H1IyxM'
        },
      ],
      inner: [
        {
          img : baemin,
          name: '메인 페이지',
          ddList: [
            {
              subName: 'Animation',
              value: 'JavaScript를 사용하여 영웅과 로고 등장을 구현했습니다.',
            },
            {
              subName: 'Click ',
              value: '영웅 클릭 시 해당 영웅을 소개하는 페이지로 이동할 수 있도록 구현했습니다.',
            }
          ]
        }
      ]
    },
    {
      name: 'Todo List',
      date: '2019.11.01 ~ 2019.11.20',
      img: todoListImg,
      intro: 'React 스터디를 진행하면서 만든 프로젝트로 기본적인 CRUD를 구현하고 각 기능을 구분해 version 1 ~ 5까지 Class Component와 Hooks로 구현했습니다.',
      mySkill: 'React, Redux, React-Redux, Styled Components, HTML, CSS, JavaScript',
      team: '프론트엔드 1명',
      view: [
        {
          name: 'Github',
          link: 'https://github.com/GoodSungJin/react-todolist'
        }
      ],
      inner: [
        {
          img : todoListImg,
          name: 'Todo List',
          ddList: [
            {
              subName: 'V1: React Components',
              value: 'Class Componenet의 setState와, Hooks의 useState로 각각 구현했습니다.',
            },
            {
              subName: 'V2: Componenet 분리',
              value: 'Component를 각 기능에 맞게 분리하여 함수를 관리했습니다.',
            },
            {
              subName: 'V3: Context API',
              value: 'Context API를 사용해 상태를 관리했습니다.',
            },
            {
              subName: 'V4: TypeScript',
              value: 'TypeScript를 적용하고, interface와 type등을 사용하여 상태를 보다 안전하게 관리했습니다.',
            },
            {
              subName: 'V5: Redux',
              value: 'Redux의 Action, Dispatch, Reducer등을 이해하여 상태를 관리하고, 보다 편리한 상태관리를 위해 Custom Hooks를 만들어 사용했습니다.',
            }
          ]
        }
      ]
    }
  ];

  const [modal0Show, setModal0Show] = useState(false);
  const [modal1Show, setModal1Show] = useState(false);
  const [modal2Show, setModal2Show] = useState(false);
  const [modal3Show, setModal3Show] = useState(false);
  const [modal4Show, setModal4Show] = useState(false);
  const [id, setId] = useState();

  useEffect(() => {
    window.onpopstate = window.history.onpushstate = function(e) {
      if(window.location.href.split('/').pop().indexOf('modal') === -1) {
        eval(`setModal${id}Show`)(false);
      }
    }
  }, [id])

  const modalToggle = (id, value) => {
    switch(id) {
      case 0:
        setModal0Show(value);

        if(window.innerWidth > 1000) return;
        window.history.pushState({}, 'modal', '/modal');
        setId(id);
        return;
      case 1:
        setModal1Show(value)

        if(window.innerWidth > 1000) return;
        window.history.pushState({}, 'modal', '/modal');
        setId(id);
        return;
      case 2:
        setModal2Show(value);

        if(window.innerWidth > 1000) return;
        window.history.pushState({}, 'modal', '/modal');
        setId(id);
        return;
      case 3:
        setModal3Show(value);

        if(window.innerWidth > 1000) return;
        window.history.pushState({}, 'modal', '/modal');
        setId(id);
        return;
      case 4:
        setModal4Show(value);

        if(window.innerWidth > 1000) return;
        window.history.pushState({}, 'modal', '/modal');
        setId(id);
        return;
    };
  };

  const modalSelector = (value) => {
    return eval(`modal${value}Show`)
  };

  const historyBack = () => {
    window.history.back();
  }

  return (
    <SectionProject>
      <h2 className="a11y-hidden">프로젝트 소개</h2>
      <DivContain>
        <H3Project>Project</H3Project>
        <DivFlex>
          {project.map((item, idx) => {
            return (
              <ButtonToolbar>
                <Figure key={idx + item.name} onClick={() => modalToggle(idx, true)} >
                  <div className="wrapper-img">
                    <Img img={item.img} />
                  </div>
                  <Figcaption>
                    {item.name}
                    <SpanTime>{item.date}</SpanTime>
                  </Figcaption>
                </Figure>

                <Modal size="xl" show={modalSelector(idx)} aria-labelledby={'a' + idx}
                onHide={() => modalToggle(idx, false)}>
                  <Modal.Header closeButton>
                    <Modal.Title id={'a' + idx}>
                      <div>
                        <h4>{item.name}</h4>
                        <span>{item.date}</span>
                      </div>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <div className="info-contain">
                      <div className="intro">
                        <p>{item.intro}</p>
                      </div>
                      <div className="sub-intro">
                        <div>
                          <h5>참여 인원</h5>
                          <p>{item.team}</p>
                        </div>
                        <div>
                          <h5>사용 기술</h5>
                          <p>{item.mySkill}</p>
                        </div>
                        <div>
                          <h5>바로 가기</h5>
                          <p>
                            {item.view.map(item => {
                              return (
                                <a href={item.link}>
                                  {item.name}
                                </a>
                              )
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <ul>
                        {item.inner.map((item, idx) => {
                          return (
                            <li key={item.name + idx} className="project-inner-list">
                              <img src={item.img} alt={item.name + '이미지'} className="inner-img" />
                              <div>
                                <h6>{item.name}</h6>
                                <dl>
                                  {item.ddList.map((item, idx) => {
                                    return (
                                      <>
                                      <dt key={item.subName + idx}>{item.subName}</dt>
                                      <dd key={item.subName + idx + 1}>{item.value}
                                        { item.link ? <a href={item.link}> 발표자료 보기</a> : null }
                                      </dd>
                                      </>
                                    )
                                  })}
                                </dl>
                              </div>
                            </li>
                          )
                          })}
                        </ul>
                      </div>
                    </Modal.Body>
                </Modal>
              </ButtonToolbar>
            )
          })}
        </DivFlex>
      </DivContain>
    </SectionProject>
  )
};

export default memo(ProjectPage);