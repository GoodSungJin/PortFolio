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

  span {
    display: block;

    b {
      font-weight: 700;
    }
  }

  @media ${Tablet} {
    width: 100%;
    text-align: center;
        
    span {
      display: unset;

      &:first-child {
        margin-right: 5vw;
      }
    }
  }

  @media ${Desktop} {
    font-size: 4.3rem;
    letter-spacing: 1.72rem;
    min-width: 1200px;
    width: 1200px;
    margin-top: unset;
    line-height: 6rem;

    display: flex;
    justify-content: space-between;
    position:absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -60%);
    white-space: nowrap;

    span {
      &:first-child {
        margin-left: 3vw;
      }
    }
  }
`;



// .typewriter-text {
//   display: inline-block;
//   overflow: hidden;
//   letter-spacing: 2px;
//  animation: typing 5s steps(30, end), blink .75s step-end infinite;
//   white-space: nowrap;
//   font-size: 30px;
//   font-weight: 700;
//   border-right: 4px solid orange;
//   box-sizing: border-box;
// }

// @keyframes typing {
//   from { 
//       width: 0% 
//   }
//   to { 
//       width: 100% 
//   }
// }

// @keyframes blink {
//   from, to { 
//       border-color: transparent 
//   }
//   50% { 
//       border-color: orange; 
//   }
// }