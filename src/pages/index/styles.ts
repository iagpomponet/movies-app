import styled from 'styled-components';

export const Index = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.containerSize};
  width: 100%;
  display: flex;
  gap: 10px;
  

  align-items: center;
  overflow: hidden;
`;


