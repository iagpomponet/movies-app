import React, { useEffect, useState }  from 'react';

import { movieResults } from '../../interfaces/apiResponseInterfaces';
import { ReactComponent as LoadingSpinner } from '../../assets/loading-spinner.svg'
import * as Styled from './styles'
import MovieList from '../../components/home-lists/index';
import { getPopularMovies, getTopRatedMovies, getUpComingMovies } from '../../api/index';

interface moviesData {
  popularMovies: [movieResults],
  topRatedMovies: [movieResults],
  upComingMovies: [movieResults]
}

const Index: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [moviesData, setMoviesData] = useState<moviesData>();


  const getMovies = async () => {
    try {
      const popularMoviesResponse = await getPopularMovies();
      const topRatedResponse = await getTopRatedMovies();
      const upComingMoviesResponse = await getUpComingMovies();

      const popularMovies = popularMoviesResponse.data.results;
      const topRatedMovies = topRatedResponse.data.results;
      const upComingMovies = upComingMoviesResponse.data.results;
      
      setMoviesData({
        topRatedMovies,
        popularMovies,
        upComingMovies
      })

      setLoading(false);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getMovies();
  }, [])


  return (
    <Styled.Index>
      {
        loading ? <LoadingSpinner/> :
        <Styled.Container>
          <MovieList moviesData={moviesData?.popularMovies} title="Popular"/>
          <MovieList moviesData={moviesData?.topRatedMovies} title="Top Rated"/>
          <MovieList moviesData={moviesData?.upComingMovies} title="Upcoming"/>
        </Styled.Container>
      }
      </Styled.Index>
  )
}

export default Index;