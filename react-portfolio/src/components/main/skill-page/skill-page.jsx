import React from 'react';
import { H3Infomation } from '../../../styles/css/shared-styled';
import { DivContain, SectionSkill, P, Dl, Dt } from './skill-page-styled';
import img from '../../../styles/image/react.svg'

const SkillPage = () => {
  const skillState = [
    {
      name: "HTML",
      value: "HTML5의 새로운 태그를 활용할 수 있고, Symentic Markup을 이해하여 웹 접근성을 고려한 개발을 지향합니다.",
      proficiency: 60,
      img
    },
    {
      name: "CSS/Sass",
      value: "Box-Model을 이해하고, 다양한 Layout 기법을 활용하여 원하는 디자인을 적용할 수 있습니다. 또, 미디어쿼리를 활용해 각기 다른 디바이스에 스타일을 적용할 수 있습니다.",
      proficiency: 65,
      img
    },
    {
      name: "JavaScript",
      value: "프로토 타입의 상속과 체인, 스코프, 호이스팅, 클로저 등 자바스크립트의 핵심 개념을 이해하고 있으며, ES6+ 문법을 활용하여 Modern JavaScript 개발을 지향하고 있습니다.",
      proficiency: 80,
      img
    },
    {
      name: "TypeScript",
      value: "TypeScript의 정정타입을 사용하여 컴파일 단계에서 오류를 포착할 수 있다는 것을 이해하며, Interface, Generic 등을 활용할 수 있습니다.",
      proficiency: 65,
      img
    },
    {
      name: "Angular",
      value: "Angular의 Component, Directive, Pipe, Lifecycle Hooks 등을 이해하고 활용할 수 있으며,  RxJS의 Observerble 객체를 이용한 비동기 통신 방법을 이해하고 활용할 수 있습니다.",
      proficiency: 75,
      img
    },
    {
      name: "React",
      value: "현재 React 스터디를 진행하여 Class Component와 Hooks를 학습하고, 이를 활용해 TodoList, 숫자야구 등 간단한 게임을 구현할 수 있습니다.",
      proficiency: 35,
      img
    },
  ] 

  return (
    <SectionSkill>
      <h2 className="a11y-hidden">기술 소개</h2>
      <P>안녕하세요, <strong>코딩을 즐기는 개발자</strong> 최성진입니다.</P>
      <DivContain>
        <H3Infomation>Skill</H3Infomation>
        <Dl>
          {skillState.map((item, idx) => {
            return (
              <div key={idx + item}>
                <Dt proficiency={item.proficiency}>
                  <span>{item.name}</span>
                  <span>{item.proficiency}%</span>
                </Dt>
                <dl>{item.value}</dl>
              </div>
            )
          })}
        </Dl>
      </DivContain>
    </SectionSkill>
  )
};

export default SkillPage;