import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieDetails, getMovieWatchProviders } from '../../api/index';
import { movieResults } from '../../interfaces/apiResponseInterfaces';
import { ReactComponent as LoadingSpinner } from '../../assets/loading-spinner.svg'
import * as Styled from './styles';

interface paramI {
  id: string
}

interface MovieData extends movieResults {
  watchProviders: {
    buy: [IProviders] | undefined,
    flatrate: [IProviders] | undefined,
  },
}

interface IProviders {
  logo_path: string
}


const MoviePage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [movieData, setMovieData] = useState<MovieData>();

  const params = useParams<paramI>();
  const { id } = params;

  // values from state


  const getMovieInfo = async () => {
    if(id){
      const movieData = await getMovieDetails(id);
      const movieWatchProviders = await getMovieWatchProviders(id);

      const data = movieData.data;
      const providersData = movieWatchProviders.data;

      console.log('movieWatchProviders :>> ', movieWatchProviders);

      if(data && movieWatchProviders){
        setMovieData({
          ...data,
          watchProviders: providersData.results['BR']
        });

       

        setLoading(false);
      }

      
    }

    console.log('movieData :>> ', movieData && movieData.watchProviders);
  }

  useEffect(() => {
    try {
      getMovieInfo();
    }
    catch(err){
      throw new Error(err);
    }
  }, [])

  const buyProviders = movieData?.watchProviders?.buy;
  const rentProviders = movieData?.watchProviders?.flatrate;

  return (
    <Styled.MoviePage>
      {loading ? <LoadingSpinner/> :
      <Styled.Container>
        <Styled.Poster src={`https://image.tmdb.org/t/p/original${movieData?.poster_path}`} />
        <Styled.InfoContainer>
          <Styled.Thumb>
            <img src={`https://image.tmdb.org/t/p/w300${movieData?.poster_path}`}></img>
          </Styled.Thumb>
          <Styled.InfoTextContainer>
            <Styled.Title>{movieData?.original_title}</Styled.Title>
            <Styled.Overview>
              {movieData?.overview}
            </Styled.Overview>
            <Styled.Providers>
              <div>
              {
                buyProviders && <h5>Buy:</h5>
              }
              <div>
                {buyProviders && buyProviders.map((provider) => {
                  console.log('provider :>> ', provider);
                  
                  return <img src={`https://image.tmdb.org/t/p/w300${provider?.logo_path}`}></img>
                })}
              </div>
              </div>
              <div>
              {
                rentProviders && <h5>Rent: </h5>
              }
              <div>
                {rentProviders && rentProviders.map((provider) => {
                  console.log('provider :>> ', provider);
                  
                  return <img src={`https://image.tmdb.org/t/p/w300${provider?.logo_path}`}></img>
                })}
              </div>
              </div>
            </Styled.Providers>
          </Styled.InfoTextContainer>
        </Styled.InfoContainer>
      </Styled.Container>
      }
    </Styled.MoviePage>
  )
}

export default MoviePage;