import axios from 'axios';

const api = axios.create({
  baseURL : 'https://api.themoviedb.org/3/'
})

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDc2NjE1YWZhMTAzZGVmZTE1MWFlMDAwNzUyMDg4MiIsInN1YiI6IjVmMTUxMDQ4ZDQ2NTM3MDAzNTY2OWU2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IQkOBR1EBeMEn_LRmUDILR2YOz2fKdFI7E8eUIbwkNM'

const config = {
  headers: {
    'Authorization': `Bearer ${token}`
  }
}

export const getPopularMovies = () => api.get('/movie/popular', config);
export const getTopRatedMovies = () => api.get('/movie/top_rated', config);
export const getUpComingMovies = () => api.get('/movie/upcoming', config);
export const getMovieDetails = (id: string) => api.get(`/movie/${id}`, config);
export const getMovieWatchProviders = (id: string) => api.get(`/movie/${id}/watch/providers`, config);



