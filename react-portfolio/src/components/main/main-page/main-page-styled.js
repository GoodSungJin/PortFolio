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
  text-align: center;

  @media ${Desktop} {
  }
`;

export const DivContain = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 10vh;

  @media ${Tablet} {
    margin-top: 18vh;
  }

  @media ${Desktop} {
    height: 100%;
    margin-top: unset;
  }
`;

export const P = styled.p`
  font-size: 4rem;
  color: #ffffff;
  text-shadow: 0 0 10px #000000;

  width: 331px;
  letter-spacing: 0.3rem;
  line-height: 5rem;
  margin: 0 auto;


  position: relative;
  border-right: 2px solid rgba(255,255,255,.75);
  overflow: hidden;
  animation: typewriter 4s steps(44) 1s 1 normal both,
            blinkTextCursor 500ms steps(44) infinite normal;


  @keyframes typewriter{
    0% {
      width: 0;
    }
    
    50% {
    }
    
    100% {
      width: 100%;
    }
  }
  @keyframes blinkTextCursor{
    from{border-right-color: rgba(255,255,255,.75);}
    to{border-right-color: transparent;}
  }




  span {
    display: block;

    b {
      font-weight: 700;
    }
  }

  @media ${Tablet} {
    text-align: center;
    width: 100%;
    white-space: nowrap;

    @keyframes typewriter{
      0% {
        width: 0;
      }
      
      100% {
        width: 100%;
      }
    }
        
    span {
      display: inline-block;
      

      &:first-child {
        margin-right: 5vw;
      }
    }
  }

  @media ${Desktop} {
    font-size: 4.3rem;
    letter-spacing: 1.72rem;
    /* min-width: 1200px;
    width: 1200px; */
    margin-top: unset;
    line-height: 6rem;

    display: flex;
    /* justify-content: space-between; */
    position:absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -60%);
    white-space: nowrap;

    @keyframes typewriter{
    0% {
      width: 0;
    }
    
    50% {
    }
    
    100% {
      justify-content: space-between;
      width: 1200px;
    }
  }

    span {
      &:first-child {
        margin-left: 3vw;
      }
    }
  }
`;