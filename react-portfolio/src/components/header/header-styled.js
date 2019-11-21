import styled from 'styled-components';
import { Desktop, Tablet } from '../../styles/css/shared-styled';

import img from '../../styles/image/logo.png'

export const SectionHeader = styled.section`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255,255,255,0.8);
  transition: .5s;

  @media (min-width: 1200px) {
    background-color: rgba(0, 0, 0, 0);
  }

`;

export const DivContain = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 100%;
  /* text-align: left; */

  @media ${Tablet} {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    width: 87%;
    padding: 20px 0;
  }

  @media ${Desktop} {
    margin-top: unset;
    width: ${100 * 1410 / 1920}%;
  }
`;

export const H1HOME = styled.h1`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  margin: 10px auto 0 auto;

  width: 35vw;
  height: 30px;
  cursor: pointer;

  @media ${Tablet} {
    width: 20vw;
    margin: unset;
    
  }

  @media ${Desktop} {
  }
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    line-height: 3rem;
    font-size: 2rem;

    li {
      cursor: pointer;

      span {
        opacity: 0.7;
        height: 24px;
        font-size: 1.3rem;
        line-height: 3rem;
        font-weight: 700;

      }
      
      
      &:nth-child(-n+3) {
        margin-right: 40px;
      }
    }

    .active {
      color: #19387e;
      opacity: unset;
    }

  }

  @media ${Desktop} {
    ul {
      justify-content: unset;
      li {
        span {
          font-size: 1.6rem;
        }
      }
    }
  }
`;

