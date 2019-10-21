import styled from 'styled-components';
import { Desktop, Tablet } from '../../../styles/css/shared-styled'

export const SectionStrength = styled.section`
  background-color: #ece4db;
  padding: 75px 0;
  text-align: center;
`;

export const DivContain = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 85%;
  text-align: left;

  @media ${Tablet} {
    display: flex;
    margin: 0 auto;
    width: 87%;
  }

  @media ${Desktop} {
    margin-top: unset;
    width: ${100 * 1410 / 1920}%;
  }
`;


export const Dl = styled.dl`
  display: flex;
  justify-content: space-between;
  flex-wrap:  wrap;
  
  div {
    display: inline-block;
    /* width: 486px; */
    margin-bottom: 3vh;

    dd {
      /* width: 100%; */
      /* height: 70px; */
      font-size: 1.1rem;
      line-height: 1.7rem;
      color: #7a7a7a;
    }
  }

  @media ${Tablet} {
    width: 87%;
    text-align: center;

    div {
      width: 24vw;
      white-space: pre;

      dd {
        line-height: 2.3rem;
      }
    }
  }

  @media ${Desktop} {
    width: ${100 * (1410 - 230) / 1920}vw;

    div {
      /* width: ${100 * 486 / 1920}vw; */
      width: unset;
      dd {
        font-size: 1.6rem;
      }
    }
  }
`;

export const Dt = styled.dt`
  height: 41px;
  font-size: 2.3rem;
  line-height: 4rem;
  color: #404040;



  @media ${Tablet} {
  }

  @media ${Desktop} {
    font-size: 2.8rem;
  }

`;
