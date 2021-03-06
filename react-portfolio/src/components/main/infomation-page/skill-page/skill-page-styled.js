import styled from 'styled-components';
import { Desktop, Tablet } from '../../../../styles/css/shared-styled';


export const SectionSkill = styled.section`
  width: 100vw;
  text-align: center;
  padding-bottom: 80px;
  padding-top: 80px;

  @media ${Tablet} {
    padding-bottom: 120px;
    padding-top: 120px;
  }

  @media ${Desktop} {
  }
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
  }

  @media ${Desktop} {
    margin-top: unset;
    width: ${100 * 1410 / 1920}%;
  }
`;

export const DotIcon = styled.p`
  width: 56px;
  height: 56px;
  margin: 0 auto;
  background-image: url(${props => props.dot});
`;


export const P = styled.p`
  font-size: 3rem;
  margin: 10vh auto;
  line-height: 3.5rem;
  display: inline-block;
  text-align: left;

  strong {
    display: block;
    font-weight: 700;
  }

  @media ${Tablet} {
    font-size: 3.7rem;

    strong {
      display: initial;
      font-weight: 700;
      margin-left: 15px;
      margin-right: 15px;
    }
  }

  @media ${Desktop} {
    margin-top: 20px;
    margin-bottom: 170px;

    strong {
      margin-left: 30px;
      margin-right: 30px;
    }
  }
`;

export const Dl = styled.dl`
  display: flex;
  justify-content: space-between;
  flex-wrap:  wrap;
  

  @media ${Tablet} {
    width: 87%;
  }

  @media ${Desktop} {
    width: ${100 * (1410 - 230) / 1920}vw;
  }
`;

export const DivInDl = styled.div`
  position: relative;
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

  @media ${Tablet} {
    width: 32.227vw;

    dd {
      line-height: 2.3rem;
    }
  }

  @media ${Desktop} {
    width: ${100 * 546 / 1920}vw;
    display: flex;

    &:before {
      content: '';
      display: inline-flex;
      width: ${100 * 50 / 1920}vw;
      background-image: url(${props => props.img});
      background-size: contain;
      background-repeat: no-repeat;
      margin-right: 15px;
      margin-top: 10px;
    }

    div {
      width: 100%;
    }

    dd {
      font-size: 1.6rem;
    }
  }
`;

export const Dt = styled.dt`
  height: 41px;
  font-size: 2.3rem;
  line-height: 4rem;
  color: #404040;

  span {
    &:first-child {
      display: inline-block;
      width: 145px;
      line-height: 2rem;
    }

    &:last-child {
      font-size: 1rem;
      color: #404040;
      vertical-align: bottom;
      /* position: relative; */

      &:before {
        content: '';
        display: inline-block;
        width: 45%;
        margin-right: 2%;
        height: 6px;
        border-radius: 50px;
        background: linear-gradient( to right, ${props => props.color} ${props => props.proficiency}%, #e8e8e8 ${props => props.proficiency}%);
      }

    }
  }


  @media ${Tablet} {

    span {
      &:first-child {
        display: inline-block;
        width: 21vw;
      }
      &:last-child {
        &:before {
          width: ${100 * 160 / 1920}vw;
        }
      }
    }
  }

  @media ${Desktop} {
    span {
      &:first-child {
        font-size: 2.8rem;
        width: ${100 * 290 / 1920}vw;
      }

      &:last-child {
        font-size: 1.2rem;
        &:before {
          width: ${100 * 160 / 1920}vw;
        }
      }
    }
  }
`;
