import React, { useState } from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { movieResults } from '../../interfaces/apiResponseInterfaces';

import * as Styled from './styles';


import Card from '../card/index';

interface MovieList {
  moviesData: [movieResults] | undefined,
  title: string
}

const MovieList: React.FC<MovieList> = ({ moviesData, title }) => {
  const [rowPosition, setRowPosition] = useState(-75);

  const handleRightArrow = () => {
    let x = rowPosition - Math.round(window.innerWidth / 2);

    let listWidth = moviesData && moviesData?.length * 150;

    if(listWidth && (window.innerWidth - listWidth) > x){
      x = (window.innerWidth - listWidth);
    }

    setRowPosition(x);
  }

  const handleLeftArrow = () => {
    let x = rowPosition + Math.round(window.innerWidth / 2);

    if(x > 0){
      x = 0;
    }

    setRowPosition(x);
  }
  
  return (
          <Styled.List>
            <Styled.Title>
              {title}
            </Styled.Title>
            <Styled.Container>
              <Styled.LeftArrow onClick={handleLeftArrow}>
                <ArrowBackIosIcon />
              </Styled.LeftArrow>
              <Styled.RightArrow onClick={handleRightArrow} >
                <ArrowForwardIosIcon />
              </Styled.RightArrow>
              <Styled.Movies style={{
                marginLeft: rowPosition,
                width: moviesData && moviesData?.length * 150
              }}>
                {
                  moviesData && moviesData.map(result => {
                    return <Card key={result.id} movieData={result} />
                  })
                }
              </Styled.Movies>
            </Styled.Container>
          </Styled.List>
  )
          
}

export default MovieList;