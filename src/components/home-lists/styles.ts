import styled from 'styled-components';

export const HomeLists = styled.div`
  overflow: hidden;
`;

export const Movies = styled.div`
  display: flex;
  gap: 10px;
  transition-property: transform;
  transition: 0.7s;
`;

export const Title = styled.h3`
  color: white;
  font-size: 20px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  margin-bottom: 30px;
  padding: 0 1rem;
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

  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-in;


  svg {
    path{
      color: white;
    }
  }
  
  cursor: pointer;
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

  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-in;
  cursor: pointer;

  svg {
    path{
      color: white;
    }
  }
  `;

  export const List = styled.div`
  position: relative;
  overflow: hidden;
  max-width: 100%;
  margin-bottom: 30px;

  &:hover ${LeftArrow} {
    opacity: 1;
    visibility: visible;
  }

  &:hover ${RightArrow} {
    opacity: 1;
    visibility: visible;
  }
  `;


export const Container = styled.div`
  position: relative;
`;