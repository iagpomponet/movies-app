import React from 'react';

import * as Styled from './styles'
import HomeLists from '../../components/home-lists/index';

const Index: React.FC = () => {
  return <Styled.Index>
            <Styled.Container>
              <HomeLists />
            </Styled.Container>
        </Styled.Index>;
}

export default Index;