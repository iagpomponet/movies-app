import styled from 'styled-components';

export const Header = styled.div`
  background-color: black;
  display: flex;
  height: 70px;
  color: ${props => props.theme.colors.primary};
  font-weight: 800;
  font-size: 24px;
  letter-spacing: 2px;
  
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.containerSize};
  width: 100%;
  display: flex;
  gap: 10px;
  padding: 0 1rem;

  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: unset;
    color: ${props => props.theme.colors.primary};
    
    &:hover {
      opacity: 0.8;
      transition: .4s;
    }
  }

  h1 {
    font-weight: normal;
    font-size: 28px;
    height: 32px;
    display: flex;
    margin-right: 10px;
  }

  svg {
    width: 28px;
    height: 28px;

    path {
      fill: ${props => props.theme.colors.primary}
    }
  }
`