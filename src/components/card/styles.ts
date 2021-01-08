import styled from 'styled-components';

export const Card = styled.article`
  max-width: 300px;
  width: 100%;

  display: flex;

  transition: .4s;

  &:hover {
    cursor: pointer;
    transform: translateY(-5%);
  }
`;

export const Image = styled.img``;