import React from 'react';

import { movieResults } from '../../interfaces/apiResponseInterfaces';

import * as Styled from './styles';



interface CardProps {
  movieData: movieResults
}

const Card: React.FC<CardProps> = ({ movieData }) => {
  const { poster_path } = movieData;
  console.log('props :>> ', movieData);

  return <Styled.Card>
          <Styled.Image src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
        </Styled.Card>
}

export default Card;