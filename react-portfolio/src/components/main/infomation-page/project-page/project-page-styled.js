import styled from 'styled-components';
import { Desktop, Tablet } from '../../../../styles/css/shared-styled';


export const SectionProject = styled.section`
  width: 100vw;
  text-align: center;
  padding: 5px;
  
  
  @media ${Tablet} {
    padding: 170px 0;

    .modal {
      overflow-x: hidden!important;
      overflow-y: hidden!important;
  
      .modal-content {
        height: 900px;
        padding: 29px;
        overflow-y: scroll;
      }
    }
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
  
  &:hover {
    border: solid 1px #e9e9e9;
    box-shadow: 4px 4px 7px 0 rgba(0, 0, 0, 0.1);
    background-color: unset;
    transition: transform .35s;
      
    img {
      transform:scale(1.1);
      transition: transform .35s;
    }
  }

  @media ${Tablet} {
    width: 36vw;
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

export const ModalTime = styled.span`


  @media ${Tablet} {
    align-self: flex-end;
    opacity: 0.65;
    font-size: 1.6rem;
    line-height: 2.3rem;
    color: #7a7a7a;
  }
`;

export const ModalHead = styled.div`
  flex-direction: column-reverse;
  border-bottom: unset;
  

  > div {
    margin: 0 auto;
    text-align: center;

    h4 {
      font-size: 2.5rem;
      line-height: 3.7rem;
      color: #575757;
    }
  }

  @media ${Tablet} {
    margin-bottom: 40px;
  }
`;

export const ModalBody = styled.div`
  > div {
    &:nth-child(1) {
      padding: 10px 15px;
      background-color: #ece4db;
      margin-bottom: 30px;
    }
  }

  h5 {
    width: 82px;
    font-size: 1.6rem;
    line-height: 2.3rem;
    color: #575757;
    flex-shrink: 0;
  }

  p {
    font-size: 1.5rem;
    line-height: 2.6rem;
    color: #7a7a7a;
  }

  .intro {
    margin-bottom: 20px;
  }

  .sub-intro {
    > div {
      display: flex;
      margin-bottom: 20px;
    }
  }

  @media ${Tablet} {
    > div {
      &:nth-child(1) {
        padding: 25px 30px;
        margin-bottom: 30px;
      }
    }

    p {
      font-size: 1.8rem;
      line-height: 2.6rem;
      color: #7a7a7a;
    }
    
  }
`;

export const Li = styled.li`
  margin-bottom: 50px;

  img {
    height: 150px;
    margin: 0 auto 20px auto;
    display: block;
    width: 80%;
    border: solid 1px #707070;
    background-color: #ffffff;
  }

  > div {
    h6 {
      font-size: 2rem;
      line-height: 3rem;
      color: #404040;
      margin-bottom: 10px;
    }

    dl {
      font-size: 1.4rem;
      line-height: 2.3rem;

      dt {
        color: #505050;
        &:before {
          content: '∙ ';
          display: inline-block;
          margin-right: 5px;

        }
      }

      dd {
        margin-bottom: 10px;
        color: #7a7a7a;
        white-space: pre-line;
      }
    }
  }

  @media ${Tablet} {
    display: flex;

    img {
      height: 238px;
      width: 100%;
      margin: unset;
      display: unset;
    }

    > div {
      h6 {
        font-size: 2rem;
      }

      dl {
        font-size: 1.6rem;
      }
    }

    img {
      width: 350px;
      margin-right: 30px;
    }
  }
`;