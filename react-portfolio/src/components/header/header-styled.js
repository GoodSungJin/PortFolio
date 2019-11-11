import styled from 'styled-components';
import { Desktop, Tablet } from '../../styles/css/shared-styled';

import img from '../../styles/image/logo.png'

export const SectionHeader = styled.section`
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  transition: .5s;

`;

export const DivContain = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 85%;
  /* text-align: left; */

  @media ${Tablet} {
    display: flex;
    margin: 0 auto;
    width: 87%;
  }

  @media ${Desktop} {
    margin-top: unset;
    width: ${100 * 1410 / 1920}%;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
  }
`;

export const H1HOME = styled.h1`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: contain;
  width: 10vw;
  height: 30px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  ul {
    display: flex;
    line-height: 3rem;
    font-size: 2rem;

    li {
      cursor: pointer;

      span {
        opacity: 0.7;
        height: 24px;
        font-size: 1.6rem;
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
`;

