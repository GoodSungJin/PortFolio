import React from 'react';
import { H3Infomation } from '../../../styles/css/shared-styled';
import { SectionStrength, DivContain, Dl, Dt } from './strength-page-styled';

const StrengthPage = () => {
  const strength = [
    {
      name: '빠르고 유연한 대처능력',
      value: '문제 발생 시 근본적인 원인을 탐색하여 파악하고,\n상황에 맞는 해결 방법을 도출할 수 있으며,\n상황 판단 및 이해도가 높아 빠르게 업무에 적응하고 배웁니다.'
    },
    {
      name: '지피지기 의사소통',
      value: '타당한 의견을 어필할 수 있고, 관철하려 하지 않습니다.\n상대방의 니즈를 파악하고 의견을 수렴하여\n절충안을 제시해 타협 및 회유를 할 수 있습니다.'
    },
    {
      name: '학습에 대한 적극성',
      value: '문제 발생 시 근본적인 원인을 탐색하여 파악하고,\n상황에 맞는 해결 방법을 도출할 수 있고,\n상황 판단 및 이해도가 높아 빠르게 업무에 적응하고 배웁니다.'
    }
  ];
  return (
    <SectionStrength>
      <h2 className="a11y-hidden">강점 소개</h2>
      <DivContain>
        <H3Infomation>Strength</H3Infomation>
        <Dl>
          {
            strength.map((item, idx) => {
              return (
                <div key={idx + item.name}>
                  <Dt>{item.name}</Dt>
                  <dd>{item.value}</dd>
                </div>
              )
            })
          }
        </Dl>
      </DivContain>
    </SectionStrength>
  )
};

export default StrengthPage;