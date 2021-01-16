import styled from 'styled-components';

export const Details = styled.span`
  position: absolute;
  bottom: 0;
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 60px;
  display: flex;
  padding: 6px;
  justify-content: center;
  align-items: center;

  visibility: hidden;
  opacity: 0;
`;

export const Votes = styled.div`

`;

export const Title = styled.span`
  color: white;
  font-size: 16px;
  font-weight: normal;
`;

export const Card = styled.article`
  max-width: 150px;
  width: 100%;
  position: relative;

  display: flex;

  transition: .4s;

  img {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
    transform: translateY(-5%);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    
  }

  &:hover ${Details} {
    opacity: 1;
    visibility: visible;
  }
`;

export const Image = styled.img``;