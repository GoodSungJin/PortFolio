import styled from 'styled-components';
import { Desktop, Tablet } from '../../../../styles/css/shared-styled';


export const SectionProject = styled.section`
  width: 100vw;
  text-align: center;
  padding: 5px;
  
  
  @media ${Tablet} {
    padding: 170px 0;
  }

`;

export const DivContain = styled.div`
  position: relative;
  display: inline-block;
  height: 100%;
  width: 85%;
  text-align: left;

  @media ${Tablet} {
    /* display: flex; */
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
`;

export const H3Project = styled.h3`
  font-size: 2.5rem;
  line-height: 4rem;
  color: #575757;
  margin: 0 auto;
  width: 85px;
  height: 37px;
  margin-bottom: 50px;
`;

export const Figure = styled.figure`
  cursor: pointer;
  border-radius: 3px;
  border: solid 1px #e8e8e8;
  background-color: #fcfcfc;
  margin-bottom: 25px;

  .wrapper-img {
    overflow: hidden;
  }
  
  &:hover {
    border: solid 1px #e9e9e9;
    box-shadow: 4px 4px 7px 0 rgba(0, 0, 0, 0.1);
    background-color: unset;
    transition: transform .35s;
      
    img {
      transform:scale(1.2);
      transition: transform .35s;
    }
  }

  @media ${Tablet} {
    width: 27vw;
  }

  @media ${Desktop} {
    width: ${100 * 330 / 1920}vw;
  }
`;

export const Img = styled.img.attrs(props => ({
  src: props.img
}))`
  width: 100%;
  height: 150px;

  @media ${Tablet} {
    height: 200px;
  }
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
  font-size: 1.1rem;
  color: #7a7a7a;
`;