import styled from 'styled-components';
import { Desktop, Tablet } from '../../../../styles/css/shared-styled';
import img from '../../../../styles/image/project/megabox.jpg'

export const SectionProject = styled.section`
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
  }

  @media ${Desktop} {
    margin-top: unset;
    width: ${100 * 1410 / 1920}%;
  }
`;

export const DivFlex = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${Tablet} {
    width: 87%;
  }
`;

export const Figure = styled.figure`
  cursor: pointer;
  border-radius: 3px;
  border: solid 1px #e8e8e8;
  background-color: #fcfcfc;
  margin-bottom: 25px;
  
  &:hover {
    border: solid 1px #e9e9e9;
    box-shadow: 4px 4px 7px 0 rgba(0, 0, 0, 0.1);
  }

  @media ${Tablet} {
    width: 36vw;
  }

  @media ${Desktop} {
    width: 19vw;
  }
`;

export const Img = styled.img.attrs({
  src: img
})`
  width: 100%;
  height: 200px;
`;

export const Figcaption = styled.figcaption`
  text-align: center;
  /* font-size: 2rem; */
  font-size: 1.5rem;
  line-height: 2rem;
  color: #404040;
  padding: 15px 0;
`;

export const SpanTime = styled.span`
  display: block;
  /* font-size: 1.6rem; */
  font-size: 1.1rem;
  /* line-height: 3rem; */
  color: #7a7a7a;
`;