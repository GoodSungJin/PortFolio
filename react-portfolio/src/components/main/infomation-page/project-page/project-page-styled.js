import styled from 'styled-components';
import { Desktop, Tablet } from '../../../../styles/css/shared-styled';


export const SectionProject = styled.section`
  width: 100vw;
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

  .modal-content {
    
  }

@media ${Tablet} {
  width: 87%;
  .modal-content {
    
    .modal-header {
    }

  }
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
  src: props => props.img
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

export const ModalTime = styled.span`


  @media ${Desktop} {
    font-size: 1.5rem;
    color: #7a7a7a;
    line-height: 3rem;
    align-self: flex-end;
    margin-left: 1vw;
  }
`;

export const ModalHead = styled.div`
  padding: 3rem;
`;

export const ModalBody = styled.div`
  > div {
    display: flex;
    padding: 3rem;
    justify-content: space-between;

  &:nth-child(1) {
    background-color: #ece4db;

  }
  }


  h5 {
    line-height: 2.5rem;
    font-size: 2rem;
    color: #575757;
    width: 95px;
  }

  p {
    color: #222;
    letter-spacing: 1px;
    line-height: 2.5rem;
    font-size: 2rem;
  }

  .intro {
    display: flex;
    width: 50%;

    p {
      width: ${100 * 434 / 1920}vw;
    }
  }

  .sub-intro {
    display: flex;
    flex-wrap: wrap;
    width: 45%;

    p {
      width: ${100 * 375 / 1920}vw;
    }

    > div {
      display: flex;
      width: 100%;
      margin-bottom: 15px;
    }
  }

  ul {
    /* display: flex; */
    width: 91%;
    letter-spacing: 1px;
    line-height: 2.5rem;
    /* flex-wrap: wrap;
    justify-content: space-between; */
  }
`;

export const Li = styled.li`
  width: 48%;
  padding: 15px;
  margin-bottom: 45px;
  /* border: 2px solid;
  border-radius: 1%;
  border-color: cornflowerblue; */

  &:nth-child(even) {
    float: right;

  }

  &:nth-child(odd) {
    float: left;
  }


  &:before {
    content: '';
    display: block;
    background-image: url(${props => props.innerImg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: center;
    height: 200px;
    margin-bottom: 15px;
  }


  span {
    font-size: 2.5rem;
    display: block;
    margin-bottom: 15px;
  }

  dt {
    font-size: 1.7rem;
    margin-bottom: 10px;

  }
  dd {
    font-size: 1.4rem;
    margin-bottom: 15px;
    white-space: pre-line;
  }
`;