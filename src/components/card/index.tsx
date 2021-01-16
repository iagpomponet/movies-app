import React from 'react';
import { Link } from 'react-router-dom';
import { movieResults } from '../../interfaces/apiResponseInterfaces';

import * as Styled from './styles';



interface CardProps {
  movieData: movieResults
}

const Card: React.FC<CardProps> = ({ movieData }) => {
  const { poster_path, vote_average, title, id } = movieData;

  return (
  <Link to={`movie/${id}`}>
    <Styled.Card>
            <Styled.Image src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
            <Styled.Details>
              <Styled.Title>{title}</Styled.Title>
              <Styled.Votes>
                {vote_average}
              </Styled.Votes>
            </Styled.Details>
          </Styled.Card>
  </Link>
  )
      
}

export default Card;