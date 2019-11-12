import styled from 'styled-components';
import { Desktop, Tablet } from '../../../styles/css/shared-styled';

import MainBG from '../../../styles/image/portfolio-bg.jpg';


export const SectionMain = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${MainBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  @media ${Desktop} {
  }
`;

export const DivContain = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 13vh;
  left: 50%;
  transform: translateX(-50%);

  @media ${Tablet} {
    margin-top: 18vh;
  }

  @media ${Desktop} {
    left: unset;
    transform: unset;
    height: 100%;
    width: 100%;
    margin-top: unset;
  }
`;

export const P = styled.p`
  font-size: 3rem;
  color: #ffffff;
  text-shadow: 0 0 10px #000000;

  width: 331px;
  letter-spacing: 0.3rem;
  line-height: 4rem;
  margin: 0 auto;

  text-align: center;



  @keyframes Ftypewriter{
    0% {width: 0;}
    100% {width: 230px}
  }

  @keyframes Stypewriter{
    0% {width: 0;}
    100% {width: 255px}
  }

  @keyframes blinkTextCursor{
    0%{
      border-right: 2px solid rgba(255,255,255,.75);
      }
    100%{
      border-right: 2px solid transparent;
    }
  }

  > span {
    b {
      font-weight: 700;
    }

    display: block;
    &:first-child {
      > span {
        overflow: hidden;
        white-space: nowrap;
        display:inline-block;
        position: relative;
        
        overflow: hidden;
        animation: Ftypewriter 2s steps(22) 1s 1 normal both,
                  blinkTextCursor 500ms steps(44) 6 normal both;
      }
    }

    &:last-child{
      > span {
        overflow: hidden;
        white-space: nowrap;
        display:inline-block;
        position: relative;
        overflow: hidden;
        animation: Stypewriter 2s steps(22) 3s 1 normal both,
                  blinkTextCursor 650ms steps(44) 3s infinite forwards;
      }
    }

  }


  @media ${Tablet} {
    width: 685px;
    white-space: nowrap;
    font-size: 4rem;
    text-align: unset;

    @keyframes Ftypewriter{
      0% {width: 0;}
      100% {width: 295px}
    }

    @keyframes Stypewriter{
      0% {width: 0;}
      100% {width: 335px}
    }

    > span {
      display: inline-block;
      b {
        font-weight: 700;
      }

      &:first-child {
        margin-right: 5vw;
      }
    }
  }

  @media ${Desktop} {
    width: ${100 * 1300 / 1920}vw;
    text-align: unset;
    font-size: 4.3rem;
    letter-spacing: 1.72rem;
    margin-top: unset;
    line-height: 6rem;

    position:absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -60%);
    white-space: nowrap;

    > span {
      &:first-child {
        margin-left: 3.5vw;
        float: left;
        margin-right: unset;
      }

      &:last-child {
        width: 480px;
        float: right;
      }
    }

    @keyframes Ftypewriter{
      0% {width: 0;}
      100% {width: 430px}
    }

    @keyframes Stypewriter{
      0% {width: 0;}
      100% {width: 480px}
    }
  }
`;