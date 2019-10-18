import styled from 'styled-components';

// 미디어 쿼리
export const Desktop = '(min-width: 1200px)';
export const Tablet = '(min-width: 768px)';




export const H3Infomation = styled.h3`
  font-size: 2rem;
  color: #575757;
  width: 105px;
  line-height: 4rem;
  margin-bottom: 5vh;

  @media ${Tablet} {
    width: 230px;
  }

  @media ${Desktop} {
    width: ${100 * 230 / 1920}vw;
  }
`;

