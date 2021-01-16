import React from 'react';
import { Link } from 'react-router-dom';


import {ReactComponent as Icon} from '../../assets/movie-clapper.svg'
import * as Styled from './styles';

const Header: React.FC = () => {
  return <Styled.Header>
    <Styled.Container>
     <Link to="/">
        <h1>
          MOVIES APP
        </h1>
        <Icon />
     </Link>
    </Styled.Container>
  </Styled.Header>;
}

export default Header;