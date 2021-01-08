import React, { useEffect, useState } from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { movieResults } from '../../interfaces/apiResponseInterfaces';

import * as Styled from './styles';
import { getPopularMovies } from '../../api/index';

import Card from '../card/index';

const HomeLists: React.FC = () => {
  const [moviesData, setMoviesData] = useState<moviesData>();

  interface moviesData {
    popularMovies: [movieResults]
  }

  const getMovies = async () => {
    try {
      const popularMoviesResponse = await getPopularMovies();
      const popularMovies = popularMoviesResponse.data.results;
      
      setMoviesData({
        ...moviesData,
        popularMovies
      })

      console.log('popularMovies :>> ', popularMovies);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return <Styled.HomeLists>
          <Styled.List>
            <Styled.Title>
              Popular Movies
            </Styled.Title>
            <Styled.LeftArrow >
              <ArrowBackIosIcon />
            </Styled.LeftArrow>
            <Styled.RightArrow >
              <ArrowForwardIosIcon />
            </Styled.RightArrow>
            <Styled.Movies>
              {moviesData && Object.keys(moviesData).map((key) => {
                const results = moviesData[key as keyof moviesData];

                return results.map((result, index) => {
                  return <Card key={index} movieData={result} />
                })
              })}
            </Styled.Movies>
          </Styled.List>
  </Styled.HomeLists>;
}

export default HomeLists;