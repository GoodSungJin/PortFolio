import styled from 'styled-components';
import { Desktop } from '../../../styles/css/shared-styled';

export const Div = styled.div`

  @media ${Desktop} {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 100vh;
  }
`;