import React from 'react';
import { H3Infomation } from '../../../../styles/css/shared-styled';
import { DotIcon, DivContain, SectionSkill, P, Dl, DivInDl, Dt } from './skill-page-styled';

import logoHtml from '../../../../styles/image/skill-logo/html.svg'
import logoCss from '../../../../styles/image/skill-logo/css.svg'
import logoJavaScript from '../../../../styles/image/skill-logo/javascript.svg'
import logoAngular from '../../../../styles/image/skill-logo/angular.svg'
import logoReact from '../../../../styles/image/skill-logo/react.svg'
import logoTypeScript from '../../../../styles/image/skill-logo/typescript.svg'
import logoGithub from '../../../../styles/image/skill-logo/github.svg'
import logoStyled from '../../../../styles/image/skill-logo/styeld.png'
import bit8 from '../../../../styles/image/sungjin8bit.svg';

const SkillPage = () => {
  const skillState = [
    {
      name: "HTML",
      value: "HTML5의 새로운 태그를 활용할 수 있고, Semantic Markup을 이해하여 웹 접근성을 고려한 개발을 지향합니다.",
      proficiency: 65,
      img: logoHtml,
      color: '#F1652A'
    },
    {
      name: "CSS/Sass",
      value: "Box-Model을 이해하고, 다양한 Layout 기법을 활용하여 원하는 디자인을 적용할 수 있습니다. 또, 미디어쿼리를 활용해 각기 다른 디바이스에 스타일을 적용할 수 있습니다.",
      proficiency: 65,
      img: logoCss,
      color: '#2A99D1'
    },
    {
      name: "JavaScript",
      value: "프로토 타입의 상속과 체인, 스코프, 호이스팅, 클로저 등 자바스크립트의 핵심 개념을 이해하고 있으며, ES6+ 문법을 활용하여 Modern JavaScript 개발을 지향하고 있습니다.",
      proficiency: 85,
      img: logoJavaScript,
      color: '#FDD83C'
    },
    {
      name: "TypeScript",
      value: "TypeScript의 정정타입을 사용하여 컴파일 단계에서 오류를 포착할 수 있다는 것을 이해하며, Interface, Generic 등을 활용할 수 있습니다.",
      proficiency: 65,
      img: logoTypeScript,
      color: '#007ACC'
    },
    {
      name: "Angular",
      value: "Angular의 Component, Directive, Pipe, Lifecycle Hooks 등을 이해하고 활용할 수 있으며,  RxJS의 Observerble 객체를 이용한 비동기 통신 방법을 이해하고 활용할 수 있습니다.",
      proficiency: 75,
      img: logoAngular,
      color: '#B52E31'
    },
    {
      name: "React / Redux",
      value: "Class Component와 Hooks를 활용해 포트폴리오 사이트, TodoList, 숫자야구 등 간단한 게임을 구현할 수 있으며, Redux의 Ducks 패턴을 이용해 상태관리를 할 수 있습니다.",
      proficiency: 55,
      img: logoReact,
      color: '#53C1DE'
    },
    {
      name: "Styled Components",
      value: "Styled Components의 props를 사용하여 style을 적용할 수 있고, css의 기능과 sass의 중첩문을 구현할 수 있습니다.",
      proficiency: 65,
      img: logoStyled,
      color: '#D571AE'
    },
    {
      name: "Git/Github",
      value: "Organization을 이용해 프로젝트를 진행한 경험이 있고, git flow를 사용해 branch를 관리할 수 있습니다.",
      proficiency: 75,
      img: logoGithub,
      color: '#000'
    },
  ] 

  return (
    <SectionSkill>
      <h2 className="a11y-hidden">기술 소개</h2>
      <DotIcon dot={bit8}></DotIcon>
      <P>안녕하세요, <strong>코딩을 즐기는 개발자</strong> 최성진입니다.</P>
      <DivContain>
        <H3Infomation>Skill</H3Infomation>
        <Dl>
          {skillState.map((item, idx) => {
            return (
              <DivInDl key={idx + item} img={item.img}>
                <div>
                  <Dt proficiency={item.proficiency} color={item.color}>
                    <span>{item.name}</span>
                    <span>{item.proficiency}%</span>
                  </Dt>
                  <dd>{item.value}</dd>
                </div>
              </DivInDl>
            )
          })}
        </Dl>
      </DivContain>
    </SectionSkill>
  )
};

export default SkillPage;