import styled from 'styled-components';

export const HomeLists = styled.div`
  overflow: hidden;
`;

export const List = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 100%;
  padding: 0 1rem;
 
`;

export const Movies = styled.div`
  display: flex;
  gap: 10px;
  overflow: hidden;
`;

export const Title = styled.h3`
  color: white;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  margin-bottom: 30px;
`


export const LeftArrow = styled.span`
  position: absolute;
  background-color: red;
  left: 0;
  height: 100%;

  max-width: 40px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0,0,0,0.7);

  svg {
    path{
      color: white;
    }
  }

  z-index: 99;
`;

export const RightArrow = styled.span`
  position:absolute;
  background-color: red;
  right: 0;
  height: 100%;

  max-width: 40px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: rgba(0,0,0,0.7);
  z-index: 99;

  svg {
    path{
      color: white;
    }
  }
  `;