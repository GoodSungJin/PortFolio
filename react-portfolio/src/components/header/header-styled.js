import styled from 'styled-components';
import { Desktop, Tablet } from '../../styles/css/shared-styled';

import img from '../../styles/image/logo.png'

export const SectionHeader = styled.section`
  z-index: 9999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
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
      
      &:nth-child(n+2) {
        margin-left: 20px;

        &:before {
          content: '|';
          display: inline-block;
          margin-right: 20px;
        }
      }
    }

    .active {
      color: palevioletred;
    }
  }
`;

