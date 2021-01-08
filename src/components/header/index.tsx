import React from 'react';

import {ReactComponent as Icon} from '../../assets/movie-clapper.svg'
import * as Styled from './styles';

const Header: React.FC = () => {
  return <Styled.Header>
    <Styled.Container>
      <h1>
        MOVIES APP
      </h1>
      <Icon />
    </Styled.Container>
  </Styled.Header>;
}

export default Header;