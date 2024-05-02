import { Movie } from "../types"
import { api } from "./api"

//Мб сделать разделение запросов по категориям, например фильм/категория

export const movieApi = api.injectEndpoints({
  endpoints: builder => ({
    allMovies: builder.query<void, void>({
      query: () => ({
        url: "api/v1/films",
        method: "GET",
      }),
    }),
    getMovieById: builder.query<Movie, string>({
      query: id => ({
        url: `api/v1/films/${id}`,
        method: "GET",
      }),
    }),
    popularMovies: builder.query<void, void>({
      query: () => ({
        url: "api/v1/films/popular",
        method: "GET",
      }),
    }),
    bigRatingMovies: builder.query<void, void>({
      query: () => ({
        url: "api/v1/films/big-rating",
        method: "GET",
      }),
    }),
    newMovies: builder.query<void, void>({
      query: () => ({
        url: "api/v1/films/new",
        method: "GET",
      }),
    }),
    watchedMovies: builder.query<void, void>({
      query: () => ({
        url: "api/v1/watched",
        method: "GET",
      }),
    }),
  }),
})

export const {
  useAllMoviesQuery,
  useBigRatingMoviesQuery,
  usePopularMoviesQuery,
  useNewMoviesQuery,
  useWatchedMoviesQuery,
  useGetMovieByIdQuery,
  useLazyGetMovieByIdQuery,
  useLazyAllMoviesQuery,
  useLazyPopularMoviesQuery,
  useLazyBigRatingMoviesQuery,
  useLazyNewMoviesQuery,
  useLazyWatchedMoviesQuery,
} = movieApi
